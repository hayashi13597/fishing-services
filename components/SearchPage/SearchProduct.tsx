import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShareSquare, FaStar } from "react-icons/fa";
import { formatMoney } from "../../utils";
import { IoEyeSharp } from "react-icons/io5";

const SearchProduct = () => {
  return (
    <div className="group relative">
      <Link href={`/`} className="flex flex-col gap-1">
        <Image
          src={`/assets/can-cau.jpg`}
          alt={`image`}
          height={500}
          width={500}
          className="w-full object-cover rounded-md group-hover:shadow-xl transition-all duration-300"
        />
        <h3 className="text-text text-base font-medium line-clamp-1">
          Cần câu máy RC35 hãng của mỹ
        </h3>
        <p className="flex items-center gap-1 text-sm">
          4.9
          <FaStar className="text-base" />
        </p>
        <p className="font-semibold text-primary flex items-center gap-1">
          <span>{formatMoney(30000 - (30000 * 10) / 100)}</span>
          <span className="text-text/50 text-xs line-through">
            {formatMoney(30000)}
          </span>
          <span className="text-text/50 text-xs">(30% off)</span>
        </p>
      </Link>
      <div
        className="absolute top-2 right-2 bg-white p-2 rounded-full cursor-pointer text-text hover:bg-primary hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
        title="Xem nhanh"
      >
        <IoEyeSharp />
      </div>
      <div
        className="absolute top-12 right-2 bg-white p-2 rounded-full cursor-pointer text-text hover:bg-primary hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
        title="Chia sẽ"
      >
        <FaShareSquare />
      </div>
      <button className="w-full mt-2 px-3 py-1 border-text border-2 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
        Thêm giỏ hàng
      </button>
    </div>
  );
};

export default SearchProduct;
