import Image from "next/image";
import Link from "next/link";
import React from "react";
import { INewItem } from "../../../app/tin-tuc/page";
import { formatDate } from "../../../utils";
interface MostViewPros {
  newDetail: INewItem;
}
const MostViewItem = ({ newDetail }: MostViewPros) => {
  return (
    <Link href={`/tin-tuc/${newDetail.slug}`} className="flex gap-2 py-4 group">
      <Image
        width={110}
        height={110}
        src={newDetail.imageUrl}
        alt={newDetail.title}
      />
      <div className="flex flex-col justify-center">
        <h4 className="line-clamp-2 font-semibold tracking-tight group-hover:text-primary transition-all capitalize">
          {newDetail.title}
        </h4>
        <p className="text-xs opacity-80 mt-1">
          {formatDate(newDetail.updatedAt)}
        </p>
      </div>
    </Link>
  );
};

export default MostViewItem;
