"use client";
import { useRouter } from "next/navigation";
import React from "react";

const PopularItem = () => {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer bg-[#ffff] border hover:brightness-95 transition-all rounded-lg overflow-hidden"
      onClick={() =>
        router.push("/tin-tuc/Elon-Musk-se-khien-con-nguoi-mat-viec")
      }
    >
      <img
        src="https://i1-sohoa.vnecdn.net/2023/11/04/NTSTAJOORZO5HI4QFGOA5MD7BE-1498-1699041107.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=mjNE-U794V1exeNrgxCyrw"
        alt="popular news"
      />
      <p className="mt-2 line-clamp-2 mb-2 font-semibold hover:text-primary transition-all px-2 text-justify tracking-tighter">
        Musk: AI sẽ tạo ra thế giới không có việc làm
      </p>
      <p className="line-clamp-3 px-2 text-justify text-sm tracking-tight">
        Elon Musk cho rằng sẽ đến lúc con người không cần việc làm nữa bởi AI có
        thể làm mọi thứ, nhưng điều đó "vừa tốt vừa xấu". Tại cuộc trao đổi với
        Thủ tướng Anh Rishi Sunak, trong khuôn khổ AI Safety Summit 2023 diễn ra
        ngày 1-2/11 ở Buckinghamshire, Musk cho rằng AI có tiềm năng trở thành
        "lực lượng đột phá nhất trong lịch sử". "Chúng ta sẽ có một thứ gì đó,
        lần đầu tiên thông minh hơn cả người thông minh nhất. Thật khó nói chính
        xác là khi nào, nhưng sẽ đến lúc không cần việc làm nữa", Musk nói.
      </p>
      <p className="px-2 tracking-tight opacity-75 text-sm py-2">
        2k lượt đọc - 2 ngày trước
      </p>
    </div>
  );
};

export default PopularItem;
