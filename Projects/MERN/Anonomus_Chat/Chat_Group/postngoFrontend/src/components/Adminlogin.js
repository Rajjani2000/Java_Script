import React, { Component } from "react";
import { Navigate } from "react-router-dom";
//import './Studentlogin.css';
import { loginUser } from "../services/http";


// adminlogin using the class based component
//using the following props
class Adminlogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adminusername: "",
      adminpassword: "",
      flag: false,
      loginError: false,
      empty: false,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { adminusername, adminpassword } = this.state;
  
    // Call loginUser function for login
    const loginResponse = await loginUser({ username: adminusername, password: adminpassword });
  
    if (loginResponse && loginResponse.token) {
      console.log("Received token:", loginResponse.token);
  
      // Check if the user has the "admin" role
      if (loginResponse.user && loginResponse.user.role === "admin") {
        // Store the token in localStorage
        localStorage.setItem('token', loginResponse.token);
  
        // Delay to ensure the token is stored before retrieval
        setTimeout(() => {
          // Reset the form and hide it after successful login
          this.setState({
            adminusername: "",
            adminpassword: "",
            flag: true,
            loginError: false,
            empty: false,
          });
  
          console.log("Admin login successful!");
        }, 100); // You can adjust the delay time as needed
      } else {
        this.setState({ loginError: true, empty: false });
        console.log("Admin login failed. User does not have admin role.");
      }
    } else if (!adminusername || !adminpassword) {
      this.setState({ empty: true, loginError: false });
      console.log("Please enter all fields");
    } else {
      this.setState({ loginError: true, empty: false });
      console.log("Admin login failed. Incorrect username or password.");
    }
  };
  
  render() {
    const { adminusername, adminpassword, loginError, empty } = this.state;

    return (
      <>
        {this.state.flag && <Navigate to="./AdminView" replace={true} />}
        <div className="login-page-container">
          <div className="additional-links">
            <a href="./">
              <button className="btn btn-dark" type="submit">
              Student Login
              </button>
            </a>
            <a href="./NewAccount">
              <button className="btn btn-dark" type="submit">
                New Account
              </button>
            </a>
          </div>
          <div className="login-container"> 
            <h1 style={{ fontSize: 30 }} className="login-container-title">
              Admin Login
            </h1>
            <div>
              <form
                className="login-form-container"
                onSubmit={this.handleSubmit}
              >
                <label className="login-form-item login-form-label">
                Admin Username:
                </label>
                <input
                  className="login-form-item login-form-input"
                  type="text"
                  name="adminusername"
                  value={adminusername}
                  onChange={this.handleInputChange}
                />
                <label className="login-form-item login-form-label">
                   Admin Password:
                </label>
                <input
                  className="login-form-item login-form-input"
                  type="password"
                  name="adminpassword"
                  value={adminpassword}
                  onChange={this.handleInputChange}
                />
                <button className="btn btn-dark" type="submit">
                  Submit
                </button>
                {loginError && (
                  <p style={{ color: "red" }}>
                    Incorrect username or password. Please try again.
                  </p>
                )}
                {empty && (
                  <p style={{ color: "red" }}>
                    Please Enter admin Username/Password
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Adminlogin;

