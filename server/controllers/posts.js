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

    res.status(200).json({
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
  let { searchQuery, tags } = req.query;
  searchQuery = decodeURIComponent(searchQuery);
  tags = decodeURIComponent(tags);

  searchQuery = searchQuery == undefined ? '' : searchQuery;
  tags = tags == undefined ? '' : tags;

  try {
    const posts = await Post.find({
      $and: [ { title: { $regex: searchQuery, $options: 'i' } }, { tags: { $regex: tags, $options: 'i' } } ]
    });

    res.status(200).json(posts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getPostsByCreator = async (req, res) => {
  let { creator } = req.query;
  creator = decodeURIComponent(creator);

  try {
    const posts = await Post.find({ creator: creator });
    res.status(200).json(posts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createPost = async (req, res) => {
  const {
    title,
    message,
    creator,
    tags,
    selectedFile,
    likes,
    comments,
    createdAt,
  } = req.body;

  try {
    const post = new Post({
      title: title,
      message: message,
      creator: creator,
      tags: tags,
      selectedFile: selectedFile,
      likes: likes,
      comments: comments,
      createdAt: createdAt,
    }).save();
    res.status(201).json({ post });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};