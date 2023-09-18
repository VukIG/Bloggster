import express from 'express';
import { getPosts, getPost, getPostsBySearch } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/search', getPostsBySearch);
router.get('/:id', getPost);

export default router;
