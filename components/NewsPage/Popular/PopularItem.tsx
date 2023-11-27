"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { HandleTimeDiff, formatQuantity } from "../../../utils";

import Link from "next/link";
import { INewItem } from "../../screen/NewScreen";
export interface IPopularItemProps extends INewItem {}
const PopularItem = (props: IPopularItemProps) => {
  return (
    <Link
      href={`/tin-tuc/${props.slug}`}
      className="cursor-pointer bg-[#ffff] border hover:brightness-95 transition-all rounded-lg overflow-hidden"
    >
      <img
        loading="lazy"
        height={300}
        className="object-cover"
        src={props.imageUrl}
        alt={props.title}
      />
      <Link
        href={`/tin-tuc/${props.slug}`}
        className="mt-2 line-clamp-1  block mb-2 font-semibold hover:text-primary transition-all px-2 text-justify tracking-tighter capitalize h-[20px]"
      >
        {props.title}
      </Link>
      <p className="line-clamp-3 px-2 text-justify text-sm tracking-tight ]">
        {props.description}
      </p>
      <p className="px-2 tracking-tight opacity-75 text-sm py-2">
        {formatQuantity(props.views)} lượt đọc -
        {HandleTimeDiff(props.updatedAt)}
      </p>
    </Link>
  );
};

export default PopularItem;
