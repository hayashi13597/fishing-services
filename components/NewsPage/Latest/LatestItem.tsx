"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import { HandleTimeDiff, formatDate } from "../../../utils";
import Link from "next/link";
import { INewItem } from "../../screen/NewScreen";
interface LatestItemProps {
  newItem: INewItem;
}
const LatestItem = ({ newItem }: LatestItemProps) => {
  const router = useRouter();

  return (
    <Link
      href={`/tin-tuc/${newItem.slug}`}
      className="flex justify-between gap-5 border-2 rounded-lg overflow-hidden bg-[#ffff] hover:brightness-95 transition-all"
    >
      <div className="p-3">
        <div className="flex gap-2 items-center mb-2 w-full">
          <Image
            src={newItem.User.avatar}
            alt={newItem.User.fullname}
            width={20}
            height={20}
            className="rounded-full"
          />
          <p className="capitalize text-sm">{newItem.User.fullname}</p>
        </div>
        <h3 className=" mb-2">
          <Link
            className="block text-base md:text-lg font-bold !line-clamp-2 hover:text-primary transition-all"
            href={`/tin-tuc/${newItem.slug}`}
          >
            {newItem.title}
          </Link>
        </h3>
        <p className="line-clamp-2 text-sm mb-2 w-full">
          {newItem.description}
        </p>
        <div className="flex justify-between text-sm opacity-75  w-full">
          <p>{formatDate(newItem.updatedAt)}</p>
          <p>{HandleTimeDiff(newItem.updatedAt)}</p>
        </div>
      </div>
      <Image
        src={newItem.imageUrl}
        alt={newItem.title}
        height={300}
        width={300}
        className="hidden md:block w-1/4 object-cover"
      />
    </Link>
  );
};

export default LatestItem;
