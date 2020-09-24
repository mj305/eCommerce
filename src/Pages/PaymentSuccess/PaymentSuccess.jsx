import React from "react";
import { Helmet } from "react-helmet";
import PaymentSuccessComponent from "../../Components/PaymentSuccess";

const PaymentSuccess = () => {
  return (
    <div>
      <Helmet>
        <title>Payment Success</title>
      </Helmet>

      <PaymentSuccessComponent />
    </div>
  );
};

export default PaymentSuccess;
