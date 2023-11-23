import Image from "next/image";
import React from "react";
import { INotice } from "../../../redux/notices";
import { useRouter } from "next/navigation";
interface NoticeItemProfileProPs {
  notice: INotice;
}
const NoticeItemProfile = ({ notice }: NoticeItemProfileProPs) => {
  const router = useRouter();
  const handleSubmit = () => {
    notice.link && router.push("/" + notice.link);
  };
  return (
    <article onClick={handleSubmit} className="flex gap-4 hover:bg-slate-100">
      <Image
        alt="notice"
        src="/assets/notice.png"
        width={60}
        height={60}
        className="object-cover"
      />
      <div>
        <h6 className="mb-1 font-semibold">{notice.title} </h6>
        <p className="text-sm">{notice.content}</p>
      </div>
    </article>
  );
};

export default NoticeItemProfile;
