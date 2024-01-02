import React from 'react';
import { deletePost } from '../services/http';

class DeleteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
  }

  handleDelete = async () => {
    try {
      // Call the deletePost function and pass the necessary parameters (postId, comments, etc.)
      const deleteResponse = await deletePost({
        postId: this.props.postId,
        // Add other parameters as needed
      });

      // Check the response to ensure successful deletion
      if (deleteResponse && deleteResponse.message === 'Post deleted successfully') {
        // If deletion is successful, hide the delete confirmation form
        this.setState({ showForm: false });
      } else {
        // Handle any error or display a message if deletion fails
        console.error('Error deleting post:', deleteResponse.message);
      }
    } catch (error) {
      // Handle any unexpected errors during the deletion process
      console.error('Error deleting post:', error.message);
    }
  };

  render() {
    return (
      <div className="button-container card-body">
        <button className="btn btn-dark" onClick={() => this.setState({ showForm: !this.state.showForm })}>
          Delete Post
        </button>
        {this.state.showForm && (
          <form onSubmit={(e) => e.preventDefault()}>
            <p>Post ID: {this.props.postId}</p>
            <p>Are you sure you want to delete this post?</p>
            <button className="btn btn-danger" onClick={this.handleDelete}>
              Confirm Delete
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default DeleteButton;
