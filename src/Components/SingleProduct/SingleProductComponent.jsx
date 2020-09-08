import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  if (product.data) {
    prodDisplayed = <p> {product.data.name} </p>;
  } else {
    prodDisplayed = <p> Product Not Found </p>;
  }

  return (
    <>
      <h1>SINGLE PRODUCT</h1>
      {prodDisplayed}
    </>
  );
};

export default SingleProductComponent;
