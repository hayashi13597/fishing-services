import Image from "next/image";
import Link from "next/link";
import React from "react";
import products from "../../../mock/products.json";
import { formatMoney } from "../../../utils";
import { IoEyeSharp } from "react-icons/io5";
import { FaShareSquare } from "react-icons/fa";

type mainProductType = {
  title?: string;
};

const MainProduct = ({ title }: mainProductType) => {
  return (
    <div className="container mx-auto my-20">
      <div className="flex justify-center items-center flex-col md:flex-row md:justify-between md:text-text/80">
        <h1 className="text-4xl">{title}</h1>
        <p className="text-sm">
          Xem thêm nhiều sản phẩm hơn{" "}
          <Link
            href={"/san-pham"}
            className="underline text-text md:text-text/80 text-base hover:text-primary transition-all font-medium"
          >
            tại đây
          </Link>
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 overflow-hidden">
        {products
          ?.sort((a, b) => a.createdAt.localeCompare(b.createdAt))
          .slice(0, 8)
          .map((product) => (
            <div
              className="relative rounded-md overflow-hidden group"
              key={product.id}
            >
              <Link href={`/`} title={product.name}>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="object-cover w-full"
                />
                <p className="absolute bottom-2 left-2 bg-white font-semibold py-1 px-3 text-sm rounded-full">
                  <span className="mr-1">
                    {product.discount > 0
                      ? formatMoney(
                          product.price -
                            (product.price * product.discount) / 100
                        )
                      : formatMoney(product.price)}
                  </span>
                  <span
                    className={`line-through font-light ${
                      product.discount === 0 ? "hidden" : ""
                    }`}
                  >
                    {formatMoney(product.price)}
                  </span>
                </p>
              </Link>
              <div
                className="absolute top-2 right-2 bg-white p-2 rounded-full cursor-pointer text-text hover:bg-primary hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                title="Xem nhanh"
              >
                <IoEyeSharp />
              </div>
              <div
                className="absolute top-12 right-2 bg-white p-2 rounded-full cursor-pointer text-text hover:bg-primary hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                title="Chia sẽ"
              >
                <FaShareSquare />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MainProduct;
