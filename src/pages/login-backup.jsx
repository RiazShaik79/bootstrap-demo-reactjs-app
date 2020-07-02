//import React from "react";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter,
} from "react-router-dom";
import "../App.css";
import SignUpForm from "./signUpForm";
import SignInForm from "./signInForm-backup";

class Login extends Component {
  render() {
    const { handleLoggedIn } = this.props;
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 topbarContent">
              <h1>This is Register/Sign-in Page</h1>
            </div>
          </div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
              Navbar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item ">
                  <a class="nav-link" href="/">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
          <div className="col-md-12 offset-3 App__Form">
            <div className="PageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/sign-up"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item "
              >
                Sign Up
              </NavLink>
            </div>
            <div className="FormTitle">
              <NavLink
                to="/sign-in"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign In
              </NavLink>
              or
              <NavLink
                to="/sign-up"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign Up
              </NavLink>
            </div>
            <Route path="/sign-up" component={SignUpForm}></Route>
            <Route
              path="/sign-in"
              render={(props) => (
                <SignInForm {...props} handleLoggedIn={handleLoggedIn} />
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default Login;
