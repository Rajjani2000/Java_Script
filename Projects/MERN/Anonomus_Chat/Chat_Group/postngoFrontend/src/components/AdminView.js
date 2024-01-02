import React from 'react';
import './StudentView.css'
import { getReportedPostsByClassroom } from '../services/http';
import PostItemAdmin from "./PostitemAdmin"
import PostButton from "./PostButton"
import BackgroundImg from "../assets/img/bg.png"
import LogoutImg from "../assets/img/exit-man.png"
import { Navigate } from 'react-router-dom';

export default class AdminView extends React.Component {
    constructor(props) {
        super();
        this.state = {
            posts: []
        };
    }

    async componentDidMount() {
        await this.fetchPosts();

    //     this.refreshInterval = setInterval(() => {
    //         this.fetchPosts();
    //     }, 10000);
    // }

    // componentWillUnmount() {
    //     clearInterval(this.refreshInterval);
    }

    async fetchPosts() {
        const token = localStorage.getItem('token');
        if (!token) {
          this.setState({ redirect: true });
        }
      
        try {
          const posts = await getReportedPostsByClassroom(); // Assuming getPostsByUser handles fetching posts for the logged-in user
          console.log('posts: ', posts);
      
          setTimeout(() => {
            this.setState({ posts: posts });
          }, 100);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      }

    handleLogout = () => {
        console.log("Logging out...");

        const token = localStorage.getItem("token");
        console.log("Token before logout:", token);

        localStorage.removeItem("token");

        const updatedToken = localStorage.getItem("token");
        console.log("Token after logout:", updatedToken);


        this.setState({ redirect: true });
    };

    render() {
        if (this.state.redirect)
            return <Navigate to="/" />;
        else
            return (

                <div className="main-page-container">
                    <img className="background" alt="background" src={BackgroundImg}></img>
                    <div className="logo-container">
                        <label className="logo-postngo">{"PostNGo"}</label>
                        <label className="logo-slogan">{"A stress-free place for students to ask questions."}</label>
                    </div>
                    <button className="logout-btn" onClick={this.handleLogout}>
                        <img className="logout-icon" src={LogoutImg} alt="logout"></img>
                        Logout
                    </button>
                    <ol className="post-list">
                        <PostButton className="post-button" />
                        {this.state.posts.map((post, index) => (
                            <PostItemAdmin className="post-item"
                                key={index}
                                comments={post.comments}
                                reports={post.reports}
                                postId={post._id}
                                title={post.title}
                                content={post.content}
                                author={post.author}
                                likes={post.likes}
                            />
                        ))}
                        

                    </ol>
                </div>

            )
    }
}