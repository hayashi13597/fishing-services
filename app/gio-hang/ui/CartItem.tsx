"use client";
import React, { useCallback, useEffect, useState } from "react";
import CartUpdateAmount from "../../../components/cart/cartUpdateAmmount";
import ModalStatus from "../../../components/modal/ModalStatus";
import ToastNotify from "../../../services/toast";
import Image from "next/image";
import { formatMoney } from "../../../utils";
import Link from "next/link";
import { DeleteCart, ICartItem, UpdateAmount } from "../../../redux/cart";
import { useDispatch } from "react-redux";
import { coverSlug } from "react-swisskit";

const CartItem = ({
  id,
  name,
  slug,
  price = 0,
  imageUrl,
  quantity = 1,
}: ICartItem) => {
  const [amount, setAmount] = useState(quantity);
  const dispatch = useDispatch();
  const DeleteCartItem = useCallback(() => {
    setAmount(() => -2);
    dispatch(DeleteCart({ id: id }));
    // ToastNotify("Xóa thành công trong giỏ hàng").success();
  }, []);
  useEffect(() => {
    dispatch(UpdateAmount({ id, quantity: amount }));
  }, [amount]);
  const handleCallbackDelete = (isDelete: boolean) => {
    //xóa sản phẩm giỏ hàng
    if (isDelete) {
      DeleteCartItem();
      ToastNotify("Xóa thành công trong giỏ hàng").success();
    } else {
      setAmount(() => 1);
    }
  };
  // quatity<=1 thì đóng modal và xóa luôn giỏ hàng
  if (amount <= -1) {
    return <></>;
  }
  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      {amount == 0 && <ModalStatus isCallback={handleCallbackDelete} />}
      <Link href={`/${coverSlug(name)}/${slug}`}>
        <Image
          src={imageUrl}
          alt={`product-item/${name}`}
          width={50}
          height={80}
          className="object-cover md:w-16 md:h-1w-16 h-full w-full"
        />
      </Link>

      <div className="sm:ml-4 sm:flex sm:w-full">
        <div className="sm:w-4/5 mt-5 sm:mt-0">
          <Link
            href={`/${coverSlug(name)}/${slug}`}
            className="font-bold text-gray-900 hover:text-primary capitalize"
          >
            {name}
          </Link>
          <p className="mt-1 text-sm text-gray-700 line-clamp-1 ">{name}</p>
        </div>
        <div className="sm:w-1/5 mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-100">
            <CartUpdateAmount quatity={amount} setQuantity={setAmount} />
          </div>
          <div className="w-full flex items-center justify-end md:pr-5 space-x-4">
            <p className="text-base font-semibold">
              {formatMoney(amount * price)}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
              onClick={() => setAmount(0)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
