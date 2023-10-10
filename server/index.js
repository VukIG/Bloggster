import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import dotenv from 'dotenv';
// import Post from './models/postSchema.js';

dotenv.config();

// constants
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

const app = express();

// middleware
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/users', userRoutes);


// database
mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
    app.get('/', (req, res) => {
      res.send('we on "/"');
    });

    // const post = new Post({
    //   title: 'test55555',
    //   creator: 'jodiGangEnyoer',
    //   message: 'we love casting spells'
    // })
    // post.save();
  })
  .catch((err) => console.error(err));
