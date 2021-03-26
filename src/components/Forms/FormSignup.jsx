import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { withUser } from "../Auth/withUser";
import apiHandler from "../../api/apiHandler";

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
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          onChange={this.handleChange}
          value={this.state.firstName}
          type="text"
          id="firstName"
          name="firstName"
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          onChange={this.handleChange}
          value={this.state.lastName}
          type="text"
          id="lastName"
          name="lastName"
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={this.handleChange}
          value={this.state.email}
          type="email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={this.handleChange}
          value={this.state.password}
          type="password"
          id="password"
          name="password"
        />
        <label htmlFor="companyName">Company Name</label>
        <input
          onChange={this.handleChange}
          value={this.state.companyName}
          type="text"
          id="companyName"
          name="companyName"
        />
        <label htmlFor="companyIndustry">Company Industry</label>
        <input
          onChange={this.handleChange}
          value={this.state.companyIndustry}
          type="text"
          id="companyIndustry"
          name="companyIndustry"
        />
        <label htmlFor="representativePhotoUrl">Photo of representative</label>
        <input
          onChange={this.handleChange}
          value={this.state.representativePhotoUrl}
          type="text"
          id="representativePhotoUrl"
          name="representativePhotoUrl"
        />
        <label htmlFor="representativePosition">Representative Position</label>
        <input
          onChange={this.handleChange}
          value={this.state.representativePosition}
          type="text"
          id="representativePosition"
          name="representativePosition"
        />
        <label htmlFor="companyLogo">Company Logo</label>
        <input
          onChange={this.handleChange}
          value={this.state.companyLogoUrl}
          type="text"
          id="companyLogoUrl"
          name="companyLogoUrl"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default withRouter(withUser(FormSignup));
