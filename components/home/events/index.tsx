"use client";
import React from "react";
import EventBox from "./Event";
import TitleFormat from "../UI/title";
import { TimeDiff, isTimeEnd } from "../../../utils";

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
export interface IEventItem {
  description: string;
  isEvent: boolean;
  imageUrl: string;
  visiable: string;
  views: string;
  timeEvent: number;
  title: string;
  createdAt: string;
  slug: string;
  time_end: string;
  id?: string;
  user_id?: string;
  updatedAt?: string;
  content?: string;
}
const Event = ({ ListEvent }: { ListEvent?: IEventItem[] }) => {
  return (
    <div className="flex flex-col w-full xl:max-w-[2100px] my-4 md:my-8 mx-auto">
      {/* <TitleFormat title="Sự kiện mới nhất" link="/san-pham" /> */}
      <h1 className="text-text/80 text-4xl mb-5">Sự kiện mới nhất</h1>
      <div className="grid gap-4 grid-cols-6 lg:grid-cols-12">
        {ListEvent.map(
          (
            {
              title,
              description,
              timeEvent = 10,
              time_end = 2,
              slug,
              imageUrl,
            },
            index
          ) => {
            return (
              <EventBox
                title={title}
                description={description}
                numberOfDiscountDate={
                  Number(TimeDiff(time_end)) <= 0
                    ? 0
                    : Math.floor(
                        new Date(TimeDiff(ListEvent[0].time_end)).getDate()
                      )
                }
                href={`/tin-tuc/${slug}`}
                imgSrc={bannerContent[index]?.imgSrc}
                imgWidth={980}
                imgHeight={500}
                buttonText={"Xem sự kiện"}
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
