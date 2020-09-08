import React from "react";
import { Helmet } from "react-helmet";

import SingleProduct from "../../Components/SingleProduct";

const Product = () => {
  return (
    <>
      <Helmet>
        <title>Product</title>
      </Helmet>

      <SingleProduct />
    </>
  );
};

export default Product;
