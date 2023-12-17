"use client";
import React, { useRef } from "react";
import { Carousel } from "antd";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import "./custom.css";
import { listBanners } from "./service";

const contentStyle: React.CSSProperties = {
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};

const Banner = () => {
  const carouselRef = useRef(null);
  return (
    <div className="relative">
      <Carousel ref={carouselRef} speed={2000} autoplay>
        {listBanners.map((item, index) => (
          <div key={`banner-${index}`}>
            <h2 style={contentStyle}>
              <img
                src={item.link}
                alt="banner"
                className="w-full h-[300px] md:h-[650px] object-cover"
              />
            </h2>
          </div>
        ))}
      </Carousel>
      <button
        onClick={() => {
          carouselRef.current && carouselRef.current.prev();
        }}
        className="button_slider left-4"
      >
        <BiChevronLeft className="text-3xl" />
      </button>
      <button
        onClick={() => {
          carouselRef.current && carouselRef.current.next();
        }}
        className="button_slider right-4 "
      >
        <BiChevronRight className="text-3xl" />
      </button>
    </div>
  );
};

export default Banner;
