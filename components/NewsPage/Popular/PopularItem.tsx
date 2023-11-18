"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { HandleTimeDiff, formatQuantity } from "../../../utils";
export interface IPopularItemProps {
  slug: string;
  description: string;
  views: number;
  content: string;
  id: string;
  title: string;
  imageUrl: string;
  isEvent: boolean;
  timeEvent: number;
  createdAt: string;
  updatedAt: string;
}
const PopularItem = (props: IPopularItemProps) => {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer bg-[#ffff] border hover:brightness-95 transition-all rounded-lg overflow-hidden"
      onClick={() =>
        router.push("/tin-tuc/Elon-Musk-se-khien-con-nguoi-mat-viec")
      }
    >
      <img src={props.imageUrl} alt="popular news" />
      <p className="mt-2 line-clamp-2 mb-2 font-semibold hover:text-primary transition-all px-2 text-justify tracking-tighter">
        {props.title}
      </p>
      <p className="line-clamp-3 px-2 text-justify text-sm tracking-tight">
        {props.description}
      </p>
      <p className="px-2 tracking-tight opacity-75 text-sm py-2">
        {formatQuantity(props.views)} lượt đọc -
        {HandleTimeDiff(props.updatedAt)}
      </p>
    </div>
  );
};

export default PopularItem;
