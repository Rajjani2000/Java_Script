const Post = require("../models/post");
const User = require('../models/user');
const Classroom = require('../models/classroom');

// Backend controller function for creating a post
exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const createdBy = req.userId; // Assuming you have middleware that sets userId in req

    // Fetch the user to get the classroom information
    const user = await User.findById(createdBy).populate('manageClassroom');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    console.log('Creating post:', { title, content, createdBy });

    const newPost = await Post.create({
      title,
      content,
      classroom: user.manageClassroom,
      createdBy,
    });

    // Update the user's posts array and manageClassroom.posts array
    await User.findOneAndUpdate(
      { _id: createdBy },
      {
        $push: {
          posts: newPost._id,
        },
      }
    );

    // Update the classroom's posts array
    await Classroom.findOneAndUpdate(
      { _id: user.manageClassroom._id },
      {
        $push: {
          posts: newPost._id,
        },
      }
    );

    console.log('New post created:', newPost);

    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};



// controler function for getting a post by the classroom the classroom id is manageClassroom 
exports.getPostsByClassroom = async (req, res) => {
  try {
    const { manageClassroom } = req.params;

    // Retrieve the classroom by its ID
    const classroom = await Classroom.findById(manageClassroom);

    if (!classroom) {
      return res.status(404).json({ error: 'Classroom not found' });
    }

    // Retrieve posts for the specified classroom
    const classroomPosts = await Post.find({ classroom: classroom._id })
      .populate({
        path: 'createdBy', // Populate the createdBy field with the User document
        select: 'username', // Select only the 'username' field from the User document
      })
      .populate({
        path: 'comments.user', // Populate the user field in comments with the User document
        select: 'username', // Select only the 'username' field from the User document
      })
      .populate('reports.user', 'username'); // Populate the user field in reports with the User document

    console.log('Posts retrieved for classroom:', { manageClassroom, classroomPosts });

    res.status(200).json(classroomPosts);
  } catch (error) {
    console.error('Error retrieving classroom posts:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};




//does not really need anymore this was the first one but the best one was to go wirth the classroom one 
exports.getPostsByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).populate('manageClassroom');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Ensure that user.manageClassroom is defined before accessing _id
    if (!user.manageClassroom || !user.manageClassroom._id) {
      return res.status(404).json({ error: 'Classroom not found for the user' });
    }

    const classroomPosts = await Post.find({ 'classroom': user.manageClassroom._id })
      .populate({
        path: 'createdBy',
        select: 'username',
      })
      .populate({
        path: 'comments.user',
        select: 'username',
      })
      .populate('reports.user', 'username');

    console.log('Posts retrieved for user:', { userId, classroomPosts });

    res.status(200).json(classroomPosts);
  } catch (error) {
    console.error('Error retrieving posts:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// This is the controller for adding a comment to a post by finding it by ID and adding a comment to it and updating the comment counter 
exports.addCommentToPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { comment } = req.body;
// Validate request data before proceeding
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
// add the comment to the post and update the comment counter
    console.log('comment: ', comment);
    const newComment = { content: comment, user: post.createdBy }
    console.log('post: ', post);
    post.comments.push(newComment);
    post.commentCount += 1;

    await post.save();
// respond with the new comment data
    res.json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};





// This is the controller for reporting a post by finding it by ID and adding a report to it and updating the report counter to it 
exports.reportPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { reason } = req.body;

    // Validate request data before proceeding 
    if (!reason) {
      return res.status(400).json({ message: "Reason for report is required" });
    }
// find the post by id
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
// add the report to the post and update the report counter
    const newReport = { reason, post: post, user: post.createdBy };
    post.reports.push(newReport);
    post.reportCount += 1;

    await post.save();

    // Respond with the new report data
    res.status(201).json(newReport);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};






// This is the controller for deleting a post by finding it by ID and removing it from the database
exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.id;

    // Find the post by ID
    const post = await Post.findById(postId);

    // Check if the post exists
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Delete the post
    await post.remove();

    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//this was sort of the first variation
// This is the controller for getting all posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};