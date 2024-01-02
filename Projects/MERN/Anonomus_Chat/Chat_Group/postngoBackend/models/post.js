const mongoose = require('mongoose');
const User = require('./user');
const Classroom = require('./classroom');

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  classroom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Classroom',
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  comments: [
    {
      content: String,
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
  ],
  reports: [
    {
      reason: String,
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
  ],
  commentCount: { type: Number, default: 0 },
  reportCount: { type: Number, default: 0 },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;