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
        this.props.handleLoggedIn(response.data);
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-mail Address
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
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
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
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
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign In</button>
            <Link to="/" className="FormField__Link">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
