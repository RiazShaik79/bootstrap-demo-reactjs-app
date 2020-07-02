import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Counters from "./pages/counters";
import Counter from "./pages/counter";

class Products extends Component {
  state = {
    products: [],
  };
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this._refreshProducts();
  }

  _refreshProducts() {
    console.log("Token Received: " + this.props.token);

    console.log("am inside refreshproducts ");
    let config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    };

    axios.get("http://localhost:8080/topics", config).then((response) => {
      this.setState({
        products: response.data,
      });
    });
  }

  handleReset = () => {
    const products = this.state.products.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ products });
  };

  handleSave() {
    const products = [...this.state.products];

    let config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    };

    axios
      .put("http://localhost:8080/topics", this.state.products, config)
      .then((response) => {
        console.log(response.data);
      });
  }

  handleIncrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].value++;
    console.log(this.state.products[index]);
    this.setState({ products });
  };

  handleDecrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].value--;
    if (products[index].value <= 0) {
      products[index].value = 0;
    }
    this.setState({ products });
  };

  render() {
    let products = this.state.products.map((product) => {
      return (
        <div className="col-md-2">
          <div className="card textColorBlack">
            <div className="card-header "> {product.name}</div>
            <div className="card-body ">
              <a href="#" className="thumbnail">
                <img src="https://picsum.photos/100"></img>
              </a>
              <Counter
                key={product.id}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                counter={product}
              />
            </div>
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
            <h3> This is Products Page </h3>
          </div>
          <div className="col-md-2 topbarContent">
            <br />
            <span className="glyphicon glyphicon-briefcase "></span>
            <span className="badge badge-pill">
              {this.state.products.filter((c) => c.value > 0).length}
            </span>{" "}
            <br />
            <h6>
              <span className="glyphicon glyphicon-user "></span>{" "}
              {this.props.username}
            </h6>
          </div>
        </div>{" "}
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
              <li class="nav-item dropdown active">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Products
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Add a Product
                  </a>
                  <a class="dropdown-item" href="#">
                    Edit Product
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Delete Product
                  </a>
                </div>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="/checkout">
                  Checkout <span class="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <div>
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                onClick={this.handleReset}
              >
                Reset Cart
              </button>{" "}
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                onClick={this.handleSave()}
              >
                Save Cart
              </button>
            </div>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2 m-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />{" "}
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
          <div className="col-md-10 ">
            <div className="row">{products}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
