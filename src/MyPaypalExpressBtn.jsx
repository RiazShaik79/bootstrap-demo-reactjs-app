import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import axios from "axios";

export default class MyPaypalExpressBtn extends React.Component {
  state = {
    order: {
      orderId: "",
      topics: [],
      totalAmount: 0,
    },
  };
  constructor(props) {
    super(props);
    this.createOrder = this.createOrder.bind(this);
  }

  createOrder() {
    this.setState({ totalAmount: this.props.totalAmount });
    this.setState({ topics: this.props.products });
    console.log("topics " + this.props.products);
    let config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    };

    axios
      .post("http://localhost:8080/orders", this.state, config)
      .then((response) => {
        console.log(response.data);
        this.props.nextStep();
      });
  }

  render() {
    const onSuccess = (payment) => {
      console.log("Your payment was succeeded!", payment);
      this.createOrder();
    };
    const onCancel = (data) => {
      // User pressed "cancel" or close Paypal's popup!
      console.log("You have cancelled the payment!", data);
    };
    const onError = (err) => {
      // The main Paypal's script cannot be loaded or somethings block the loading of that script!
      console.log("Error!", err);
      // Since the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
      // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    };

    const client = {
      sandbox:
        "AYr1fDDAbEEqgXxfusgIW6Q-mMheX9pJtnPx5x8cGxkjIxy2zoDsSJr76r3twxRLS_AyXR1cq4JMeu2O",
    };

    return (
      <PaypalExpressBtn
        client={client}
        currency={"GBP"}
        total={this.props.totalAmount}
        intent={"capture"}
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
      />
    );
  }
}
