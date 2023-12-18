import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import ProductScreen from "../../components/screen/ProductScreen";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sản phẩm tốt tại Ốc đảo kỳ đà",
  description:
    "Sản phẩm tốt tại Ốc đảo kỳ đà  vô vàng sản phẩm ngập tràn, Tha hồ lựa chọn bạn nhé",
};
const SearchPage = () => {
  const structurePage = {
    page: "Sản phẩm",
    link: "/san-pham",
    last: true,
  };
  return (
    <div className="container mx-auto">
      <Breadcrumb structurePage={[structurePage]} title={structurePage.page} />

      <ProductScreen isPageProduct={true} listProductDefault={[]} total={0} />
    </div>
  );
};

export default SearchPage;
