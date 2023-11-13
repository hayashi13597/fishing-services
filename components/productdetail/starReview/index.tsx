import React from "react";
import { BiSolidStar } from "react-icons/bi";
import "./star.style.scss";
interface StarReviewProps {
  percent: number;
  totalReview: number;
  average: number;
}
const StarReview = ({
  percent = 0,
  totalReview = 0,
  average = 5,
}: StarReviewProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1 items-baseline">
        <span className="text-lg font-medium">{average}</span>
        <BiSolidStar className="text-xl" />
      </div>
      <div className="sm:w-[250px] w-[120px] bg-[#EEEEEE]">
        <div
          style={{ width: `${percent}%`, height: 12 }}
          className="bg-primary rounded-full"
        ></div>
      </div>
      <div className="text-base text-second">
        <span className="font-semibold ">{percent}%</span> | {totalReview}{" "}
        <span>đánh giá</span>
      </div>
    </div>
  );
};

export default StarReview;
