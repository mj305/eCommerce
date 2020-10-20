import React, {useEffect} from "react";
import Layout from "../Layout";

const PaymentSuccessComponent = () => {
  useEffect(() => {
    const clearCart = () => {
      localStorage.removeItem("cart")
    }
    clearCart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout>
      
      <h2>Payment Success Component</h2>
    </Layout>
  );
};

export default PaymentSuccessComponent;
