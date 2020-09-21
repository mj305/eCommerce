import React from "react";
import { Helmet } from "react-helmet";
import CheckoutComponent from "../../Components/Checkout";

const Checkout = () => {
  return (
    <div>
      <Helmet>
        <title>Checkout</title>
      </Helmet>

      <CheckoutComponent />
    </div>
  );
};

export default Checkout;
