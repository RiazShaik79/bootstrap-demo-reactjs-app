import React from "react";
import {
  Container,
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

class DropdownButtonExample extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);
    this.state = {
      dropdownOpen: false,
      value: "Title",
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText,
    });
  }

  render() {
    return (
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          data-toggle="dropdown"
        >
          {this.state.value} <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
          <li>
            {" "}
            <a class="dropdown-item" onClick={this.select}>
              Mr
            </a>
          </li>
          <li>
            {" "}
            <a class="dropdown-item" href="#" onClick={this.select}>
              Mrs
            </a>
          </li>
          <li>
            {" "}
            <a class="dropdown-item" href="#" onClick={this.select}>
              Miss
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default DropdownButtonExample;
