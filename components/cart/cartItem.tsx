"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "react-swisskit";
import { RiCloseFill } from "react-icons/ri";

import CartUpdateAmount from "./cartUpdateAmmount";
import { DeleteCart, ICartItem, UpdateAmount } from "../../redux/cart";
import { formatMoney } from "../../utils";
import ToastNotify from "../../services/toast";
import { useDispatch } from "react-redux";
import ModalStatus from "../modal/ModalStatus";

const CartItem = ({
  id = "",
  name = "",
  slug = "",
  price = 0,
  imageUrl = "",
  quantity = 1,
}: ICartItem) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(quantity);
  const [isOpenModalStatus, setIsOpenModalStatus] = useState(false);
  useLayoutEffect(() => {
    if (amount <= 0 && !isOpenModalStatus) {
      setIsOpenModalStatus(() => true);
    } else {
      dispatch(UpdateAmount({ id, quantity: amount }));
    }
  }, [amount, isOpenModalStatus]);

  const handleCallbackAccept = (isChose: boolean) => {
    if (isChose) {
      dispatch(DeleteCart({ id }));
      ToastNotify("Xóa thành công từ giỏ hàng");
    } else {
      setAmount(() => 1);
      dispatch(UpdateAmount({ id, quantity: 1 }));
    }
    setIsOpenModalStatus(() => false);
  };

  return (
    <article className={cn("flex gap-4  py-2")}>
      {isOpenModalStatus && (
        <ModalStatus
          title="Bạn có muốn xóa không?"
          isCallback={handleCallbackAccept}
        />
      )}
      <figure>
        <Link href={`/${slug}`} className="block">
          <Image
            width={90}
            height={90}
            alt={`${name}-${id}`}
            className="object-cover min-h-[90px]"
            src={imageUrl}
          />
        </Link>
      </figure>
      <div className="flex flex-col justify-between">
        <h3>
          <Link
            className="hover:text-primary font-medium line-clamp-1  capitalize max-w-[250px]"
            href={`/${slug}`}
          >
            {name}
          </Link>
        </h3>
        <section className="flex gap-1 items-center">
          <div className="flex gap-2 items-center">
            <CartUpdateAmount
              quatity={amount <= 0 ? 1 : amount}
              setQuantity={setAmount}
            />
          </div>
          <div className="flex gap-1 items-end pl-2">
            <span className="text-primary text-sm font-medium flex items-baseline">
              <sub>
                <RiCloseFill />
              </sub>
              {formatMoney(price)}
            </span>
          </div>
        </section>
      </div>
    </article>
  );
};

export default CartItem;
