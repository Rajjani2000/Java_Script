import axios from 'axios';


const getHeader = () => {
  return { headers: { authorization: 'Bearer ' + localStorage.getItem("token") } }
}

export const createUser = async (userData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/users`,
      userData
    );

    if (response.status === 201) {
      // Assuming the backend sends back user details for both admin and classroom users
      return response.data;
    }

    return null;
  } catch (err) {
    console.log(err);
    return null;
  }
};


export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.message);
    return null;
  }
};



// posts functions
export const createPost = async (postData) => {
  try {
    const token = localStorage.getItem('token');

    // Check if the token is present
    if (!token) {
      console.error('User is not logged in. Please log in to create a post.');
      return null;
    }

    const decodedToken = JSON.parse(atob(token.split('.')[1]));

    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/posts`,
      {
        ...postData,
        createdBy: decodedToken.userId,
        classroom: decodedToken.classroomId, // Add this line to include classroom information
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 201) {
      console.log('New post created:', response.data);
      return response.data;
    }

    return null;
  } catch (err) {
    console.error('Error creating post:', err.message);
    return null;
  }
};

export const getPostsByClassroom = async () => {
  try {
    const token = localStorage.getItem('token');

    // Check if the token is present
    if (!token) {
      console.error('User is not logged in. Please log in to get posts.');
      return null;
    }

    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const role = decodedToken.role;

    // Determine the endpoint based on the user's role
    let endpoint;

    // Fetch posts for both admin and non-admin users based on the classroom ID
    endpoint = `/posts/classroom/${decodedToken.manageClassroom}`;

    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}${endpoint}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      const posts = response.data;

      // Map over the posts array to extract necessary information
      const mappedPosts = posts.map((post) => ({
        title: post.title,
        content: post.content,
        createdBy: post.createdBy.username,
        comments: post.comments.map((comment) => ({
          content: comment.content,
          user: comment.user.username,
        })),
        reports: post.reports.map((report) => ({
          reason: report.reason,
          user: report.user.username,
        })),
        commentCount: post.commentCount,
        reportCount: post.reportCount,
        _id: post._id,
      }));

      console.log('Posts retrieved:', mappedPosts);
      return mappedPosts;
    }

    return null;
  } catch (err) {
    console.error('Error getting posts:', err.message);
    return null;
  }
};


// frontend function for getting thr post by the classromis from the token
export const getPostsByUser = async () => {
  try {
    const token = localStorage.getItem('token');

    // Check if the token is present
    if (!token) {
      console.error('User is not logged in. Please log in to get posts.');
      return null;
    }

    const decodedToken = JSON.parse(atob(token.split('.')[1]));

    // Determine the role of the user and the classroom ID
    const { role, manageClassroom } = decodedToken;

    let endpoint;

    if (role === 'admin') {
      // Fetch posts for the logged-in admin based on the classroom ID
      endpoint = `/posts/classroom/${manageClassroom}`;
    } else {
      // Fetch all posts for non-admin users based on the classroom ID
      endpoint = `/posts/classroom/${manageClassroom}`;
    }

    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}${endpoint}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      const posts = response.data;

      // Check if the user is an admin and the posts array is empty
      if (role === 'admin' && posts.length === 0) {
        console.log('Admin user in student view. No posts to display.');
        // You can handle this case as per your application requirements
        // For example, display a message or handle the absence of posts in a specific way
      }

      // Map over the posts array to extract necessary information
      const mappedPosts = posts.map((post) => ({
        title: post.title,
        content: post.content,
        createdBy: post.createdBy.username, // Assuming 'createdBy' is now populated with the user document
        comments: post.comments.map((comment) => ({
          content: comment.content,
          user: comment.user.username, // Assuming 'comments.user' is now populated with the user document
        })),
        reports: post.reports.map((report) => ({
          reason: report.reason,
          user: report.user.username, // Assuming 'reports.user' is now populated with the user document
        })),
        commentCount: post.commentCount,
        reportCount: post.reportCount,
        _id: post._id,
      }));

      console.log('Posts retrieved:', mappedPosts);
      return mappedPosts;
    }

    return null;
  } catch (err) {
    console.error('Error getting posts:', err.message);
    return null;
  }
};




// Add a comment to a post
export const addCommentToPost = async (postId, commentData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/posts/${postId}/comments`,
      commentData,
      getHeader()
    );

    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (err) {
    console.error("Error adding comment to post:", err.message);
    return null;
  }
};

// Report a post
export const reportPost = async (postId, reportData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/posts/${postId}/reports`,
      reportData,
      getHeader()
    );

    if (response.status === 200) {
      return response.data;
    }
    return null;
  }
  catch (err) {
    console.error("Error reporting post:", err.message);
    return null;
  }
};


// Delete a post by ID
export const deletePost = async (postId) => {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('User is not logged in. Please log in to delete posts.');
      return null;
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      // Other headers if needed
    };

    const response = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/posts/${postId}/delete`,
      { headers }
    );

    console.log('Delete response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error deleting post:', error.message, error.response?.data);

    throw error;  // Re-throw the error to be caught and handled in the component
  }
};


// Get all posts
export const getPosts = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/posts`, getHeader());

    if (response.status === 200) {
      console.log("Posts retrieved:", response.data);
      return response.data;
    }
    return null;
  } catch (err) {
    console.error("Error getting posts:", err.message);
    return null;
  }
};

export const getReportedPostsByClassroom = async () => {
  try {
    const token = localStorage.getItem('token');

    // Check if the token is present
    if (!token) {
      console.error('User is not logged in. Please log in to get posts.');
      return null;
    }

    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const { role, manageClassroom } = decodedToken;

    let endpoint;

    if (role === 'admin') {
      // Fetch posts for the logged-in admin based on the classroom ID
      endpoint = `/posts/classroom/${manageClassroom}`;
    } else {
      // Fetch all posts for non-admin users based on the classroom ID
      endpoint = `/posts/classroom/${manageClassroom}`;
    }

    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}${endpoint}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      const reportedPosts = response.data;

      // Map over the reported posts array to extract necessary information
      const mappedReportedPosts = reportedPosts.map((post) => ({
        title: post.title,
        content: post.content,
        createdBy: post.createdBy.username,
        comments: post.comments.map((comment) => ({
          content: comment.content,
          user: comment.user.username,
        })),
        reports: post.reports.map((report) => ({
          reason: report.reason,
          user: report.user.username,
        })),
        commentCount: post.commentCount,
        reportCount: post.reportCount,
        _id: post._id,
      }));

      console.log('Reported Posts retrieved:', mappedReportedPosts);
      return mappedReportedPosts;
    }

    return null;
  } catch (err) {
    console.error('Error getting reported posts:', err.message);
    return null;
  }
};