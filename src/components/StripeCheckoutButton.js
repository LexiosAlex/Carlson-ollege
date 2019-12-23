import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

class StripeCheckoutButton extends Component {

  async handleToken(token, addresses, props) {
    console.log(token, addresses);
    console.log(props);
    const {room, userCheckIn, userCheckOut, userSubTotal, user, chargeUserCard} = props;
    const orderedRoom = {room, userCheckIn, userCheckOut, totalPrice: userSubTotal};
    const response = await axios.post(
      "/api/checkout",
      { token, orderedRoom }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
      chargeUserCard(orderedRoom, user, userSubTotal)
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  render() {
    const {userSubTotal, room} = this.props;
    return (
      <div>
        <StripeCheckout
          stripeKey="pk_test_hHChXX6WftyL0nudDLf48Osx00fKWj1ocN"
          token={(token, addresses) => this.handleToken(token, addresses, this.props)}
          amount={userSubTotal * 100}
          name={room.name}
        />
      </div>
    );
  }
}

export default StripeCheckoutButton;
