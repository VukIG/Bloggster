import { query } from 'express';
import Post from '../models/postSchema.js';

export const getPosts = async (req, res) => {
  let { page } = req.query;
  if (page == undefined) page = 1;

  const LIMIT = 8;
  const startIndex = (Number(page) - 1) * LIMIT;

  try {
    const total = await Post.countDocuments({});
    const posts = await Post.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.json({
      data: posts,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getPostsBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query;

  try {
    const posts = await Post.find({
      $or: [{ name: searchQuery }, { tags: tags }],
    });
    res.json(posts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
