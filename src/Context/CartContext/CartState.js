import React, { useReducer } from "react";
import axios from "axios";
import { CART_REQUEST, CART_SUCCESS, CART_FAILURE } from "./types";

import cartReducer from "./cartReducer";
import cartContext from "./cartContext";

/* Saving in Local Storage */
const SaveDataToLocalStorage = (data) => {
  let cart = [];
  // Parse the serialized data back into an aray of objects
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  /*  a.unshift(data); */

  /*   const cart = JSON.parse(localStorage.getItem("cart")) || [];
   */
  const cartCount = cart.some((element) => element.id === data.id);

  console.log(cartCount);

  if (cartCount) {
    //Find index of specific object using findIndex method.
    const objIndex = cart.findIndex((obj) => obj.id === data.id);

    //Log object to Console.
    console.log("Before update: ", cart[objIndex]);

    //Update object's name property.
    cart[objIndex].count += data.count;

    //Log object to console again.
    console.log("After update: ", cart[objIndex]);
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    // Re-serialize the array back into a string and store it in localStorage

    cart.unshift(data);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

const CartState = (props) => {
  const initialState = {
    loading: false,
    errors: null,
    items: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product, count) => {
    dispatch({ type: CART_REQUEST });

    const cart = {
      id: product.data._id,
      title: product.data.name,
      count,
      price: product.data.price,
    };
    SaveDataToLocalStorage(cart);
  };

  const fetchCartItems = () => {
    dispatch({ type: CART_REQUEST });
  };

  return (
    <cartContext.Provider
      value={{
        loading: state.loading,
        errors: state.errors,
        items: state.items,
        addToCart,
        fetchCartItems,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export default CartState;
