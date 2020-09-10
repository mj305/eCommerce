import React from "react";
import { Helmet } from "react-helmet";
import CartComponent from "../../Components/Cart";

const Cart = () => {
  return (
    <div>
      <Helmet>
        <title>Cart</title>
      </Helmet>

      <CartComponent />
    </div>
  );
};

export default Cart;
