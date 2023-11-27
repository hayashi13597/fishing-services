import Image from "next/image";
import React from "react";
import { INotice } from "../../redux/notices";
import Link from "next/link";

interface NoticeItem extends INotice {}
const NoticeItem = (props: NoticeItem) => {
  return (
    <div className="flex gap-3 items-center py-2">
      <Image
        width={32}
        height={32}
        alt="Notice"
        src="/assets/notice.png"
        className="object-cover"
      />
      <div>
        <h6 className="font-bold ">
          {props.link ? (
            <Link
              className="block cursor-pointer hover:text-primary"
              href={`/${props.link}`}
            >
              {props.title}
            </Link>
          ) : (
            props.title
          )}
        </h6>
        <p className="text-sm line-clamp-3 min-h-[48px]">{props.content}</p>
      </div>
    </div>
  );
};

export default NoticeItem;
