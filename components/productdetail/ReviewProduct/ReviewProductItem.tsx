import Image from "next/image";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { formatDateTime } from "../../../utils";

const starCount = 5; // star của product đc truyền vào từ ReviewProduct
export interface ReviewProductItemProps {
  id: number;
  content: string;
  listImage: "";
  status: false;
  star: 5;
  user_id: 2;
  product_id: 2;
  createdAt: string;
  updatedAt: string;

  User: {
    fullname: string;
    avatar: string;
  };
}
const ReviewProductItem = ({
  item,
  cate,
}: {
  item: ReviewProductItemProps;
  cate: string;
}) => {
  return (
    <div className="flex gap-5">
      <div className="w-10 h-10">
        <Image
          src={item.User.avatar}
          alt="user image"
          width={200}
          height={200}
          className="w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-text text-sm capitalize">{item.User.fullname}</p>
        <div className="flex relative text-primary">
          {[...Array(item.star)].map(() => (
            <FaStar />
          ))}
          {[...Array(5 - item.star)].map(() => (
            <FaRegStar />
          ))}
        </div>
        <p className="text-text/50 text-xs">
          {formatDateTime(item.createdAt)} | Danh mục:{" "}
          <span className="capitalize">{cate}</span>
        </p>
        <p>{item.content}</p>
      </div>
    </div>
  );
};

export default ReviewProductItem;
