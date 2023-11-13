"use client";
import React from "react";
import Image from "next/image";
import { Supports } from "./service";
import "./service.scss";
import SwipperContainer from "../swipper";
import { SwiperSlide } from "swiper/react";
import DidiveSpace from "../DidiveSpace";
const Support = () => {
  return (
    <div>
      <SwipperContainer responsive={[2, 3, 4]}>
        {Supports.map((item, index) => (
          <SwiperSlide
            key={`suports-${index}`}
            className="text-center support_container bg-[#EFEFEF] rounded-md pt-8"
          >
            <figure className="flex justify-center items-center  flex-col ">
              <Image
                src={item.img}
                className="support_container-image w-20 h-16 object-cover"
                width={90}
                height={60}
                alt={item.title}
              />
              <h3 className="font-bold mt-2 support_container-title text-sm min-h-[32px]">
                {item.title}
              </h3>
              <p className="text-xs font-normal h-[60px]">{item.des}</p>
            </figure>
          </SwiperSlide>
        ))}
      </SwipperContainer>
    </div>
  );
};

export default Support;
