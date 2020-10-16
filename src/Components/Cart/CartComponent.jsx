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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <div className={`${styles.cartItemBoxText}`}>
            <div>
              {/* Product Name */}
              <p className={`${styles.cartItemData}`}> {value.title} </p>
              {/* Delete Item Button */}
              <button
                className={`${styles.cartItemDelete}`}
                onClick={() => deleteProduct(value)}
              >
                Delete
              </button>
            </div>
            {/* <p className={`${styles.cartItemData}`}> Price ${value.price} </p> */}
            {/* Increase | Decrease Product Quantity */}

            <button
              className={`${styles.cartEditQuantity}`}
              onClick={() => decreaseCount(value)}
            >
              -
            </button>
            <div className={`${styles.cartItemData}`}>{value.count}</div>
            <button
              className={`${styles.cartEditQuantity}`}
              onClick={() => increaseCount(value)}
            >
              +
            </button>

            <p> ${productTotal} </p>
          </div>
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
                Sub Total ${subTotal}
              </div>
            ) : (
              <div className={`${styles.emptyCartText}`}>
                <h4> You Don't Have Any Items in the Cart!</h4>
              </div>
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
