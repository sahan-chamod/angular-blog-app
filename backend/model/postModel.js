const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Title: String,
  Content: String,
  imageurl: String,
});

module.exports = mongoose.model('post', userSchema); // Register 'post' model with userSchema
