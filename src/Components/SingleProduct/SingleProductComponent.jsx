import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import CartContext from "../../Context/CartContext/cartContext";
import authContext from "../../Context/AuthContext/authContext";

import Layout from "../Layout";

import styles from "./SingleProductComponent.module.scss";

const SingleProductComponent = () => {
  const { isAuthenticated } = useContext(authContext);
  const history = useHistory();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const [count, setCount] = useState(1);

  const handleCart = () => {
    if (!isAuthenticated) {
      history.push("/login");
      toast("Please Login to Add to Cart!");
    } else {
      addToCart(product, count);
      toast.success("Product Added to Cart!");
    }
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count <= 1) {
      setCount(count);
    } else {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    const fetchProduct = () => {
      fetch(`http://localhost:4000/viewProduct/${id}`)
        .then((result) => result.json())
        .then((data) => setProduct(data))
        .catch((error) => console.log("Error: ", error));
    };
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let prodDisplayed;
  let priceDisplayed;
  let descriptionDisplayed;
  let imageDisplay;

  if (product.data) {
    prodDisplayed = <p> {product.data.name} </p>;
    priceDisplayed = <p> ${product.data.price} </p>;
    descriptionDisplayed = <p> {product.data.description} </p>;
    imageDisplay = (
      <img
        className={`${styles.productImage}`}
        src={product.data.image}
        alt="jar-product-container-thumbnail"
      />
    );
  } else {
    prodDisplayed = <p> Product Not Found </p>;
  }

  return (
    <>
      <Layout>
        <div className={`${styles.productContainer}`}>
          <div>{imageDisplay}</div>

          <div className={`${styles.textContainer}`}>
            <h1 className={`${styles.textHeader}`}> {prodDisplayed} </h1>
            <h3 className={`${styles.textPrice}`}> {priceDisplayed} </h3>
            <h4 className={`${styles.textDescription}`}>
              {descriptionDisplayed}
            </h4>

            <div className={`${styles.quantityContainer}`}>
              <p>Quantity</p>
              <button
                disabled={count === 1}
                onClick={handleDecrease}
                className={`${styles.quantityButton}`}
              >
                {" "}
                -{" "}
              </button>
              <input value={count} className={`${styles.quantityInput}`} />
              <button
                onClick={handleIncrease}
                className={`${styles.quantityButton}`}
              >
                {" "}
                +{" "}
              </button>
            </div>

            <button onClick={handleCart} className={`${styles.addCartButton}`}>
              Add To Cart
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SingleProductComponent;
