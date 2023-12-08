import Image from "next/image";
import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { cn } from "react-swisskit";
import NoticeItem from "./NoticeItem";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { INotice } from "../../redux/notices";
interface NoticeContainerProps {
  isOpenNotice: boolean;
  setIsOpenNotice: (isOpenCart: boolean) => void;
  listnotices: INotice[];
}
const NoticeContainer = ({
  isOpenNotice,
  setIsOpenNotice,
  listnotices = [],
}: NoticeContainerProps) => {
  return (
    <>
      {isOpenNotice && (
        <div
          onClick={() => setIsOpenNotice(false)}
          className="bg-black/50 fixed inset-0 z-10"
        ></div>
      )}
      <div
        className={cn(
          "cart__wrapper md:w-[400px] w-full text-text bg-white ",
          isOpenNotice ? "show" : ""
        )}
      >
        <section className="bg-menu py-4 px-2 flex justify-between items-center border-b-[1px]">
          <h2 className="text-lg font-semibold">Thông báo của bạn </h2>
          <button
            onClick={() => setIsOpenNotice(false)}
            className=" text-black text-3xl hover:text-primary "
          >
            <RiCloseFill />
          </button>
        </section>
        <section className="h-[70vh]  overflow-y-auto scroll_y px-2">
          {listnotices.length > 0 ? (
            listnotices.map((notice) => (
              <NoticeItem key={`notice-${notice.id}`} {...notice} />
            ))
          ) : (
            <p className="text-primary text-xl py-2 text-center">
              Chưa có thông báo nào!
            </p>
          )}
        </section>
        {listnotices.length > 4 && (
          <div className="mt-4 flex flex-col items-center">
            <Link
              className="button_send w-3/4"
              onClick={() => setIsOpenNotice(false)}
              href={"/tai-khoan?page=thong-bao"}
            >
              Xem thêm...
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default NoticeContainer;
