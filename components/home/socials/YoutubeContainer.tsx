"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import YoutubeItem from "../../news/YoutubeItem";
import HeaderTitle from "../../HeaderTitle";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { listVideo } from "../../../constants";
import SwipperContainer from "../../swipper";

const YoutubeContainer = () => {
  const [videoIdCurrent, setVideoIdCurrent] = useState("9syCuc93OV0");
  return (
    <section>
      <HeaderTitle title="Video Thực tế" />

      <div>
        <YoutubeItem videoId={videoIdCurrent} />
        <div className="my-1">
          <SwipperContainer>
            {listVideo.map((item) => (
              <SwiperSlide
                onDoubleClick={() => setVideoIdCurrent(item.videoId)}
                key={item.videoId}
                className="h-24"
              >
                <Image
                  src={item.img}
                  alt="Hồ câu"
                  width={500}
                  height={500}
                  className="object-cover w-full h-auto cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </SwipperContainer>
        </div>
      </div>
    </section>
  );
};

export default YoutubeContainer;
