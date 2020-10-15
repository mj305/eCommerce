import React, { useEffect, useContext } from "react";
import cartContext from "../../Context/CartContext/cartContext";
import Layout from "../Layout";
import Checkout from "../Checkout";

import styles from "./CartComponent.module.scss";

const CartComponent = () => {
  const {
    increaseCount,
    decreaseCount,
    fetchCartItems,
    items,
    deleteProduct,
  } = useContext(cartContext);

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  let subTotal = 0;

  const results = items.map((value) => {
    console.log(value);
    const productTotal = value.price * value.count;
    subTotal += productTotal;

    return (
      <div className={`${styles.cartItemContainer}`}>
        <div>
          <img
            src={value.image}
            className={`${styles.cartItemImage}`}
            alt="product-container-thumbnail"
          />
        </div>
        <div className={`${styles.cartItemDataContainer}`}>
          <p className={`${styles.cartItemData}`}> Product {value.title} </p>
          <p className={`${styles.cartItemData}`}> Price ${value.price} </p>
          <button
            className={`${styles.cartItemData}`}
            onClick={() => decreaseCount(value)}
          >
            -
          </button>
          <div className={`${styles.cartItemData}`}>{value.count}</div>
          <button
            className={`${styles.cartItemData}`}
            onClick={() => increaseCount(value)}
          >
            +
          </button>
          <button
            className={`${styles.cartItemData}`}
            onClick={() => deleteProduct(value)}
          >
            Delete
          </button>

          <p> ${productTotal} </p>
        </div>
      </div>
    );
  });

  return (
    <Layout>
      <div className={`${styles.cartContainer}`}>
        <div>
          <h3 className={`${styles.cartHeaderHeder}`}>Cart</h3>
        </div>

        <div>
          <div>{results}</div>
          <hr />
          <div className={`${styles.cartTotalContainer}`}>
            {items.length ? (
              <div className={`${styles.cartTotalText}`}>
                Grand Total ${subTotal}
              </div>
            ) : (
              "Nothing in the cart"
            )}
            {/* STRIPE BELOW */}
            {items.length ? (
              <Checkout items={items} subTotal={subTotal} />
            ) : null}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartComponent;
