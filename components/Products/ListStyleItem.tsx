import Link from "next/link";
import React from "react";
import { FaEye, FaRegHeart } from "react-icons/fa";

import { formatMoney } from "../../utils";
import { IProduct } from "../home/ProductContainer";
import { cn } from "react-swisskit";

const ListStyleItem: React.FC<{ product: IProduct }> = ({ product }) => {
  const { name, price, description, imageUrl, sale_off } = product;

  return (
    <div className="w-full border rounded-xl p-5 flex mb-5 bg-white group">
      <Link className="w-52 h-5w-52 relative" href="#">
        <img className="w-full h-full object-cover" src={imageUrl} alt={name} />
        <div
          className="w-7 h-7 absolute top-4 right-4 border opacity-0 rounded-full flex items-center justify-center cursor-pointer translate-y-5 hover:bg-primary hover:text-white hover:opacity-100 group-hover:translate-y-0 group-hover:opacity-70 transition-all duration-500"
          title="Xem nhanh"
        >
          <FaEye />
        </div>
        <div className="absolute top-4 left-4 flex gap-2">
          <div className="text-xs bg-green-500 py-1 px-2 font-bold text-white rounded-sm">
            New
          </div>
          <div
            className={cn(
              "text-xs bg-blue-500 py-1 px-2 font-bold text-white rounded-sm",
              sale_off ? "" : "hidden"
            )}
          >
            -{sale_off}%
          </div>
        </div>
      </Link>
      <div className="w-2/3 flex flex-col px-5 py-3 flex-grow">
        <div className="mb-5 flex flex-col gap-1">
          <Link
            href={`/${product.Category.slug}/${product.slug}`}
            className="font-medium hover:text-primary text-base mb-2"
          >
            {name}
          </Link>
          <p className="text-sm line-clamp-2">{description}</p>
        </div>
        <Link
          href={`/${product.Category.slug}`}
          className="hover:text-primary text-sm"
        >
          Xem thêm
        </Link>
      </div>
      <div className="w-1/5 border-l-2 px-5 py-3 flex flex-col justify-center gap-3">
        <p>Lượt bán: {product.sales || 0}</p>
        <p className="text-primary font-semibold">{formatMoney(price)}</p>
        <button className="bg-primary rounded-full text-white py-2 hover:opacity-80">
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};

export default ListStyleItem;
