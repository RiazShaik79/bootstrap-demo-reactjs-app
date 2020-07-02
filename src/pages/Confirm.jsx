import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export class Confrim extends Component {
  continue = (e) => {
    e.preventDefault();
    //process form i.e. send your data to api etc.
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, phone, occupation, city, bio },
    } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 topbarContent">
            <h1>This is User Registration Page</h1>
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
            <MuiThemeProvider>
              <div>
                <h4 className="textColorBlack">Confrim User Data</h4>
                <List>
                  <ListItem
                    primaryText="First Name"
                    secondaryText={firstName}
                  />
                  <ListItem primaryText="Last Name" secondaryText={lastName} />
                  <ListItem primaryText="Email" secondaryText={email} />
                  <ListItem primaryText="Phone" secondaryText={phone} />
                  <ListItem
                    primaryText="Occupation"
                    secondaryText={occupation}
                  />
                  <ListItem primaryText="City" secondaryText={city} />
                  <ListItem primaryText="Date of Birth" secondaryText={bio} />
                </List>
                <br />
                <RaisedButton
                  label="Confrim & Continue"
                  primary={true}
                  style={styles.button}
                  onClick={this.continue}
                />
                <RaisedButton
                  label="Back"
                  primary={false}
                  style={styles.button}
                  onClick={this.back}
                />
              </div>
            </MuiThemeProvider>
          </div>
          <div className="col-md-2 ">
            <div className="sidebarContent">Right Side Bar</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Confrim;

const styles = {
  button: {
    margin: 15,
  },
};
