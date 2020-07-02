import React, { Component } from "react";

class Counter extends Component {
  componentWillMount() {
    console.log("user state " + this.props.userLoggedIn);
  }
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>
          {this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="badge btn-secondary btn-sm m-2"
          disabled={!this.props.userLoggedIn}
        >
          <span className="glyphicon glyphicon-minus"></span>
        </button>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="badge btn-secondary btn-sm m-2"
          disabled={!this.props.userLoggedIn}
        >
          <span className="glyphicon glyphicon-plus"></span>
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-1 badge-primary";
    //  classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
