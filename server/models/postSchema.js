import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  tags: [String],
  selectedFile: String,
  likes: { type: [String], default: [] },
  comments: { type: [String], default: [] },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model('Post', postSchema);
