const Post = require('../models/post');

// Create a new post
const createPost = async (req, res) => {
    try {
      const newPost = await Post.create(req.body);
      res.json(newPost);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  //    const { title, content, author } = req.body;
 // const post = new Post({ title, content, author });

 //students will just put student for post or handle this where its prepopulated when student is logged in
 //think about this logic more or just delete the author 
// Update a post when a new comment or report is added
const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { content, author, reason, reporter } = req.body;

    // Assuming you have logic to handle adding comments and reports to the post
    // Update the post model based on your requirements

    // Example: Add a comment
    const comment = { content, author };
    await Post.findByIdAndUpdate(postId, { $push: { comments: comment }, $inc: { commentCount: 1 } });

    // Example: Add a report
    const report = { reason, reporter };
    await Post.findByIdAndUpdate(postId, { $push: { reports: report }, $inc: { reportCount: 1 } });

    res.status(200).json({ message: 'Post updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a post by ID
const getPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId).populate('author').exec();
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a post by ID
const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    await Post.findByIdAndDelete(postId);
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createPost, updatePost, getPost, deletePost };

// double check just something for now