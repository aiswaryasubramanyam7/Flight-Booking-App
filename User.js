const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Basic user profile information
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // Ensures no two users can register with the same email
  },
  password: {
    type: String,
    required: true
  },
  // Differentiates between a regular User and an Admin
  isAdmin: {
    type: Boolean,
    default: false // Defaults to false so new registrations are standard users
  },
  // Automatically records when the account was created
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);