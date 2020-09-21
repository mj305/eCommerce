import React, { useEffect, useState, useContext } from "react";
import cartContext from "../../Context/CartContext/cartContext";
import Layout from "../Layout";

const CartComponent = () => {
  const [cart, setCart] = useState([]);

  const { increaseCount, decreaseCount, fetchCartItems, items } = useContext(
    cartContext
  );

  useEffect(() => {
    fetchCartItems();
    /*     setCart(JSON.parse(localStorage.getItem("cart")) || []);
     */
  }, []);

  let subTotal = 0;

  const results = items.map((value) => {
    console.log(value);
    const productTotal = value.price * value.count;
    subTotal += productTotal;

    return (
      <>
        <p> Product {value.title} </p>
        <p> Price {value.price} </p>
        <p> Quantity </p>
        <button onClick={() => decreaseCount(value)}>-</button>
        <div>{value.count}</div>
        <button onClick={() => increaseCount(value)}>+</button>
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
