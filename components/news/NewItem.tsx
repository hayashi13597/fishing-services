import React from "react";
import Image from "next/image";
import { BsCalendar3 } from "react-icons/bs";
const NewItem = () => {
  return (
    <div className="flex gap-4 pt-2 items-center">
      <Image
        src="http://duyfishing.com/thumbs/239x164x1/upload/news/9ofiq9-2924.jpg"
        alt="Cần câu"
        width={200}
        height={150}
        className="object-cover lg:w-52 lg:h-[150px] w-28 h-[120px]"
      />
      <div>
        <h2 className="line-clamp-2 font-bold  text-base">
          5 KINH NGHIỆM LỰA CHỌN CẦN CÂU ĐƠN PHÙ HỢP
        </h2>
        <p className="indent-1  lg:line-clamp-3 line-clamp-2 mt-2  text-sm">
          Yếu tố độ dài của cần câu đơn rất quan trọng. Chúng ta không thể chọn
          1 cây cần 2.7m khi mà tầm với đến vị trí 4.5m, 5.5m, 7.2m… Hoặc chúng
          ta không thể chọn cần câu đơn dài 3.6m khi mức nước lên đến Yếu tố độ
          dài của cần câu đơn rất quan trọng. Chúng ta không thể chọn 1 cây cần
        </p>
        <p className="flex gap-2 items-center mt-1 font-medium">
          <BsCalendar3 className="text-primary" />
          <span className="text-sm"> 20/03/2023</span>
        </p>
      </div>
    </div>
  );
};

export default NewItem;
