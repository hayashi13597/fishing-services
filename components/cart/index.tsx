"use client";
import React from "react";
import "./cart.scss";
import { RiCloseFill } from "react-icons/ri";
import CartEmpty from "./cartEmpty";
import CartItem from "./cartItem";
import { cn } from "react-swisskit";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { formatMoney } from "../../utils";
interface CartProps {
  isOpenCart: boolean;
  setIsOpenCart: (isOpenCart: boolean) => void;
}

const Cart = ({ setIsOpenCart, isOpenCart }: CartProps) => {
  const listProductCart = useSelector((state: RootState) => state.cart.cart);
  const handleClsoeCart = () => {
    setIsOpenCart(false);
  };

  return (
    <>
      {isOpenCart && (
        <div
          onClick={handleClsoeCart}
          className="bg-black/50 fixed inset-0 z-20"
        ></div>
      )}
      <div
        className={cn(
          "cart__wrapper md:w-[400px] w-full text-text bg-white",
          isOpenCart ? "show" : ""
        )}
      >
        <section className="bg-menu py-4 px-2 flex justify-between items-center border-b-[1px]">
          <h2 className="text-lg font-semibold">Giỏ hàng của bạn </h2>
          <button
            onClick={() => setIsOpenCart(false)}
            className=" text-black text-3xl hover:text-primary"
          >
            <RiCloseFill />
          </button>
        </section>
        <section className="h-[60vh]  overflow-y-auto scroll_y px-2">
          {listProductCart.length > 0 ? (
            listProductCart.map((item) => (
              <CartItem
                key={`cart-item-${item.id}`}
                id={item.id}
                imageUrl={item.imageUrl}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                slug={item.slug}
              />
            ))
          ) : (
            <CartEmpty />
          )}
        </section>
        <div>
          <div className="flex justify-between mt-2 px-2">
            <span className="font-semibold">Tổng phụ:</span>
            <span className="font-semibold">
              {formatMoney(
                listProductCart.reduce(
                  (total, item) => (total += item.price * item.quantity),
                  0
                )
              )}
            </span>
          </div>
          <div className="mt-4 flex flex-col items-center">
            <Link
              onClick={handleClsoeCart}
              className="button_send w-3/4 bg-white text-black border-2 border-primary hover:bg-primary/80 hover:text-white mb-4"
              href={"/gio-hang"}
            >
              Xem giỏ hàng
            </Link>
            <Link
              onClick={handleClsoeCart}
              className="button_send w-3/4"
              href={"/thanh-toan"}
            >
              Thanh toán
            </Link>
          </div>
        </div>
        {/* <CartEmpty /> */}
      </div>
    </>
  );
};

export default Cart;
