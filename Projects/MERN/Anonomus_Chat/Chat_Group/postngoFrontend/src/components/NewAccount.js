import React from "react";
import { Navigate } from "react-router-dom";
import { createUser } from "../services/http";
import Background from "../assets/img/bg.png";
import './Studentlogin.css';

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
      empty: false,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("Submit clicked");

      const requiredFields = [
        "adminusername",
        "adminpassword",
        "classroomname",
        "classroompassword",
      ];

      const isEmpty = requiredFields.some(
        (field) => !this.state[field].trim()
      );

      if (!isEmpty) {
        console.log("All fields entered");

        // Call createUser function for account creation
        await createUser({
          adminusername: this.state.adminusername,
          adminpassword: this.state.adminpassword,
          classroomname: this.state.classroomname,
          classroompassword: this.state.classroompassword,
        });

        console.log("Account created successfully");

        this.setState({
          showForm: false,
          adminusername: "",
          adminpassword: "",
          classroomname: "",
          classroompassword: "",
          flag: true,
          empty: false,
        });
      } else {
        this.setState({ empty: true });
        console.log("Please enter all fields");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error.message);
    }
  };

  render() {
    const { empty } = this.state;

    return (
      <>
        {this.state.flag && <Navigate to="/" replace={true} />}

        <div className="login-page-container">
          <img className="background" src={Background} alt="Background"/>
          <div className="logo-container">
              <label className="logo-postngo">{"PostNGo"}</label>
              <label className="logo-slogan">{"A stress-free place for students to ask questions."}</label>
          </div>
          <div className="login-container" style={{width: "440px", height: "440px"}}>
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
                  <button className="login-form-btn" style={{marginLeft: "-52px"}} type="submit">
                    Create
                  </button>
                  {empty && (
                    <p style={{ color: "red" }}>
                      Please Enter all fields..
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CreateAccount;
