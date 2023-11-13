import Image from "next/image";
import React from "react";

const CartItem = () => {
  return (
    <div className="flex justify-between items-center gap-3 md:gap-14 mb-5">
      <div className="flex gap-3 items-center">
        <Image width={60} height={60} src="/assets/can-cau.jpg" alt="item" />
        <p className="line-clamp-2 md:line-clamp-none">
          DFORM+ Frieren: Beyond Journey's End Fern Deforme Action Figure
        </p>
      </div>
      <p>1,350,000₫</p>
    </div>
  );
};

export default CartItem;
