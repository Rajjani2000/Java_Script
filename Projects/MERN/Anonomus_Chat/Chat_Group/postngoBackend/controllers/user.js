//import statments 
const Post = require("../models/post");
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const Classroom = require('../models/classroom');

// Backend controller function for creating a post
exports.createUser = async (req, res) => {
  try {
    const { adminusername, adminpassword, classroomname, classroompassword } =
      req.body;

    // Check for the existence of admin and classroom usernames
    const adminExist = await User.findOne({ username: adminusername });
    const classroomExist = await User.findOne({ username: classroomname });

    // Check for the existence of the classroom itself
    let classroom = await Classroom.findOne({ classname: classroomname });

    // If the classroom does not exist, create a new one
    if (!classroom) {
      classroom = await Classroom.create({ classname: classroomname });
    }

    // Check if either the admin or classroom user already exists
    if (adminExist || classroomExist) {
      return res
        .status(400)
        .json({ message: "User with the provided username already exists" });
    }

    // Create admin user
    const newAdminUser = await User.create({
      username: adminusername,
      password: adminpassword,
      role: "admin",
      manageClassroom: classroom._id, // Associate admin with the classroom
    });

    // Create classroom user
    const newClassroomUser = await User.create({
      username: classroomname,
      password: classroompassword,
      role: "classroom",
      manageClassroom: classroom._id, // Associate classroom user with the classroom
    });

    // If all creations are successful, respond with admin user details
    const { _id, username, role } = newAdminUser.toObject();
    res.status(201).json({ _id, username, role });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Backend controller function for creating a post
exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
  
    console.log('Received request with username:', username);
    console.log('Received request with password:', password);

    const user = await User.findOne({ username }).populate('manageClassroom');

    console.log('Found user:', user);
// using the hashing library to compare the hashed passwords in the backend
    if (!user || !password || !user.password || !(await bcrypt.compare(password, user.password))) {
      console.log('Login failed due to invalid credentials');
      return res.status(403).json({ message: 'Invalid Credentials' });
    }
//here is the starting to point to what the token payload will contain
    const tokenPayload = {
      userId: user._id,
      role: user.role,
      manageClassroom: user.manageClassroom._id, // Add manageClassroom to the payload
    };
// setting the token to be signed with the token payload and the secret key i know u should hide it and put it into production code ran out of time
    const token = jwt.sign(tokenPayload, 'your_secret_key');

    console.log('Login successful. Sending token:', token);
// sending the token and the user information to the frontend
    res.status(200).json({
      message: 'Logged In Successfully',
      token,
      user: {
        _id: user._id,
        username: user.username,
        role: user.role,
      }, // Include user information in the response
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};