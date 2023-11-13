import Image from "next/image";
import Link from "next/link";
import React from "react";

const MostViewItem = () => {
  return (
    <Link href={"#"} className="flex gap-2 py-4 group">
      <Image
        width={110}
        height={110}
        src={
          "https://i1-sohoa.vnecdn.net/2023/11/04/NTSTAJOORZO5HI4QFGOA5MD7BE-1498-1699041107.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=mjNE-U794V1exeNrgxCyrw"
        }
        alt="Elon Musk"
      />
      <div className="flex flex-col justify-center">
        <h4 className="line-clamp-2 font-semibold tracking-tight group-hover:text-primary transition-all">
          Musk: AI sẽ tạo ra thế giới không có việc làm
        </h4>
        <p className="text-xs opacity-80 mt-1">06/11/2023</p>
      </div>
    </Link>
  );
};

export default MostViewItem;
