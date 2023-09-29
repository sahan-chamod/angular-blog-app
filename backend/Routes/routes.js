// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../model/userModel');

// Create a new user
router.post('/user', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    const savedUser = await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: savedUser });
  } catch (error) {
    res.status(500).json({ error: 'Error creating user', details: error.message });
  }
});

// Retrieve a list of all users
router.get('/user', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users', details: error.message });
  }
});

// Retrieve a specific user by ID
router.get('/user/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user', details: error.message });
  }
});

// Update a specific user by ID (PATCH for partial update)
router.patch('/user/:userId', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { $set: req.body },
      { new: true }
    );
    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating user', details: error.message });
  }
});

// Delete a specific user by ID
router.delete('/user/:userId', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.userId);
    if (!deletedUser) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json({ message: 'User deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user', details: error.message });
  }
});

module.exports = router;



