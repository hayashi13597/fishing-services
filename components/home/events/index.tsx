"use client";
import React from "react";
import EventBox from "./Event";
import TitleFormat from "../UI/title";

export const bannerContent = [
  {
    title: "Cần thủ tương lai",
    description:
      "Sự kiện diễn ra trong 30 ngày đếm  ngược, cơ cấu giải thường x2 cá theo hạng nặng ",
    buttonText: "Xem sự kiện",
    imgSrc:
      "https://media.istockphoto.com/id/897957846/photo/fishing-tackle-background-fishing-design-elements.jpg?s=612x612&w=0&k=20&c=a5aHYNpF69GlYWpUVQTiKBH6Yjui4kIuKJiS1j5Xirk=",
    imgWidth: 980,
    imgHeight: 500,
    numberOfDiscountDate: 30,
    href: "/san-pham",
  },
  {
    title: "Treo thưởng ô tô Vios",
    description:
      "Hay tham gia giải thưởng quý 4 này nè, bạn có thể nhận tiền mặt hay con xe Vios",
    buttonText: "Xem sự kiện",
    imgSrc:
      "https://png.pngtree.com/thumb_back/fw800/background/20230611/pngtree-man-fishing-in-water-during-sunset-image_2950016.jpg",
    imgWidth: 980,
    imgHeight: 500,
    numberOfDiscountDate: 0,
    href: "/san-pham",
  },
];
const Event = () => {
  return (
    <div className="flex items-center flex-col w-full xl:max-w-[2100px] my-4 md:my-8 mx-auto">
      <TitleFormat title="Sự kiện mới nhất" link="/san-pham" />
      <div className="grid gap-4 grid-cols-6 lg:grid-cols-12">
        {bannerContent.map(
          ({
            title,
            description,
            numberOfDiscountDate,
            href,
            imgHeight,
            imgSrc,
            imgWidth,
            buttonText,
          }) => {
            return (
              <EventBox
                title={title}
                description={description}
                numberOfDiscountDate={numberOfDiscountDate}
                href={href}
                imgSrc={imgSrc}
                imgWidth={imgWidth}
                imgHeight={imgHeight}
                buttonText={buttonText}
                key={title}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Event;
