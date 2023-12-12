import React from "react";

import CartContainer from "./ui/CartContainer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Giỏ hàng hồ câu cá ốc đảo kỳ đà",
  description:
    "Tha hồ mua hàng giá rẻ tại hồ câu ốc đảo kỳ đà, miễn phí vào hàng tuần",
};
const page = () => {
  return (
    <div className="bg-white">
      <CartContainer />
    </div>
  );
};

export default page;
