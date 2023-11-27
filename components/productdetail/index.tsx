"use client";
import React from "react";

import Breadcrumb from "../Breadcrumb";
import { structurePageType } from "../../common.types";
import Support from "../home/Support";
import ProductCart from "./ProductCart";
import DidiveSpace from "../DidiveSpace";
import FooterProductDetail from "./review";
import StarReview from "./starReview";
import ProductContainer, { IProduct } from "../home/ProductContainer";

const ProductDetail = ({
  slug,
  category,
  product,
  listProductSame,
}: {
  slug: string;
  category: string;
  product: IProduct;
  listProductSame: IProduct[];
}) => {
  const structurePage: structurePageType[] = [
    { page: product.Category.name, link: `/${category}`, last: false },
    { page: product.name, link: `/${slug}`, last: true },
  ];
  console.log(product);
  return (
    <div className="container mx-auto">
      <Breadcrumb structurePage={structurePage} />
      <ProductCart product={product} />
      <DidiveSpace coefficient={8} />
      <FooterProductDetail />
      <DidiveSpace coefficient={8} />
      <div className="flex flex-col mb-1">
        <h2 className="text-center w-full text-2xl   font-medium">
          Đánh giá sản phẩm
        </h2>
        <div className="m-auto  border-2 border-[#EFEFEF]-400 p-4">
          <StarReview average={5} percent={20} totalReview={100} />
          <StarReview average={4} percent={20} totalReview={100} />
          <StarReview average={3} percent={20} totalReview={100} />
          <StarReview average={2} percent={20} totalReview={100} />
          <StarReview average={1} percent={20} totalReview={100} />
        </div>
      </div>
      <DidiveSpace coefficient={8} />
      <Support />

      <div>
        {listProductSame.length ? (
          <ProductContainer
            isShowBtn={true}
            title="Sản phẩm tương tự"
            link="/san-pham"
            listProducts={listProductSame}
          />
        ) : (
          ""
        )}
      </div>
      <DidiveSpace coefficient={8} />
    </div>
  );
};

export default ProductDetail;
