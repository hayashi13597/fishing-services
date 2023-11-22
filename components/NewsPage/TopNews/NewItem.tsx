"use client";
import React from "react";
import { INewItem } from "../../../app/tin-tuc/page";
import { HandleTimeDiff, formatDate } from "../../../utils";
import Link from "next/link";
interface NewItemPros {
  newdetail: INewItem;
}
const NewItem = ({ newdetail }: NewItemPros) => {
  return (
    <Link
      className="w-full  md:h-[calc(25%-0.5rem)] flex gap-3 bg-[#ffff] cursor-pointer transition-all hover:brightness-95 rounded-lg overflow-hidden"
      href={`/tin-tuc/${newdetail.slug}`}
    >
      <img
        src={newdetail.imageUrl}
        alt="new item"
        className="w-1/3 md:w-full h-full object-cover"
      />
      <div className="w-full py-2 pr-2">
        <div className="w-full flex justify-between text-sm opacity-75 mb-1">
          <p>{formatDate(newdetail.updatedAt)}</p>
          <p>{HandleTimeDiff(newdetail.updatedAt)}</p>
        </div>
        <Link
          href={`/tin-tuc/${newdetail.slug}`}
          className="text-sm block  text-justify md:text-start md:text-base line-clamp-2 font-bold transition-all hover:text-primary tracking-tighter capitalize"
        >
          {newdetail.title}
        </Link>
      </div>
    </Link>
  );
};

export default NewItem;
