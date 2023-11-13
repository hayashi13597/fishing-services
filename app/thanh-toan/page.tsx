import React from "react";
import InfoComponent from "../../components/payment/InfoComponent";
import TotalComponent from "../../components/payment/TotalComponent";

const Payment = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-10 flex flex-col md:flex-row gap-10">
        <InfoComponent />
        <TotalComponent />
      </div>
    </div>
  );
};

export default Payment;
