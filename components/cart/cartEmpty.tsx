import React from "react";
import Image from "next/image";
import Link from "next/link";

const CartEmpty = () => {
  return (
    <>
      <figure className=" my-4 flex justify-center items-center flex-col">
        <Image
          width={55}
          height={55}
          alt="cart empty"
          className="text-center"
          src={"./assets/minicart.svg"}
        />

        <figcaption className="text-center mt-2">
          Giỏ hàng của bạn đang trống
        </figcaption>
      </figure>

      <div className="flex justify-center items-center">
        <Link className="button_send" href={"/dich-vu/can-cau"}>
          Mua sắm ngay
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
