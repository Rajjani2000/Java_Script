import React from "react";
import { Navigate } from "react-router-dom";
import { createUser } from "../functions/http";

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: true,
      adminusername: "",
      adminpassword: "",
      classroomname: "",
      classroompassword: "",
      flag: false,
      errorMessage: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (
        this.state.adminusername &&
        this.state.adminpassword &&
        this.state.classroomname &&
        this.state.classroompassword
      ) {
        await createUser({
          adminusername: this.state.adminusername,
          adminpassword: this.state.adminpassword,
          classroomname: this.state.classroomname,
          classroompassword: this.state.classroompassword,
        });

        this.setState({
          showForm: true,
          adminusername: "",
          adminpassword: "",
          classroomname: "",
          classroompassword: "",
          flag: true,
          errorMessage: "",
        });
      } else {
        this.setState({
          errorMessage: "Please enter all fields.",
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 500) {
        console.error("There was an error!");
      } else {
        console.error("An unexpected error occurred:", error.message);
      }
    }
  };

  render() {
    return (
      <>
        {this.state.flag && <Navigate to="/Adminlogin" replace={true} />}

        <div className="login-page-container">
          <img
            className="background"
            src="assets/img/bg.png"
            alt="Background"
          />
          <div className="login-container">
            <h1 style={{ fontSize: 30 }} className="login-container-title">
              New Admin Account
            </h1>
            <div>
              {this.state.showForm && (
                <form
                  className="login-form-container"
                  onSubmit={this.handleSubmit}
                >
                  <label style={{ fontSize: 14 }} className="login-form-label">
                    Admin Username:
                    <input
                      style={{ height: 23 }}
                      className="login-form-input"
                      type="text"
                      name="adminusername"
                      value={this.state.adminusername}
                      onChange={this.handleInputChange}
                    />
                  </label>
                  <label
                    style={{ fontSize: 14 }}
                    className="login-form-item login-form-label"
                  >
                    Admin Password:
                    <input
                      style={{ height: 23 }}
                      className="login-form-input"
                      type="password"
                      name="adminpassword"
                      value={this.state.adminpassword}
                      onChange={this.handleInputChange}
                    />
                  </label>
                  <label
                    style={{ fontSize: 14 }}
                    className="login-form-item login-form-label"
                  >
                    Classroom Name:
                    <input
                      style={{ height: 23 }}
                      className="login-form-input"
                      type="text"
                      name="classroomname"
                      value={this.state.classroomname}
                      onChange={this.handleInputChange}
                    />
                  </label>
                  <label
                    style={{ fontSize: 14 }}
                    className="login-form-item login-form-label"
                  >
                    Classroom Password:
                    <input
                      style={{ height: 23 }}
                      className="login-form-input"
                      type="password"
                      name="classroompassword"
                      value={this.state.classroompassword}
                      onChange={this.handleInputChange}
                    />
                  </label>
                  <button className="btn btn-primary" type="submit">
                    Create Account
                  </button>
                </form>
              )}
              {/* Error message */}
              {this.state.errorMessage && (
                <div className="error-message" style={{ color: "red" }}>
                  <h1>{this.state.errorMessage}</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CreateAccount;