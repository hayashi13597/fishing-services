"use client";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import ShareSocial from "../../ShareSocial";
import { useRouter } from "next/navigation";

import { formatDateTime } from "../../../utils";
import { INewItem } from "../../screen/NewScreen";

interface NewContentPros {
  newDetail: INewItem;
}
const NewContent = ({ newDetail }: NewContentPros) => {
  const router = useRouter();
  return (
    <div className="w-full lg:w-3/4 border-b-2 lg:border-none">
      <div className="flex justify-between opacity-75">
        <p>{newDetail.isEvent ? "Sự kiện" : "Tin tức"}</p>
        <p>{formatDateTime(newDetail.updatedAt)}</p>
      </div>
      <h1 className="text-center font-bold text-primary my-5 ">
        <span className="lg:text-4xl text-3xl block text-center capitalize">
          {newDetail.title}
        </span>
      </h1>
      <div
        className="new-container"
        dangerouslySetInnerHTML={{ __html: newDetail?.content || "" }}
      ></div>

      <p className="font-bold text-right capitalize">
        {newDetail.User.fullname}
      </p>
      <div className="flex justify-between mb-5">
        <div className="flex items-center">
          <button
            className="py-2 px-4 bg-primary rounded-lg text-white transition-all hover:opacity-80 flex items-center gap-1"
            onClick={() => router.back()}
          >
            <BiArrowBack /> Trở lại
          </button>
        </div>
        <ShareSocial link={`tin-tuc/${newDetail.slug}`} />
      </div>
    </div>
  );
};

export default NewContent;
