import React from "react";
import { Helmet } from "react-helmet";

import ProductComponent from "../../Components/ProductComponent";

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>

      <ProductComponent />
    </>
  );
};

export default Products;
