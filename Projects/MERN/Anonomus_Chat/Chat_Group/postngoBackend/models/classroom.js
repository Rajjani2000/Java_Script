// classroom.js
const mongoose = require('mongoose');

const classroomSchema = new mongoose.Schema({
  classname: {
    type: String,
    required: [true, 'Classname is required'],
    trim: true,
    text: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
});

const Classroom = mongoose.model('Classroom', classroomSchema);

module.exports = Classroom;