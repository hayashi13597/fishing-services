"use client";
import React from "react";
import SwipperContainer from "../swipper";
import { SwiperSlide } from "swiper/react";

import { cn } from "react-swisskit";
interface ListSubImageProps {
  listImage: string[];
  handleChange: any;
  current: string;
}
const ListSubImage = ({
  listImage = ["/assets/can-cau.jpg"],
  handleChange,
  current,
}: ListSubImageProps) => {
  return (
    <SwipperContainer responsive={[4, 4, 4]}>
      {listImage.map((image: any, index) => (
        <SwiperSlide
          key={`sss - ${index}`}
          className={cn(
            "w-24 h-24 hover:border p-1 hover:border-gray-300 cursor-pointer overflow-hidden mt-1",
            current == image.imageUrl ? "border border-gray-300 " : ""
          )}
        >
          <img
            onClick={() => handleChange(image.imageUrl)}
            alt="Anh test 2 "
            src={image.imageUrl}
            className="object-cover cursor-pointer w-full h-[80px]  hover:scale-105 "
          />
        </SwiperSlide>
      ))}
    </SwipperContainer>
  );
};

export default ListSubImage;
