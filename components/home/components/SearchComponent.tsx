"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Debounced, cn } from "react-swisskit";
import SearchItem from "./SearchItem";
import { Drawer } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { IProduct } from "../ProductContainer";
import ProductsApi from "../../../services/api-client/product";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const SearchComponent = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [showResults, setShowResults] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const listCateGory = useSelector(
    (state: RootState) => state.productDetail.listCate
  );
  const [search, setSearch] = useState("");
  const [ListProduct, setListProduct] = useState<IProduct[]>([]);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(() => false);
    setListProduct(() => []);
    setShowResults(() => false);
  };

  const HandleSubmitSearch = () => {
    if (searchRef.current) {
      const valueSearch = searchRef.current.value;

      ProductsApi.search(valueSearch, 12, 0).then((res) => {
        setListProduct(() => res.data.products);
        setSearch(() => valueSearch);
      });
      if (valueSearch) setShowResults(() => true);
      else setShowResults(() => false);
    }
  };
  const handleGetPageSearch = () => {
    searchRef.current.value = "";
    // router.push(`/tim-kiem/${searchRef.current.value}`);
    onClose();
    router.push(`/tim-kiem?q=${search}`);
  };
  const handleCloseSearch = () => {
    onClose();
    if (searchRef.current) {
      searchRef.current.value = "";
    }
  };
  return (
    <form className="w-full md:w-3/5 order-2 md:order-1 relative flex items-center gap-4">
      <IoMenu
        className="text-5xl cursor-pointer hover:text-primary transition-all md:hidden"
        onClick={showDrawer}
      />
      <Drawer
        title="Menu"
        placement="bottom"
        onClose={onClose}
        open={open}
        height={400}
      >
        <ul>
          <li className="mb-3">
            <Link
              href={`/`}
              className="text-2xl hover:underline hover:text-primary capitalize"
            >
              Trang chủ
            </Link>
          </li>

          <li className="mb-3">
            <Link
              href={`/san-pham`}
              className="text-2xl hover:underline hover:text-primary capitalize"
            >
              Sản phẩm
            </Link>
          </li>
          <li className="mb-3">
            <Link
              href={`/tin-tuc`}
              className="text-2xl hover:underline hover:text-primary capitalize"
            >
              Tin Tức - Sự kiện
            </Link>
          </li>
          <li className="mb-3">
            <Link
              href={`/gioi-thieu`}
              className="text-2xl hover:underline hover:text-primary capitalize"
            >
              Giới thiệu
            </Link>
          </li>
          <li className="mb-3">
            <Link
              href={`/lien-he`}
              className="text-2xl hover:underline hover:text-primary capitalize"
            >
              Liên hệ
            </Link>
          </li>

          {/* {listCateGory.map((category) => (
            <li className="mb-3" key={`cate-mobile-${category.slug}`}>
              <Link
                href={`/${category.slug}`}
                className="text-2xl hover:underline hover:text-primary capitalize"
              >
                {category.name}
              </Link>
            </li>
          ))} */}
        </ul>
      </Drawer>
      <div className="w-full relative">
        <input
          ref={searchRef}
          onInput={Debounced(HandleSubmitSearch, 1000)}
          type="search"
          id="voice-search"
          className="w-full border py-3 outline-none pl-6 rounded-md text-sm px-2 pr-4 "
          placeholder="Tìm kiếm sản phẩm..."
          required
          autoComplete="off"
        />
        <div
          className={`absolute top-[120%] max-h-80 inset-x-0 z-50 ${
            showResults ? "origin-top scale-y-100" : "origin-top scale-y-0"
          } transition-all duration-300`}
        >
          {ListProduct.slice(0, 5).map((product) => (
            <div onClick={handleCloseSearch}>
              <SearchItem key={`tim-kiem-${product.id}`} product={product} />
            </div>
          ))}
          <button
            type="button"
            onClick={handleGetPageSearch}
            className={cn(
              "bg-white  text-sm text-center py-3 text-primary w-full",
              ListProduct.length >= 5 ? "block" : "hidden"
            )}
          >
            Xem thêm {ListProduct.length} sản phẩm
          </button>
        </div>
      </div>
      <button
        className="absolute inset-y-0 px-3 right-0 bg-primary text-white rounded-md hover:opacity-75 transition-all"
        onClick={handleGetPageSearch}
        type="button"
      >
        Tìm kiếm
      </button>
    </form>
  );
};

export default SearchComponent;
