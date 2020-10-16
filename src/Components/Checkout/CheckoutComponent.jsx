import React from "react";
import axios from "axios";

import styles from "./CheckoutComponent.module.scss";

import { loadStripe } from "@stripe/stripe-js";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_ROFzZa3e3AXOVW3PRXq481qy");

const CheckoutComponent = ({ subTotal, items }) => {
  console.log("Items: ", items);
  console.log("SubTotal: ", subTotal);

  const handleClick = async (event) => {
    // Get Stripe.js instance
    try {
      const stripe = await stripePromise;
      console.log(process.env.REACT_APP_API);
      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API}/checkout`,
        data: {
          items,
          subTotal,
        },
      });
      console.log(response);

      // When the customer clicks on the button, redirect them to Checkout.
      const result = await stripe.redirectToCheckout({
        sessionId: response.data.id,
      });

      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <button
      className={`${styles.checkoutButton}`}
      role="link"
      onClick={handleClick}
    >
      Checkout
    </button>
  );
};

export default CheckoutComponent;
