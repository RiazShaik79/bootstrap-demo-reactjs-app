import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Success from "./Success";
import Confirm from "./Confirm";
import ProductsDetails from "../ProductsDetails";
import axios from "axios";
import Checkout from "../checkout";
import OrderSuccess from "./OrderSuccess";
import MyCartDetails from "../MyCartDetails";
import { ActionExitToApp } from "material-ui/svg-icons";

export class ProductsForm extends Component {
  state = {
    products: [],
    mycart: {
      username: "rshaikb",
      topics: [],
    },
    step: 1,
  };

  constructor(props) {
    super(props);
    this._refreshProducts = this._refreshProducts.bind(this);
    this.handleAddtoCart = this.handleAddtoCart.bind(this);
    this.handleSavetoCart = this.handleSavetoCart.bind(this);
    this._refreshCart = this._refreshCart.bind(this);
  }

  componentWillMount() {
    this._refreshProducts();
    this._refreshCart();
    console.log("user state " + this.props.userLoggedIn);
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

    axios.get("http://localhost:8080/topics").then((response) => {
      this.setState({
        products: response.data,
      });
    });
  }

  _refreshCart() {
    console.log("Token Received: " + this.props.token);

    console.log("am inside refresh Cart ");
    let config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    };

    axios
      .get("http://localhost:8080/mycart/rshaikb", config)
      .then((response) => {
        this.setState({ mycart: response.data });
        console.log(this.state.mycart.topics);
      });
  }

  //proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleAddtoCart(product) {
    const topics = [...this.state.mycart.topics];
    console.log("topics length " + topics.length);

    let topicExist = false;
    let i = 0;
    for (i = 0; i < topics.length; i++) {
      if (topics[i].name == product.name) {
        topicExist = true;
        topics[i].value++;
      }
    }

    if (!topicExist) {
      product.value = 1;
      topics.push(product);
    }

    this.setState({ mycart: { username: "rshaikb", topics } });

    /* let config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    };

      axios
      .put(
        //"http://localhost:8080/mycart" + localStorage.getItem("userName"),
        "http://localhost:8080/mycart/rshaikb",
        this.state.mycart,
        config
      )
      .then((response) => {
        console.log(response.data);
      }); */
  }

  handleSavetoCart() {
    let config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    };

    axios
      .put("http://localhost:8080/mycart/rshaikb", this.state.mycart, config)
      .then((response) => {
        console.log(response.data);
      });
  }

  render() {
    const { step } = this.state;
    const { onReset, counters, onDelete, onIncrement } = this.props;
    switch (step) {
      case 1:
        return (
          <ProductsDetails
            username={localStorage.getItem("userName")}
            token={localStorage.getItem("userToken")}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            products={this.state.products}
            mycart={this.state.mycart}
            handleSavetoCart={this.handleSavetoCart}
            handleAddtoCart={this.handleAddtoCart}
            userLoggedIn={this.props.userLoggedIn}
          />
        );
    }
  }
}

export default ProductsForm;
