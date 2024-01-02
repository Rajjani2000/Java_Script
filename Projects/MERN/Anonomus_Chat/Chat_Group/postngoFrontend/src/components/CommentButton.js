import React from 'react';
import { addCommentToPost } from '../services/http';
import "./CommentButton.css"
		
class CommentButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: props.comments,
			showForm: false,
			postId: props.postId,
			comment: ""
		};
	}


	componentDidMount() {
		this.setState({
			comments: this.props.comments,
			showForm: false,
			postId: this.props.postId,
			comment: ""
		});
	}

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({ ...this.state, [name]: value });
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		const { postId, comment, comments } = this.state;

		if (await addCommentToPost(postId, { comment })) {
			// Assuming addCommentToPost returns the new comment object
			// Update comments array with new comment
			this.setState({ 
				comments: [...comments, { content: this.state.comment, user: "user" }], // Replace "currentUser" with actual user identifier
				showForm: false, 
				comment: "" 
			});
		}
	}

	render() {
		return (
			<div className="comment-container">
				{
					this.state.comments.map((elm, index) => { return (
						<div className="comment-item">
							<span>{elm.content}</span>
							<span style={{color: "lightgray"}}>{ ' - ' + elm.user}</span>
						</div>
					)})
				}
				<form onSubmit={this.handleSubmit} className="comment-form">
					<input
						type="text"
						name="comment"
						placeholder="comment here..."
						className='form-control-comment'
						value={this.state.comment}
						onChange={this.handleInputChange}
					/>
					<button type="submit" className="submit-btn">
						Submit
					</button>
				</form>
				
			</div>

		);
	}
}

export default CommentButton;


// how to pass in the comment button in all other codes if needed 

//<CommentButton postId={post.postId} />