import React from "react";
import Layout from "../Layout";

import { loadStripe } from "@stripe/stripe-js";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_ROFzZa3e3AXOVW3PRXq481qy");

const CheckoutComponent = () => {
  const handleClick = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await fetch("http://localhost:4000/checkout", {
      method: "POST",
    });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return (
    <Layout>
      <h1>Checkout Component</h1>
      <button role="link" onClick={handleClick}>
        Checkout
      </button>
    </Layout>
  );
};

export default CheckoutComponent;
