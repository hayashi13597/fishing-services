import Image from "next/image";
import React from "react";
import { INotice } from "../../../redux/notices";
import { useRouter } from "next/navigation";
import { DOMAIN_HOST } from "../../../utils";
import { cn } from "react-swisskit";
interface NoticeItemProfileProPs {
  notice: INotice;
}
const NoticeItemProfile = ({ notice }: NoticeItemProfileProPs) => {
  const router = useRouter();
  const handleSubmit = () => {
    notice.link && router.push(DOMAIN_HOST + "/" + notice.link);
  };
  return (
    <div
      onClick={handleSubmit}
      className="flex gap-4 hover:bg-slate-100 items-center"
    >
      <div className="w-1/12 p-2">
        <Image
          alt="notice"
          src="/assets/notice.png"
          width={60}
          height={60}
          className="object-contain"
        />
      </div>
      <div className="w-11/12">
        <h6
          className={cn(
            "mb-1 font-semibold",
            notice.link ? "hover:text-primary" : ""
          )}
        >
          {notice.title}{" "}
        </h6>
        <p className="text-sm line-clamp-1">{notice.content}</p>
      </div>
    </div>
  );
};

export default NoticeItemProfile;
