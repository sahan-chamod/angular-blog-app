const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../model/postModel'); // Assuming your model is defined in a separate file

// Create a new post
router.post('/posts', async (req, res) => {
  try {
    const { Title, Content, imageurl } = req.body;
    const newPost = new User({ Title, Content, imageurl });
    const savedPost = await newPost.save();
    res.status(201).json({ message: 'Post created successfully', post: savedPost });
  } catch (error) {
    res.status(500).json({ error: 'Error creating post', details: error.message });
  }
});

// Retrieve a list of all posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await User.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching posts', details: error.message });
  }
});

// Retrieve a specific post by ID
router.get('/posts/:postId', async (req, res) => {
  try {
    const post = await User.findById(req.params.postId);
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      res.status(200).json(post);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching post', details: error.message });
  }
});

// Update a specific post by ID (PATCH for partial update)
router.patch('/posts/:postId', async (req, res) => {
  try {
    const updatedPost = await User.findByIdAndUpdate(
      req.params.postId,
      { $set: req.body },
      { new: true }
    );
    if (!updatedPost) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      res.status(200).json({ message: 'Post updated successfully', post: updatedPost });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating post', details: error.message });
  }
});

// Delete a specific post by ID
router.delete('/posts/:postId', async (req, res) => {
  try {
    const deletedPost = await User.findByIdAndDelete(req.params.postId);
    if (!deletedPost) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      res.status(200).json({ message: 'Post deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting post', details: error.message });
  }
});

module.exports = router;
