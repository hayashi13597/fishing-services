"use client";
import React from "react";

import Breadcrumb from "../Breadcrumb";
import { structurePageType } from "../../common.types";
import Support from "../home/Support";
import ProductCart from "./ProductCart";
import DidiveSpace from "../DidiveSpace";
import FooterProductDetail from "./ProductCart/review";
import StarReview from "./starReview";
import ProductContainer, { IProduct } from "../home/ProductContainer";
import MainProduct from "../home/components/MainProduct";

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

  return (
    <div className="container mx-auto">
      <Breadcrumb structurePage={structurePage} />
      <ProductCart product={product} />
      <DidiveSpace coefficient={8} />
      <FooterProductDetail product={product} />
      <DidiveSpace coefficient={8} />
      {listProductSame.length ? (
        <MainProduct
          listProduct={listProductSame}
          title="Sản phẩm tương tự"
          link={product.Category.slug}
        />
      ) : (
        ""
      )}

      <DidiveSpace coefficient={8} />
    </div>
  );
};

export default ProductDetail;
