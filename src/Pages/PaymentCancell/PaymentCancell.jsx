import React from "react";
import { Helmet } from "react-helmet";
import PaymentCancellComponent from "../../Components/PaymentCancell";

const PaymentCancell = () => {
  return (
    <div>
      <Helmet>
        <title>Payment Cancellation</title>
      </Helmet>

      <PaymentCancellComponent />
    </div>
  );
};

export default PaymentCancell;
