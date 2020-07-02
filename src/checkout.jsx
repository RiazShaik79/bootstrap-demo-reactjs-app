import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import MyPaypalExpressBtn from "./MyPaypalExpressBtn";

class Checkout extends Component {
  state = {
    totalAmount: 0,
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getTotalPrice = this.getTotalPrice.bind(this);
    let products = this.props.products.filter((c) => c.value > 0);

    for (let i = 0; i < products.length; i++) {
      this.state.totalAmount =
        this.state.totalAmount + products[i].value * products[i].unitPrice;
    }
  }

  getTotalPrice() {
    let products = this.props.products.filter((c) => c.value > 0);

    for (let i = 0; i < products.length; i++) {
      this.state.totalAmount =
        this.state.totalAmount + products[i].value * products[i].unitPrice;
    }
    console.log("amount " + this.state.totalAmount);
    return this.state.totalAmount;
  }
  handleSubmit(e) {
    e.preventDefault();

    console.log("Order " + this.state.orderPayment);
    /* let config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    }; */

    axios
      .post("http://localhost:9090/pay/", this.state.orderPayment)
      .then((response) => {
        console.log(response.data);
        window.open(response.data.substring(9, response.data.length), "_blank");
      });
  }

  render() {
    let products = this.props.products.filter((c) => c.value > 0);
    products = products.map((product) => {
      return (
        <div className="row">
          <div className="col-md-6">
            <li>{product.name}</li>
          </div>
          <div className="col-md-3">
            <ul>
              <li>
                {" x "}
                {product.value}
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <li>
                {" £ "}
                {product.value * product.unitPrice}
              </li>
            </ul>
          </div>
        </div>
      );
    });
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1">
            <img src="https://picsum.photos/80"></img>
          </div>
          <div className="col-md-9 topbarContent">
            <br />
            <h3> This is Checkout Page </h3>
          </div>
          <div className="col-md-2 topbarContent">
            <br />
            <span className="glyphicon glyphicon-briefcase "></span>
            <span className="badge badge-pill">
              {this.props.products.filter((c) => c.value > 0).length}
            </span>{" "}
            <br />
            <h6>
              <span className="glyphicon glyphicon-user "></span>{" "}
              {this.props.username}
            </h6>
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
              <li class="nav-item active">
                <a class="nav-link" href="\products">
                  Products
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
            <form className="textColorBlack form-group">
              <h4>Order Confrimation & Payment</h4>

              <br />
              <div className="card textColorBlack">
                <div className="card-header ">Order Details</div>

                <div className="card-body ">
                  <ol>{products}</ol>
                </div>
              </div>
              <div className="card textColorBlack">
                <div className="card-header ">Total Price</div>

                <div className="card-body ">
                  <div className="row">
                    <div className="col-md-12 offset-9">
                      <ul>
                        <li>
                          <b>
                            {"     £ "}
                            {this.state.totalAmount}
                          </b>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <MyPaypalExpressBtn
                totalAmount={this.state.totalAmount}
                products={this.props.products.filter((c) => c.value > 0)}
                nextStep={this.props.nextStep}
              />
            </form>
          </div>

          <div className="col-md-2">
            <div className="sidebarContent">Right Side Bar</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
