import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";
import {Link}from "react-router-dom";
import logo from "./../pages/images/codely-vector.png"

import "../styles/NavMain.css";
const NavMain = (props) => {
  const { context } = props;
  console.log("context is", context);

  function handleLogout() {
    apiHandler
      .logout()
      .then(() => {
        context.removeUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  


  return (
    <nav className="NavMain">
      <NavLink exact to="/">
        <img src={logo} className="logo" alt="logo"/>
      </NavLink>
      <ul className="nav-list">
        {context.isLoggedIn && (
          <React.Fragment>
            <li>
              <NavLink to="/profile">
                {context.user && context.user.email}
              </NavLink>
            </li>
            <li>
              <Link to="/main"><p onClick={handleLogout}>Logout</p></Link>
              <Link to={`/company/${context.user._id}`}><p>Profile</p></Link>
            </li>
          </React.Fragment>
        )}
        {!context.isLoggedIn && (
          <React.Fragment>
            <li className="auth">
              <NavLink to="/signin">Sign In</NavLink>
            </li>
            <li className="auth">
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default withUser(NavMain);
