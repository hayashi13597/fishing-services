import React from "react";
import ProductCart from "../productdetail/ProductCart";
import ProductContainer from "../home/ProductContainer";
import { initialData } from "../../constants";

const BaitDetailComponent = () => {
  return (
    <>
      <ProductCart product={initialData[0]} />
      <ProductContainer
        isShowBtn={true}
        listProducts={initialData}
        title="Sản phẩm tương tự"
        link="/san-pham"
      />
    </>
  );
};

export default BaitDetailComponent;
