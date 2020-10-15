import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import AOS from "aos";

import styles from "./ProductComponent.module.scss";

const ProductComponent = () => {
  const [product, setProduct] = useState({
    data: [
      {
        _id: "",
        name: "",
        description: "",
        price: 0,
        quantity: 0,
        category: "",
      },
    ],
  });

  useEffect(() => {
    const fetchProduct = () => {
      fetch(`http://localhost:4000/viewProduct`)
        .then((result) => result.json())
        .then((data) => setProduct(data))
        .catch((error) => console.log("Error: ", error));
    };
    fetchProduct();
  }, []);

  const results = product.data.map((value) => {
    return (
      <Link to={`/product/${value._id}`}>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className={`${styles.imageZoonInAnimation} ${styles.cardsContainer}`}
        >
          <div className={`card ${styles.cardContainer}`}>
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={value.image} alt="" />
              </figure>
            </div>

            <div className={`card-content ${styles.cardContent}`}>
              <div className="media">
                <div className="media-content">
                  <Link className={`title is-4 ${styles.cardGroup}`}>
                    {value.name}
                  </Link>
                </div>
              </div>

              <div className={`content ${styles.cardGroupText}`}>
                {" "}
                {value.description}{" "}
              </div>
              <div className={`content ${styles.cardGroupText}`}>
                {" "}
                ${value.price}{" "}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return <>{results}</>;
};

export default ProductComponent;
