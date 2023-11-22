"use client";
import Link from "next/link";
import React from "react";
import { productType } from "../../common.types";
import { FaEye, FaShareSquare } from "react-icons/fa";
import { formatMoney, handleOpenNewWindown } from "../../utils";
import LableProductItem from "./LableProductItem";
import ToastNotify from "../../services/toast";
import { useDispatch } from "react-redux";
import { OpenViewAddToCart, openViewDetail } from "../../redux/product";
import CartServices from "../../services/cart";
import Image from "next/image";

import { AddCart } from "../../redux/cart";
import { IProduct } from "../home/ProductContainer";
const ProductItem: React.FC<{ product: IProduct; isNew?: boolean }> = ({
  product,
  isNew = false,
}) => {
  const { name, price, imageUrl, slug, id, sale_off = 0, Category } = product;
  const dispatch = useDispatch();
  const showModal = () => {
    dispatch(openViewDetail({ productDetail: product }));
  };
  const handleShare = () => {
    handleOpenNewWindown(`/${slug}`, name);
  };
  const AddProductIntoCart = () => {
    dispatch(AddCart({ name, price, imageUrl, slug, id, quantity: 1 }));
    dispatch(OpenViewAddToCart({ name, price, imageUrl, slug }));
  };

  return (
    <div className="bg-white group border rounded-xl flex justify-between flex-col relative">
      <Link
        href={`/${Category.slug}/${slug}`}
        className="w-full flex justify-center items-center rounded-tl-xl rounded-tr-xl overflow-hidden"
      >
        <div
          style={{ width: "100%", height: "300px", position: "relative" }}
          className="!h-[200px] md:!h-[300px]"
        >
          <Image
            className="w-full object-cover"
            layout="fill"
            src={imageUrl}
            alt={name}
          />
        </div>
      </Link>
      <div className="p-3 rounded-bl-xl rounded-br-xl">
        <Link href={`/${Category.slug}/${slug}`} className="hover:text-primary">
          <h3 className="text-base font-medium mb-3 line-clamp-1">{name}</h3>
        </Link>
        <p className="text-primary font-semibold">
          <span>{formatMoney(price)}</span>
          {sale_off ? (
            <span className="text-sm ml-2 text-black opacity-40 line-through">
              {formatMoney(Math.floor((1 + sale_off * 0.01) * price))}
            </span>
          ) : (
            ""
          )}
        </p>
      </div>
      <div className="z-10 border-x border-b rounded-bl-xl rounded-br-xl absolute bottom-0 -left-[1px] -right-[1px] opacity-0 group-hover:opacity-100 group-hover:translate-y-12 transition-all duration-300">
        <div className="bg-white p-2 rounded-bl-xl rounded-br-xl">
          <button
            onClick={AddProductIntoCart}
            className="w-full bg-primary text-white py-2 rounded-full hover:opacity-80"
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
      <div
        className="w-7 h-7 absolute top-4 right-1 md:right-4 border opacity-0 rounded-full flex items-center justify-center cursor-pointer translate-y-5 hover:bg-primary hover:text-white hover:opacity-100 group-hover:translate-y-0 group-hover:opacity-70 transition-all duration-500"
        title="Xem nhanh"
        onClick={showModal}
      >
        <FaEye />
      </div>
      <div
        className="w-7 h-7 absolute top-12 right-1 md:right-4 border opacity-0 rounded-full flex items-center justify-center cursor-pointer translate-y-5 hover:bg-primary hover:text-white hover:opacity-100 group-hover:translate-y-0 group-hover:opacity-70 transition-all duration-500"
        title="Chia sẽ"
        onClick={handleShare}
      >
        <FaShareSquare />
      </div>
      <LableProductItem isNew={isNew} discount={sale_off} />
    </div>
  );
};

export default ProductItem;
