import express from 'express';
import { getPosts, getPost, getPostsBySearch, getPostsByCreator, createPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/creator', getPostsByCreator);
router.get('/search', getPostsBySearch);
router.get('/:id', getPost);

router.post('/createPost', createPost);

export default router;
