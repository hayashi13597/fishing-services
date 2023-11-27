import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IProduct } from "../ProductContainer";
import { formatMoney } from "../../../utils";

interface SearchItemPros {
  product: IProduct;
}
const SearchItem = ({ product }: SearchItemPros) => {
  return (
    <Link
      href={`/${product.Category.slug}/${product.slug}`}
      className="flex items-center search-item justify-between bg-[#FFFFFF] py-2 px-3 hover:bg-[#fcfbfb]"
    >
      <div>
        <h4 className="text-primary capitalize">{product.name}</h4>
        <p className="font-medium text-sm">{formatMoney(product.price)}</p>
      </div>
      <Image
        src={product.imageUrl}
        width={50}
        height={60}
        alt={product.name}
        className="object-cover"
      />
    </Link>
  );
};

export default SearchItem;
