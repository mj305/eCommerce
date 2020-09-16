import React, { useEffect, useState } from "react";
import Layout from "../Layout";

const CartComponent = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  console.log(cart);

  let subTotal = 0;

  const results = cart.map((value) => {
    const productTotal = value.price * value.count;
    subTotal += productTotal;

    return (
      <>
        <p> Product {value.title} </p>
        <p> Price {value.price} </p>
        <p> Quantity {value.count} </p>
        <p> ${productTotal} </p>
      </>
    );
  });

  return (
    <Layout>
      <h1>Cart</h1>
      <div>{results}</div>
      <div>Grand Total ${subTotal} </div>
    </Layout>
  );
};

export default CartComponent;
