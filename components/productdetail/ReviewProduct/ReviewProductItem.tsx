import Image from "next/image";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const starCount = 5; // star của product đc truyền vào từ ReviewProduct

const ReviewProductItem = () => {
  return (
    <div className="flex gap-5">
      <div className="w-10 h-10">
        <Image
          src={`/assets/avatar.png`}
          alt="user image"
          width={200}
          height={200}
          className="w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-text text-sm">Hồ Phúc Lâm</p>
        <div className="flex relative text-primary">
          {[...Array(starCount)].map((star) => (
            <FaStar />
          ))}
          {[...Array(5 - starCount)].map((star) => (
            <FaRegStar />
          ))}
        </div>
        <p className="text-text/50 text-xs">28-11-2023 | Danh mục: Cần câu</p>
        <p>
          Giao hàng nhanh và đóng gói rất cẩn thận và chắc chắn. Mình thấy mua
          đi mn tốt lắm á giá cũng hời
        </p>
      </div>
    </div>
  );
};

export default ReviewProductItem;
