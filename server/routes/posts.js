import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  console.log(`we on /posts/`);
  res.send('hi');
});

export default router;
