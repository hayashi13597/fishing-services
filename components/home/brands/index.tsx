"use client";
import React from "react";
import SwipperContainer from "../../swipper";
import { SwiperSlide } from "swiper/react";
import BrandBox from "./BrandBox";
const Brands = () => {
  return (
    <div>
      <SwipperContainer responsive={[3, 5, 8]}>
        <SwiperSlide>
          <BrandBox
            brandName="hello"
            imageSrc="https://zishop.vercel.app/_next/image?url=%2Fimages%2Fbrand-logo-img%2Fgucci.webp&w=640&q=75"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BrandBox
            brandName="hello"
            imageSrc="https://zishop.vercel.app/_next/image?url=%2Fimages%2Fbrand-logo-img%2Fgucci.webp&w=640&q=75"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BrandBox
            brandName="hello"
            imageSrc="https://zishop.vercel.app/_next/image?url=%2Fimages%2Fbrand-logo-img%2Fgucci.webp&w=640&q=75"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BrandBox
            brandName="hello"
            imageSrc="https://zishop.vercel.app/_next/image?url=%2Fimages%2Fbrand-logo-img%2Fgucci.webp&w=640&q=75"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BrandBox
            brandName="hello"
            imageSrc="https://zishop.vercel.app/_next/image?url=%2Fimages%2Fbrand-logo-img%2Fgucci.webp&w=640&q=75"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BrandBox
            brandName="hello"
            imageSrc="https://zishop.vercel.app/_next/image?url=%2Fimages%2Fbrand-logo-img%2Fgucci.webp&w=640&q=75"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BrandBox
            brandName="hello"
            imageSrc="https://zishop.vercel.app/_next/image?url=%2Fimages%2Fbrand-logo-img%2Fgucci.webp&w=640&q=75"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BrandBox
            brandName="hello"
            imageSrc="https://zishop.vercel.app/_next/image?url=%2Fimages%2Fbrand-logo-img%2Fgucci.webp&w=640&q=75"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BrandBox
            brandName="hello"
            imageSrc="https://zishop.vercel.app/_next/image?url=%2Fimages%2Fbrand-logo-img%2Fgucci.webp&w=640&q=75"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BrandBox
            brandName="hello"
            imageSrc="https://zishop.vercel.app/_next/image?url=%2Fimages%2Fbrand-logo-img%2Fgucci.webp&w=640&q=75"
          />
        </SwiperSlide>
      </SwipperContainer>
    </div>
  );
};

export default Brands;
