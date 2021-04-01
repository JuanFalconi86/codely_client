import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { withUser } from "../Auth/withUser";
import apiHandler from "../../api/apiHandler";

import './../../styles/signup.css'

class FormSignup extends Component {
  state = {
    companyName: "",
    companyIndustry: "",
    representativePhotoUrl: "",
    firstName: "",
    lastName: "",
    representativePosition: "",
    email: "",
    password: "",
    companyLogoUrl: ""
    
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signup(this.state)
      .then((data) => {
        this.props.context.setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.props.context.user) {
      return <Redirect to="/" />;
    }

    return (
      <div className="signup-wrapper">
      <div className="form-wrapper-signup">
      <header className="title-signup">
          <h1>Welcome</h1> <br />
        </header>
      <form onSubmit={this.handleSubmit} className="form">
        <div className="credentials-signup">
          <div className="input-box-signup">
        <label htmlFor="firstName">Name</label>
        <input
          onChange={this.handleChange}
          value={this.state.firstName}
          type="text"
          id="firstName"
          name="firstName"
        />
        </div>
        <div className="input-box-signup">
        <label htmlFor="lastName">Last Name</label>
        <input
          onChange={this.handleChange}
          value={this.state.lastName}
          type="text"
          id="lastName"
          name="lastName"
        />
        </div>
        <div className="input-box-signup">
        <label htmlFor="email">Email</label>
        <input
          onChange={this.handleChange}
          value={this.state.email}
          type="email"
          id="email"
          name="email"
        />
        </div>
        <div className="input-box-signup">
        <label htmlFor="password">Password</label>
        <input
          onChange={this.handleChange}
          value={this.state.password}
          type="password"
          id="password"
          name="password"
        />
        </div>
        <div className="input-box-signup">
        <label htmlFor="companyName">Company Name</label>
        <input
          onChange={this.handleChange}
          value={this.state.companyName}
          type="text"
          id="companyName"
          name="companyName"
        />
        </div>
        <div className="input-box-signup">
        <label htmlFor="companyIndustry">Company Industry</label>
        <input
          onChange={this.handleChange}
          value={this.state.companyIndustry}
          type="text"
          id="companyIndustry"
          name="companyIndustry"
        />
        </div>
        <div className="input-box-signup">
        <label htmlFor="representativePhotoUrl">Photo of representative</label>
        <input
          onChange={this.handleChange}
          value={this.state.representativePhotoUrl}
          type="file"
          id="representativePhotoUrl"
          name="representativePhotoUrl"
        />
        </div>
        <div className="input-box-signup">
        <label htmlFor="representativePosition">Representative Position</label>
        <input
          onChange={this.handleChange}
          value={this.state.representativePosition}
          type="text"
          id="representativePosition"
          name="representativePosition"
        />
        </div>
        <div className="input-box-signup">
        <label htmlFor="companyLogo">Company Logo</label>
        <input
          onChange={this.handleChange}
          value={this.state.companyLogoUrl}
          type="text"
          id="companyLogoUrl"
          name="companyLogoUrl"
        />
        </div>
        </div>
        <div className="createAccount">
        <button>Submit</button>
        </div>
      </form>
      </div>
      </div>
    );
  }
}

export default withRouter(withUser(FormSignup));
