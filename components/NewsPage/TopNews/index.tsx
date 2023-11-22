"use client";
import { useRouter } from "next/navigation";
import React from "react";
import NewItem from "./NewItem";
import { INewItem } from "../../../app/tin-tuc/page";
import { formatDate } from "../../../utils";
import Link from "next/link";
interface TopNewsProps {
  itemHost: INewItem;
  listSubItem: INewItem[];
}
const TopNews = ({ itemHost, listSubItem }: TopNewsProps) => {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row md:gap-5 md:max-h-[500px] mb-10">
      <Link
        className="w-full md:w-3/5 relative cursor-pointer transition-all hover:brightness-90 mb-5 md:mb-0 rounded-lg overflow-hidden"
        href={`/tin-tuc/${itemHost.slug}`}
      >
        <img
          src={itemHost.imageUrl}
          alt="news"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 top-1/2 md:top-2/3 bg_hsla p-3">
          <div className="flex gap-4 opacity-80 mb-1 text-sm md:text-base">
            <p className="text-white capitalize">{itemHost.User.fullname}</p>
            <p className="text-white">{formatDate(itemHost.updatedAt)}</p>
          </div>
          <Link
            href={`/tin-tuc/${itemHost.slug}`}
            className="text-white block text-lg tracking-tighter md:tracking-normal md:text-2xl line-clamp-2 mb-2 transition-all hover:text-primary capitalize"
          >
            {itemHost.title}
          </Link>
          <p className="text-xs text-white line-clamp-2 md:line-clamp-4 opacity-80">
            {itemHost.description}
          </p>
        </div>
      </Link>
      <div className="w-full md:w-2/5 flex flex-col justify-between gap-2">
        {listSubItem.map((newitem) => (
          <NewItem newdetail={newitem} key={`${newitem.slug}`} />
        ))}
      </div>
    </div>
  );
};

export default TopNews;
