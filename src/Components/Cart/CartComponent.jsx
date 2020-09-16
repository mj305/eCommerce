import React, { useEffect, useState } from "react";
import Layout from "../Layout";

const CartComponent = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  console.log(cart);

  const results = cart.map((value) => {
    const total = value.price * value.count;

    return (
      <>
        <p> Product {value.title} </p>
        <p> Price {value.price} </p>
        <p> Quantity {value.count} </p>
        <p> Total {total} </p>
      </>
    );
  });

  return (
    <Layout>
      <h1>Cart</h1>
      <div>{results}</div>
    </Layout>
  );
};

export default CartComponent;
