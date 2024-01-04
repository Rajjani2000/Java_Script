import React, { Component } from "react";
import { Navigate } from "react-router-dom";
// import axios from "axios";
import './Adminlogin.css'; // Uncomment this line if you have a CSS file

// Replace this with your actual getUser function import
const { getUser } = require("../functions/http");

class Adminlogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adminusername: "",
      adminpassword: "",
      flag: false,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { adminusername, adminpassword } = this.state;

    // Assuming getUser returns a boolean indicating success
    const isLoggedIn = await getUser(adminusername, adminpassword);

    if (isLoggedIn) {
      // Reset the form and hide it after successful login
      this.setState({ adminusername: "", adminpassword: "", flag: true });
      console.log("Login successful!");
    } else {
      console.log("Login failed. Incorrect username or password.");
    }
  };

  render() {
    const { adminusername, adminpassword } = this.state;

    return (
      <>
        {this.state.flag && <Navigate to="/Posts" replace={true} />}

        <div className="login-page-container">
          {/* <img className="background" src="assets/img/bg.png"></img> */}
          <div className="login-container">
            <h1 style={{ fontSize: 30 }} className="login-container-title">
              Admin Login
            </h1>

            <div>
              <form className="login-form-container">
                <label className="login-form-item login-form-label">
                  {" "}
                  Admin Username:{" "}
                </label>
                <input
                  className="login-form-item login-form-input"
                  type="text"
                  name="adminusername"
                  value={adminusername}
                  onChange={this.handleInputChange}
                />
                <label className="login-form-item login-form-label">
                  {" "}
                  Admin Password:
                </label>
                <input
                  className="login-form-item login-form-input"
                  type="password"
                  name="adminpassword"
                  value={adminpassword}
                  onChange={this.handleInputChange}
                />
                <button className="btn btn-danger" onClick={this.handleSubmit}>
                  Submit
                </button>
               <div>
                
               </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Adminlogin;
