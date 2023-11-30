const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comments: [
      {
        content: String,
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      }
    ],
    reports: [
      {
        reason: String,
        reporter: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      }
    ],
    commentCount: { type: Number, default: 0 },
    reportCount: { type: Number, default: 0 },
  });
  
  const Post = mongoose.model('Post', postSchema);
  //testing the gitignore file