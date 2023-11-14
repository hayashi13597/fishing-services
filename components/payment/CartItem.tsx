"use client";
import Image from "next/image";
import React from "react";
import { formatMoney } from "../../utils";
import { ICartItem } from "../../redux/cart";

const CartItem = (props: ICartItem) => {
  return (
    <div className="flex justify-between items-center gap-3 md:gap-14 mb-5">
      <div className="flex gap-3 items-center">
        <Image width={60} height={60} src={props.imageUrl} alt="item" />
        <p className="line-clamp-2 md:line-clamp-none">{props.name}</p>
      </div>
      <p className="min-w-[120px] text-right">
        {formatMoney(props.price)}{" "}
        <sub className="font-medium">x {props.quantity}</sub>
      </p>
    </div>
  );
};

export default CartItem;
