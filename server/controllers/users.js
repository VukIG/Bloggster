import User from '../models/userSchema.js';

export const createUser = async (req, res) => {
    const {
      userName,
      email,
      password,
    } = req.body;
  
    try {
      const user = new User({
        userName: userName,
        email: email,
        password: password,
      }).save();
      res.status(201).json({ user });
    } catch (err) {
      res.status(409).json({ message: err.message });
    }
  };