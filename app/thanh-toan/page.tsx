"use client";
import React, { useState } from "react";
import InfoComponent from "../../components/payment/InfoComponent";
import TotalComponent from "../../components/payment/TotalComponent";

const Payment = () => {
  const [shipment, setShipment] = useState(0);

  return (
    <div className="bg-white">
      <div className="container mx-auto py-10 flex flex-col md:flex-row gap-10">
        <InfoComponent setShipment={setShipment} shipment={shipment} />
        <TotalComponent shipment={shipment} />
      </div>
    </div>
  );
};

export default Payment;
