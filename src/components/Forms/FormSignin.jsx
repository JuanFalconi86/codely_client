import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import { withUser } from "../Auth/withUser";

import './../../styles/signin.css'

class FormSignin extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signin(this.state)
      .then((data) => {
        this.props.context.setUser(data);
        console.log("current user =>" ,data)
      })
      .catch((error) => {
        console.log(error);
        // Display error message here, if you set the state
      });
  };

  render() {
    if (this.props.context.user) {
      return <Redirect to="/" />;
    }

    return (
      <div className="signin-wrapper">
        <div className="form-wrapper-signin">
          <header className="title-signin">
            <h1>Log In</h1> <br />
          </header>
      <form onChange={this.handleChange} onSubmit={this.handleSubmit} className="form">
        <div className="credentials-signin">
          <div className="input-box-signin">
        <label htmlFor="email" className="label">Email</label>
        <input type="email" id="email" name="email" />
        </div >
        <div className="input-box-signin">
        <label htmlFor="password" className="label">Password</label>
        <input type="password" id="password" name="password" />
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

export default withRouter(withUser(FormSignin));
