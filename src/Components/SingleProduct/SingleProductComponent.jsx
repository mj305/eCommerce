import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Layout from "../Layout";

import styles from "./SingleProductComponent.module.scss";

import nailsCard from "./nailsCard.png";

const SingleProductComponent = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = () => {
      fetch(`http://localhost:4000/viewProduct/${id}`)
        .then((result) => result.json())
        .then((data) => setProduct(data))
        .catch((error) => console.log("Error: ", error));
    };
    fetchProduct();
  }, []);
  console.log(product);

  let prodDisplayed;
  let priceDisplayed;
  let descriptionDisplayed;

  if (product.data) {
    prodDisplayed = <p> {product.data.name} </p>;
    priceDisplayed = <p> {product.data.price} </p>;
    descriptionDisplayed = <p> {product.data.description} </p>;
  } else {
    prodDisplayed = <p> Product Not Found </p>;
  }

  return (
    <>
      <Layout>
        <div className={`${styles.productContainer}`}>
          <div>
            <img src={nailsCard} className={`${styles.productImage}`} />
          </div>

          <div className={`${styles.textContainer}`}>
            <h1 className={`${styles.textHeader}`}> {prodDisplayed} </h1>
            <h3 className={`${styles.textPrice}`}> {priceDisplayed} </h3>
            <h4 className={`${styles.textDescription}`}>
              {descriptionDisplayed}
            </h4>

            <div className={`${styles.quantityContainer}`}>
              <p>Quantity</p>
              <input placeholder="0" className={`${styles.quantityInput}`} />
              <button className={`${styles.quantityButton}`}>+</button>
            </div>

            <button className={`${styles.addCartButton}`}>Add To Cart</button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SingleProductComponent;
