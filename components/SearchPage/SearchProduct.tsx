import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShareSquare, FaStar } from "react-icons/fa";
import { formatMoney, handleOpenNewWindown } from "../../utils";
import { IoEyeSharp } from "react-icons/io5";
import { IProduct } from "../home/ProductContainer";
import { useDispatch } from "react-redux";
import { OpenViewAddToCart, openViewDetail } from "../../redux/product";
import { AddCart } from "../../redux/cart";

interface ISearchProduct {
  product: IProduct;
}
const SearchProduct = ({ product }: ISearchProduct) => {
  const {
    name,
    price,
    imageUrl,
    slug,
    id,
    sale_off = 0,
    Category,
    stars = 5,
  } = product;
  const dispatch = useDispatch();
  const showModal = () => {
    dispatch(openViewDetail({ productDetail: product }));
  };
  const handleShare = () => {
    handleOpenNewWindown(`${Category.slug}/${slug}`);
  };
  const AddProductIntoCart = () => {
    dispatch(AddCart({ name, price, imageUrl, slug, id, quantity: 1 }));
    dispatch(OpenViewAddToCart({ name, price, imageUrl, slug }));
  };

  return (
    <div className="group relative">
      <Link
        href={`/${product.Category.slug}/${product.slug}`}
        className="flex flex-col gap-1"
      >
        <Image
          src={product.imageUrl}
          alt={`image`}
          height={500}
          width={500}
          className="w-full object-cover rounded-md group-hover:shadow-xl transition-all duration-300"
        />
        <h3 className="text-text text-base font-medium line-clamp-1 capitalize">
          {name}
        </h3>
        <p className="flex items-center gap-1 text-sm">
          {stars}
          <FaStar className="text-base" />
        </p>
        <p className="font-semibold text-primary flex items-center gap-1">
          <span>{formatMoney(price)}</span>
          <span
            className={`text-text/50 text-xs line-through ${
              sale_off ? "" : "hidden"
            } `}
          >
            {formatMoney(Math.floor((1 + sale_off * 0.01) * price))}
          </span>
          <span className={`text-text/50 text-xs ${sale_off ? "" : "hidden"}`}>
            ({sale_off}% off)
          </span>
        </p>
      </Link>
      <div
        onClick={showModal}
        className="absolute top-2 right-2 bg-white p-2 rounded-full cursor-pointer text-text hover:bg-primary hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
        title="Xem nhanh"
      >
        <IoEyeSharp />
      </div>
      <div
        onClick={handleShare}
        className="absolute top-12 right-2 bg-white p-2 rounded-full cursor-pointer text-text hover:bg-primary hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
        title="Chia sẽ"
      >
        <FaShareSquare />
      </div>
      <button
        onClick={AddProductIntoCart}
        className="w-full mt-2 px-3 py-1 border-text border-2 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
      >
        Thêm giỏ hàng
      </button>
    </div>
  );
};

export default SearchProduct;
