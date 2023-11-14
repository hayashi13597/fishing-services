"use client";
import React, { useState } from "react";
import CartItem from "./CartItem";
import InputFormPayment from "./InputFormPayment";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { formatMoney } from "../../utils";
import { UpdateDiscount } from "../../redux/cart";
interface TotalComponentProps {
  shipment: number;
}
const TotalComponent = ({ shipment }: TotalComponentProps) => {
  const listItem = useSelector((state: RootState) => state.cart.cart);
  const [discount, setDiscount] = useState("");
  const dispatch = useDispatch();

  const total = listItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleUseDiscount = () => {
    dispatch(UpdateDiscount(discount));
  };
  return (
    <div className="w-full order-1 md:w-1/2 md:order-2 md:border-l-2 md:px-10">
      <div className="border-b-2">
        {listItem.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <div className="flex items-center gap-5 mt-5 border-b-2">
        <InputFormPayment
          id="discount"
          label="Mã giảm giá"
          type="text"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
        <button
          onClick={handleUseDiscount}
          className="w-2/5 md:w-1/5 p-4 bg-primary pointer-events-auto text-sm text-white rounded-lg mb-5 transition-all hover:opacity-70"
        >
          Sử dụng
        </button>
      </div>
      <div className="flex flex-col gap-2 py-5 opacity-70 border-b-2">
        <div className="w-full flex justify-between items-center">
          <p>Tạm tính</p>
          <p> {formatMoney(total)}</p>
        </div>
        <div className="w-full flex justify-between items-center">
          <p>Phí vận chuyển</p>
          <p> {formatMoney(shipment)}</p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center py-5 border-b-2 md:border-0 text-text">
        <p className="font-medium">Tổng cộng</p>
        <p className="text-2xl">
          <span className="mr-3 text-base opacity-70">VND</span>
          {formatMoney(total + shipment)}
        </p>
      </div>
    </div>
  );
};

export default TotalComponent;
