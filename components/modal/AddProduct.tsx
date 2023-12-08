"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import "./modal.scss";
import { RiCloseFill } from "react-icons/ri";
import { cn } from "react-swisskit";
import { formatMoney } from "../../utils";
import { useDispatch } from "react-redux";
import { closeViewAddToCart } from "../../redux/product";

interface ModalAddProductProps {
  product: {
    imageUrl: string;
    name: string;
    price: number;
    slug: string;
  };
}
const ModalAddProduct = ({
  product: { imageUrl = "", name = "", price = 0, slug = "" },
}: ModalAddProductProps) => {
  const dispatch = useDispatch();
  const setIsOpenModal = () => {
    dispatch(closeViewAddToCart());
  };
  return (
    <div
      onClick={setIsOpenModal}
      className={cn(
        "fixed z-50 inset-0 bg-black/50 flex justify-center items-center"
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="md:w-[450px] w-full px-8  py-4 bg-white rounded-xl relative"
      >
        <button
          onClick={setIsOpenModal}
          className=" text-black text-3xl hover:text-primary absolute top-2 right-2"
        >
          <RiCloseFill />
        </button>
        <div className="flex gap-4">
          <div className="p-2">
            <Image
              alt={"cart-2"}
              src={imageUrl}
              width={150}
              height={100}
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium">Thêm vào giỏ hàng thành công.</p>
            <h6>
              <Link
                className="hover:text-primary block font-semibold py-2 capitalize"
                href={`/${slug}`}
              >
                {name}
              </Link>
            </h6>
            <p>{formatMoney(price)}</p>
          </div>
        </div>
        <div className="md:px-8 px-2 mt-4">
          <Link className="button_send" href={"/gio-hang"}>
            Xem giỏ hàng
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalAddProduct;
