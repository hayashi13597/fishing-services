"use client";
import { useRouter } from "next/navigation";
import React from "react";
import NewItem from "./NewItem";

const TopNews = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row md:gap-5 md:max-h-[500px] mb-10">
      <div
        className="w-full md:w-3/5 relative cursor-pointer transition-all hover:brightness-90 mb-5 md:mb-0 rounded-lg overflow-hidden"
        onClick={() =>
          router.push("/tin-tuc/Elon-Musk-se-khien-con-nguoi-mat-viec")
        }
      >
        <img
          src="https://i1-sohoa.vnecdn.net/2023/11/04/NTSTAJOORZO5HI4QFGOA5MD7BE-1498-1699041107.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=mjNE-U794V1exeNrgxCyrw"
          alt="news"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 top-1/2 md:top-2/3 bg_hsla p-3">
          <div className="flex gap-4 opacity-80 mb-1 text-sm md:text-base">
            <p className="text-white">Elon Musk</p>
            <p className="text-white">04/11/2023</p>
          </div>
          <p className="text-white text-lg tracking-tighter md:tracking-normal md:text-2xl line-clamp-2 mb-2 transition-all hover:text-primary">
            Musk: AI sẽ tạo ra thế giới không có việc làm
          </p>
          <p className="text-xs text-white line-clamp-2 md:line-clamp-4 opacity-80">
            Elon Musk cho rằng sẽ đến lúc con người không cần việc làm nữa bởi
            AI có thể làm mọi thứ, nhưng điều đó "vừa tốt vừa xấu". Tại cuộc
            trao đổi với Thủ tướng Anh Rishi Sunak, trong khuôn khổ AI Safety
            Summit 2023 diễn ra ngày 1-2/11 ở Buckinghamshire, Musk cho rằng AI
            có tiềm năng trở thành "lực lượng đột phá nhất trong lịch sử".
            "Chúng ta sẽ có một thứ gì đó, lần đầu tiên thông minh hơn cả người
            thông minh nhất. Thật khó nói chính xác là khi nào, nhưng sẽ đến lúc
            không cần việc làm nữa", Musk nói.
          </p>
        </div>
      </div>
      <div className="w-full md:w-2/5 flex flex-col justify-between gap-2">
        <NewItem />
        <NewItem />
        <NewItem />
        <NewItem />
      </div>
    </div>
  );
};

export default TopNews;
