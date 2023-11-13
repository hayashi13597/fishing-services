"use client";
import React from "react";
import SwipperContainer from "../../swipper";
import { initialData } from "../../../constants";
import { SwiperSlide } from "swiper/react";
import ProductItem from "../../Products/ProductItem";

import TitleFormat from "../UI/title";
import Link from "next/link";

interface ProductContainerPros {
  title: string;
  link: string;
  isShowBtn?: boolean;
}
const ProductContainer = ({
  title,
  link,
  isShowBtn = true,
}: ProductContainerPros) => {
  return (
    <section>
      <TitleFormat title={title} link={link} />
      <SwipperContainer responsive={[2, 2, 5]} isShowBtn={isShowBtn}>
        {initialData.map((product, index) => (
          <SwiperSlide
            key={`product-${product} - ${index}`}
            className="text-center pt-2 support_container pb-10"
          >
            <div>
              <ProductItem product={product} key={product.name} />
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
