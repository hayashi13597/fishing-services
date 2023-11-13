import React from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import { structurePageType } from "../../../common.types";
import ProductCart from "../../../components/productdetail/ProductCart";
import ProductContainer from "../../../components/home/ProductContainer";

const structurePage: structurePageType[] = [
  { page: "Món nhậu", link: "/mon-nhau" },
  { page: "Cá Diêu Hồng nướng giấy bạc", link: "/moi-cau", last: true },
];

const FoodDetail = () => {
  return (
    <div className="container mx-auto">
      <Breadcrumb structurePage={structurePage} isDisplay={false} />
      <ProductCart isShow={false} />
      <div className="mt-10">
        <ProductContainer
          isShowBtn={true}
          title="Sản phẩm tương tự"
          link="/san-pham"
        />
      </div>
    </div>
  );
};

export default FoodDetail;
