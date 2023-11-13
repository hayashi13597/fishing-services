"use client";
import React from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import { structurePageType } from "../../../common.types";
import CartItem from "./../ui/CartItem";
import ModalStatus from "../../../components/modal/ModalStatus";
import { useRouter } from "next/navigation";
import Support from "../../../components/home/Support";
import DidiveSpace from "../../../components/DidiveSpace";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { formatMoney } from "../../../utils";
const structurePage: structurePageType[] = [
  { page: "Giỏ hàng", link: "/gio-hang", last: true },
];

const CartContainer = () => {
  const router = useRouter();
  const listProductCart = useSelector((state: RootState) => state.cart.cart);
  console.log(listProductCart);
  const totalCarts = listProductCart.reduce(
    (total, { price, quantity = 1 }) => (total += price * quantity),
    0
  );
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="pb-8">
          <Breadcrumb structurePage={structurePage} title="Giỏ hàng" />
          <div className="pb-10">
            <div className="grid grid-flow-row md:grid-cols-3 gap-8">
              <div className="rounded-lg md:max-h-[calc(100vh-200px)]  max-h-screen overflow-y-auto scroll_y pr-4 md:col-span-2">
                {listProductCart!.length >= 0 &&
                  listProductCart.map((item) => (
                    <CartItem
                      key={item.id}
                      id={item.id}
                      imageUrl={item.imageUrl}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                      slug={item.slug}
                    />
                  ))}
              </div>
              {/* Sub total */}
              <div className="rounded-lg border bg-white p-6 shadow-md md:col-span-1">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Tạm tính</p>
                  <p className="text-gray-700">{formatMoney(totalCarts)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Phí Ship</p>
                  <p className="text-gray-700">25,000đ</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Tổng</p>
                  <div>
                    <p className="mb-1 text-lg font-bold">
                      {formatMoney(totalCarts + 25000)}
                    </p>
                    <p className="text-sm text-gray-700">Bao gồm VAT</p>
                  </div>
                </div>
                <button
                  className="mt-6 w-full rounded-md bg-primary py-1.5 font-medium text-blue-50 hover:opacity-80"
                  onClick={() => router.push("/thanh-toan")}
                >
                  Thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>
        <DidiveSpace coefficient={2} />
        <Support />
      </div>
    </div>
  );
};

export default CartContainer;
