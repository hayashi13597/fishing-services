import React, { FC } from "react";
import Image from "next/image";
import { cn } from "react-swisskit";
interface AboutItemProps {
  isRight?: boolean;
  item: {
    title: string;
    des: string;
    image: string;
  };
}
const AboutItem: FC<AboutItemProps> = ({ isRight, item }) => {
  return (
    <div className={cn("flex gap-4", isRight ? "flex-row-reverse" : "")}>
      <div className={cn(isRight ? "text-left" : "text-right")}>
        <h4 className="font-semibold mt-2 text-xl">{item.title}</h4>
        <p className="text-sm mt-2">{item.des}</p>
      </div>
      <div>
        <div className="bg-gray-300 rounded-full  w-[100px] h-[100px] flex justify-center items-center">
          <Image
            alt="appreciate-1"
            src={item.image}
            width={60}
            height={60}
            className="object-cover w-10 h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutItem;
