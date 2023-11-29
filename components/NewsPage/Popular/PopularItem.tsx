"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { HandleTimeDiff, formatQuantity } from "../../../utils";

import Link from "next/link";
import { INewItem } from "../../screen/NewScreen";
import Image from "next/image";
export interface IPopularItemProps extends INewItem {}
const PopularItem = (props: IPopularItemProps) => {
  return (
    <div className="cursor-pointer bg-[#ffff] border hover:brightness-95 transition-all rounded-lg overflow-hidden flex flex-col justify-between">
      <Image
        src={props.imageUrl}
        alt={props.title}
        height={500}
        width={500}
        className="w-full h-1/2 object-cover"
      />
      <Link
        href={`/tin-tuc/${props.slug}`}
        className="mt-2 block mb-2 font-semibold hover:text-primary transition-all px-2 text-justify tracking-tighter !line-clamp-2"
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
    </div>
  );
};

export default PopularItem;
