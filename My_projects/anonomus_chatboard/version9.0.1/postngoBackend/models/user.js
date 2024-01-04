const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  adminusername: {
    type: String,
    required: [false, "adminusername is required"],
    trim: true,
    text: true,
  },
  adminpassword: {
    type: String,
    required: [false, "adminpassword is required"],
    trim: true,
    text: true,
  },
  classroomname: {
    type: String,
    required: [false, "classroomname is required"],
    trim: true,
    text: true,
  },
  classroompassword: {
    type: String,
    required: [false, "classroompassword is required"],
    trim: true,
    text: true,
  },
});
userSchema.pre("save", async function (next) {
  if (this.isModified("adminpassword")) {
    this.adminpassword = await bcrypt.hash(this.adminpassword, 12);
    this.classroompassword = await bcrypt.hash(this.classroompassword, 12);
  }
  next();
});

userSchema.statics.findUser = async function (query) {
  return this.find(query);
};

const User = mongoose.model('User', userSchema);

module.exports = User; // Export the User model directly
