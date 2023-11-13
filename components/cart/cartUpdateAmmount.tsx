"use client";
import React, { useState } from "react";

import { BsDash, BsPlusLg } from "react-icons/bs";
import { isNumeric } from "../../utils";

import { BiTrash } from "react-icons/bi";
enum TQuantity {
  "INCREASE" = "INCREASE",
  "DECREASE" = "DECREASE",
  "CHANGE" = "CHANGE",
}
type TQuantityKey = keyof typeof TQuantity;
interface ICartUpdateAmountProps {
  quatity: number;
  setQuantity: any;
  isHide?: boolean;
}
const CartUpdateAmount = ({
  quatity,
  setQuantity,
  isHide = true,
}: ICartUpdateAmountProps) => {
  const handleUpdateQuantity = (value, typeQuatity: TQuantityKey) => {
    if (typeQuatity != TQuantity.CHANGE) {
      setQuantity((prev) => {
        if (prev + value > 10) {
          return 10;
        } else if (!isHide && prev + value <= 0) {
          return 1;
        }
        return prev + value;
      });
    } else {
      setQuantity(() => value);
    }
  };
  return (
    <div className="w-full flex gap-2 items-center justify-end">
      <div className="relative">
        <button
          onClick={() => handleUpdateQuantity(-1, TQuantity.DECREASE)}
          className="text-lg hover:text-primary w-10 h-full absolute left-2 flex items-center justify-center"
        >
          {isHide && quatity <= 1 ? <BiTrash /> : <BsDash />}
        </button>
        <input
          className="text-text w-32 py-3 text-center bg-menu border rounded-full"
          type="text"
          disabled
          max={10}
          onChange={(e) => {
            if (isNumeric(e.target.value)) {
              handleUpdateQuantity(e.target.value, TQuantity.INCREASE);
            }
          }}
          value={quatity}
        />
        <button
          onClick={() => handleUpdateQuantity(1, TQuantity.INCREASE)}
          className="text-lg hover:text-primary w-10 h-full absolute top-0 right-2 flex items-center justify-center"
        >
          <BsPlusLg />
        </button>
      </div>
    </div>
  );
};

export default CartUpdateAmount;
