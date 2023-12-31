import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  DiscountCalc,
  formatMoney,
  handleOpenNewWindown,
} from "../../../utils";
import { IoEyeSharp } from "react-icons/io5";
import { FaShareSquare } from "react-icons/fa";
import { IProduct } from "../ProductContainer";
import { openViewDetail } from "../../../redux/product";
import { useDispatch } from "react-redux";

type mainProductType = {
  title?: string;
  listProduct: IProduct[];
  link?: string;
};

const MainProduct = ({
  title,
  link = "san-pham",
  listProduct = [],
}: mainProductType) => {
  const dispatch = useDispatch();
  const handleShare = (product: IProduct) => {
    const { name, slug, Category } = product;
    handleOpenNewWindown(`${Category.slug}/${slug}`, name);
  };
  const HandleView = (product: IProduct) => {
    dispatch(openViewDetail({ productDetail: product }));
  };
  return (
    <div>
      <div className="flex justify-center items-center flex-col md:flex-row md:justify-between md:text-text/80">
        <h1 className="text-3xl">{title}</h1>
        <p className="text-sm">
          Xem thêm nhiều sản phẩm hơn
          <Link
            href={`/${link}`}
            className="underline text-text md:text-text/80 text-base hover:text-primary transition-all font-medium pl-1"
          >
            tại đây
          </Link>
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4  md:grid-cols-3  gap-4 mt-5 overflow-hidden">
        {listProduct.map((product) => (
          <div
            className="relative rounded-md overflow-hidden group"
            key={`${title || "product"}-${product.id}`}
          >
            <Link
              href={`/${product.Category.slug}/${product.slug}`}
              title={product.name}
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={500}
                height={500}
                className="object-cover w-full brightness-90"
              />
              <p className="absolute bottom-2 left-2 bg-white font-semibold py-1 px-3 text-sm rounded-full">
                <span className="mr-1">{formatMoney(product.price)} </span>
                <span
                  className={`line-through font-light ${
                    product.sale_off === 0 ? "hidden" : ""
                  }`}
                >
                  {DiscountCalc(product.price, product.sale_off)}
                </span>
              </p>
            </Link>
            <div
              className="absolute top-2 right-2 bg-white p-2 rounded-full cursor-pointer text-text hover:bg-primary hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
              title="Xem nhanh"
              onClick={() => HandleView(product)}
            >
              <IoEyeSharp />
            </div>
            <div
              className="absolute top-12 right-2 bg-white p-2 rounded-full cursor-pointer text-text hover:bg-primary hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
              title="chia sẻ"
              onClick={() => handleShare(product)}
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
