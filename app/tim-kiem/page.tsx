import React from "react";
import SearchScreen from "../../components/screen/SearchScreen";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tìm kiếm",
  description:
    "Tìm kiếm sản phẩm dể dàng  tại trang website của ốc đảo kỳ đà",
};
const page = () => {
  return (
    <div>
      <SearchScreen />
    </div>
  );
};

export default page;
