import React from "react";
import axios from "axios";

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

      const response = await axios({
        method: "POST",
        url: "http://localhost:4000/checkout",
        data: {
          items,
          subTotal,
        },
      });
      console.log(response);

      // Call your backend to create the Checkout Session
      /* const response = await axios("http://localhost:4000/checkout", {
      method: "POST",
      body: JSON.stringify({ items: "random thing" }),
    }); */

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
    <button role="link" onClick={handleClick}>
      Checkout
    </button>
  );
};

export default CheckoutComponent;
