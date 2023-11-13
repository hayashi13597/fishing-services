"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewItem = () => {
  const router = useRouter();

  return (
    <div
      className="w-full md:h-[calc(25%-0.5rem)] flex gap-3 bg-[#ffff] cursor-pointer transition-all hover:brightness-95 rounded-lg overflow-hidden"
      onClick={() =>
        router.push("/tin-tuc/Elon-Musk-se-khien-con-nguoi-mat-viec")
      }
    >
      <img
        src={
          "https://i1-sohoa.vnecdn.net/2023/11/04/NTSTAJOORZO5HI4QFGOA5MD7BE-1498-1699041107.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=mjNE-U794V1exeNrgxCyrw"
        }
        alt="new item"
        className="w-1/3 md:w-full h-full object-cover"
      />
      <div className="w-full py-2 pr-2">
        <div className="w-full flex justify-between text-sm opacity-75 mb-1">
          <p>05/11/2023</p>
          <p>10 phút trước</p>
        </div>
        <h3 className="text-sm text-justify md:text-start md:text-base line-clamp-2 font-bold transition-all hover:text-primary tracking-tighter">
          Musk: AI sẽ tạo ra thế giới không có việc làm
        </h3>
      </div>
    </div>
  );
};

export default NewItem;
