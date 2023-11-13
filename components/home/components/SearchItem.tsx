import React from "react";
import Link from "next/link";
import Image from "next/image";

const SearchItem = () => {
  return (
    <Link
      href={"ss-sss"}
      className="flex items-center search-item justify-between bg-[#FFFFFF] py-2 px-3 hover:bg-[#fcfbfb]"
    >
      <div>
        <h4 className="text-primary">Cần câu Betonamu</h4>
        <p className="font-medium text-sm">1,300,00đ</p>
      </div>
      <Image
        src="https://product.hstatic.net/1000160337/product/nendoroid_nipako___2__compact.jpg"
        width={50}
        height={60}
        alt={`sanpham`}
        className="object-cover"
      />
    </Link>
  );
};

export default SearchItem;
