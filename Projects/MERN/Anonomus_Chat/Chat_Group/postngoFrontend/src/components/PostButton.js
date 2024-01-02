import React from 'react';
import './PostButton.css';
import PaperPlaneIcon from "../assets/img/paper-plane.svg";
import { createPost } from '../services/http';

class PostButton extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		title: '',
		content: '',
		showForm: false,
		error: '' // Added error state
	  };
	}

	handleInputChange = (e) => {
		const { name, value } = e.target;
		this.setState(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const { title, content } = this.state;

		// Validate the form fields
		if (!title || !content) {
			this.setState({ error: 'Please fill out all fields.' });
			return;
		}

		try {
			// Check if the user is logged in (token available)
			const token = localStorage.getItem('token');

			if (!token) {
				this.setState({ error: 'User is not logged in. Please log in to create a post.' });
				return;
			}

			// Decode the token to get user information
			const decodedToken = JSON.parse(atob(token.split('.')[1]));

			const createdPost = await createPost({
				title,
				content,
				createdBy: decodedToken.userId,
			});

			if (createdPost) {
				// Reset form state and clear any errors
				this.setState({
					title: '',
					content: '',
					showForm: false,
					error: ''
				});
				console.log('Post created successfully:', createdPost);
				window.location.reload();
			}
		} catch (error) {
			console.error('Button error:', error.message);
			this.setState({ error: 'Failed to create post. Please try again.' });
		}
	}

  	render() {
    	const { showForm, title, content, error } = this.state;

		return (
			<div className="button-container card-body">
				{ !showForm &&
					<button className="post-btn" onClick={() => this.setState({ showForm: !showForm })}>
					+
					</button>
				}
				{ showForm && (
				<form onSubmit={this.handleSubmit} className="post-form">
					<button className="close-button" onClick={() => this.setState({showForm: false})}>×</button>
					<input
						type="text"
						name="title"
						placeholder = "New Post Title"
						className='form-control title-textarea'
						value={title}
						onChange={this.handleInputChange}
					/>
					<input
						type="text"
						name="content"
						className='form-control content-textarea'
						placeholder="Start your epic post here"
						value={content}
						onChange={this.handleInputChange}
					/>
					<button type="submit" className="submit-btn">
						<img className="submit-icon" src={PaperPlaneIcon} alt="Send Post"></img>
					</button>
				</form>
				)}
				{error && <p style={{ color: 'red' }}>{error}</p>}
			</div>
		);
	}
}
export default PostButton;
