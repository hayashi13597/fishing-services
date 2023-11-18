"use client";
import React, { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";

import "swiper/css/scrollbar";

import { Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface SwipperContainerProps {
  children: React.ReactNode;
  responsive?: any[];
  isShowBtn?: boolean;
}
const SwipperContainer = ({
  children,
  responsive = [2, 3, 4],
  isShowBtn = false,
}: SwipperContainerProps) => {
  const SwiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative">
      <Swiper
        ref={SwiperRef}
        modules={[Autoplay, Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          clickable: true,
        }}
        spaceBetween={4}
        autoplay
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: responsive[0],
          },

          // when window width is >= 640px
          640: {
            slidesPerView: responsive[1],
          },
          1024: {
            slidesPerView: responsive[2],
          },
          1440: {
            slidesPerView: 5,
          },
        }}
        slidesPerView={4}
        onSwiper={(swiper: any) => {
          const idTimeout = setTimeout(() => {
            // Override prevEl & nextEl now that refs are defined
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;

            // Re-init navigation
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
          clearTimeout(idTimeout);
        }}
        className="mySwiper w-full"
      >
        {children}
      </Swiper>
      {isShowBtn && (
        <>
          <button
            ref={prevRef}
            className="button_slider  buttn_slider-absolute left-4"
          >
            <BiChevronLeft />
          </button>
          <button
            ref={nextRef}
            className="button_slider  buttn_slider-absolute  right-4 "
          >
            <BiChevronRight />
          </button>
        </>
      )}
    </section>
  );
};

export default SwipperContainer;
