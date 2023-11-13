import React from "react";
import ProductCart from "../productdetail/ProductCart";
import ProductContainer from "../home/ProductContainer";

const BaitDetailComponent = () => {
  return (
    <>
      <ProductCart />
      <ProductContainer
        isShowBtn={true}
        title="Sản phẩm tương tự"
        link="/san-pham"
      />
    </>
  );
};

export default BaitDetailComponent;
