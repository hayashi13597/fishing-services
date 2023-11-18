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
        <SwiperSlide key={`sss - ${index}`}>
          <div
            className={cn(
              "w-20 h-20 hover:border p-1 hover:border-gray-300 cursor-pointer",
              current == image.imageUrl ? "border border-gray-300 " : ""
            )}
          >
            <img
              onClick={() => handleChange(image.imageUrl)}
              alt="Anh test 2 "
              width={80}
              height={80}
              src={image.imageUrl}
              className="object-contain  cursor-pointer "
            />
          </div>
        </SwiperSlide>
      ))}
    </SwipperContainer>
  );
};

export default ListSubImage;
