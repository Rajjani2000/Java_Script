import React, { Component } from "react";
import { Navigate } from "react-router-dom";
// import './Adminlogin.css'; // Uncomment this line if you have a CSS file

// Replace this with your actual getUser function import
const { getUser } = require("../functions/http");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classroomname: "",
      classroompassword: "",
      flag: false,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { classroomname, classroompassword } = this.state;

    // Assuming getUser returns a boolean indicating success
    const isLoggedIn = await getUser(classroomname, classroompassword);

    if (isLoggedIn) {
      // Reset the form and hide it after successful login
      this.setState({ classroomname: "", classroompassword: "", flag: true });
      console.log("Login successful!");
    } else {
      console.log("Login failed. Incorrect username or password.");
    }
  };

  render() {
    const { classroomname, classroompassword } = this.state;

    return (
      <>
        {this.state.flag && <Navigate to="/NewPost" replace={true} />}
        <div className="login-page-container">
          {/* Add the links at the top */}
          <div className="additional-links">
            <a href="./Adminlogin">
              <button className="admin-login-btn" type="submit">
                Admin Login
              </button>
            </a>
            <a href="./NewAccount">
              <button className="accback-btn" type="submit">
                New Account
              </button>
            </a>
          </div>
          <div className="login-container">
            <h1 style={{ fontSize: 30 }} className="login-container-title">
              {" "}
              Classroom Login{" "}
            </h1>

            <div>
              <form className="login-form-container">
                <label className="login-form-item login-form-label">
                  {" "}
                  Classroom Username:{" "}
                </label>
                <input
                  className="login-form-item login-form-input"
                  type="text"
                  name="classroomname"
                  value={classroomname}
                  onChange={this.handleInputChange}
                />
                <label className="login-form-item login-form-label">
                  {" "}
                  Classroom Password:
                </label>
                <input
                  className="login-form-item login-form-input"
                  type="password"
                  name="classroompassword"
                  value={classroompassword}
                  onChange={this.handleInputChange}
                />
                <button className="btn btn-danger" onClick={this.handleSubmit}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
