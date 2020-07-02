import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

class SignInForm extends Component {
  state = {
    email: "",
    password: "",
  };

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Im from singinform1");
    console.log(this.state);
    axios
      .post("http://localhost:8080/login", this.state)
      .then((response) => {
        console.log("Response : " + response.data);
        this.props.handleLoggedIn(this.state.email,response.data);
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
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
        <br />
        <div className="row">
          <div className="col-md-2 ">
            <div className="sidebarContent">Left Side Bar</div>
          </div>
          <div className="col-md-8 ">
            <br />
            <form onSubmit={this.handleSubmit}>
              <div className="form-group textColorBlack">
                <label htmlFor="email">
                  <b>E-mail Address</b>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  /* onChange={(e) => {
                let { loginDetails } = this.state;
                loginDetails.email = e.target.value;
                this.setState({ loginDetails });
              }} */
                />
                <br />
                <label htmlFor="password">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter your password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  /* onChange={(e) => {
                let { loginDetails } = this.state;
                loginDetails.password = e.target.value;
                this.setState({ loginDetails });
              }} */
                />
                <br />
                <button className="btn btn-secondary form-control">
                  Sign In
                </button>
                <br />
                <br />
                <a href="/sign-up"> Register </a> /
                <a href="/sign-up"> Forgot Password </a>
              </div>
            </form>
          </div>

          <div className="col-md-2 ">
            <div className="sidebarContent">Right Side Bar</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInForm;
