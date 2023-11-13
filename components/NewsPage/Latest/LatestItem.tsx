"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const LatestItem = () => {
  const router = useRouter();

  return (
    <div
      className="flex justify-between border-2 rounded-lg overflow-hidden bg-[#ffff] gap-5 cursor-pointer hover:brightness-95 transition-all"
      onClick={() =>
        router.push("/tin-tuc/Elon-Musk-se-khien-con-nguoi-mat-viec")
      }
    >
      <div className="p-3">
        <div className="flex gap-2 items-center mb-2">
          <Image
            src="/assets/user-avt.png"
            alt="user avatar"
            width={30}
            height={30}
            className="rounded-full"
          />
          <p>Admin</p>
        </div>
        <h3 className="text-base md:text-xl font-bold hover:text-primary transition-all mb-2">
          Musk: AI sẽ tạo ra thế giới không có việc làm
        </h3>
        <p className="line-clamp-2 text-sm mb-2">
          Elon Musk cho rằng sẽ đến lúc con người không cần việc làm nữa bởi AI
          có thể làm mọi thứ, nhưng điều đó "vừa tốt vừa xấu". Tại cuộc trao đổi
          với Thủ tướng Anh Rishi Sunak, trong khuôn khổ AI Safety Summit 2023
          diễn ra ngày 1-2/11 ở Buckinghamshire, Musk cho rằng AI có tiềm năng
          trở thành "lực lượng đột phá nhất trong lịch sử". "Chúng ta sẽ có một
          thứ gì đó, lần đầu tiên thông minh hơn cả người thông minh nhất. Thật
          khó nói chính xác là khi nào, nhưng sẽ đến lúc không cần việc làm
          nữa", Musk nói.
        </p>
        <div className="flex justify-between text-sm opacity-75 ">
          <p>05/11/2023</p>
          <p>10 phút trước</p>
        </div>
      </div>
      <img
        src="https://i1-sohoa.vnecdn.net/2023/11/04/NTSTAJOORZO5HI4QFGOA5MD7BE-1498-1699041107.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=mjNE-U794V1exeNrgxCyrw"
        alt="latest"
        className="hidden md:block w-1/4 object-cover"
      />
    </div>
  );
};

export default LatestItem;
