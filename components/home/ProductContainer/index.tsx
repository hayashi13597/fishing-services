"use client";
import React from "react";
import SwipperContainer from "../../swipper";
import { initialData } from "../../../constants";
import { SwiperSlide } from "swiper/react";
import ProductItem from "../../Products/ProductItem";

import TitleFormat from "../UI/title";
import Link from "next/link";

export interface IProduct {
  description: string;
  name: string;
  price: number;
  sell: string;
  selloff: number;
  slug: string;
  imageUrl: string;
  id: string;
  Category: {
    id: string;
    name: string;
    slug: string;
  };
  User;
}
interface ProductContainerPros {
  title: string;
  link: string;
  isShowBtn?: boolean;
  isNew?: boolean;
  listProducts: any[];
}
const ProductContainer = ({
  title,
  link,
  isShowBtn = true,
  listProducts,
  isNew = false,
}: ProductContainerPros) => {
  return (
    <section>
      <TitleFormat title={title} link={link} />
      <SwipperContainer responsive={[2, 2, 4]} isShowBtn={isShowBtn}>
        {listProducts.map((product, index) => (
          <SwiperSlide
            key={`product-${product} - ${index}`}
            className="text-center pt-2 support_container pb-10"
          >
            <div>
              <ProductItem isNew={isNew} product={product} key={product.name} />
            </div>
          </SwiperSlide>
        ))}
      </SwipperContainer>
      <div className="flex">
        <Link
          className="m-auto sm:hidden text-sm  sm:mb-0 mb-4 bg-primary py-1 px-4 inline-block text-white   rounded-full"
          href={link}
        >
          Xem tất cả
        </Link>
      </div>
    </section>
  );
};

export default ProductContainer;
