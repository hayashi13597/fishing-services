"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Debounced } from "react-swisskit";
import SearchItem from "./SearchItem";
import { Drawer } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CateApi from "../../../services/api-client/cate";
import { IProduct } from "../ProductContainer";
import ProductsApi from "../../../services/api-client/product";

const SearchComponent = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [showResults, setShowResults] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [listCateGory, setListCategory] = useState([]);
  const [search, setSearch] = useState("");
  const [ListProduct, setListProduct] = useState<IProduct[]>([]);
  useEffect(() => {
    CateApi.GetAllCate().then((res: any) => {
      setListCategory(() => res.data.categories);
    });
  }, []);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const HandleSubmitSearch = () => {
    console.log("Delay 200ms");
    if (searchRef.current) {
      const valueSearch = searchRef.current.value;
      console.log("valueSearch", valueSearch);

      ProductsApi.search(valueSearch).then((res) => {
        setListProduct(() => res.data.products);
        setSearch(() => valueSearch);
      });
      if (valueSearch) setShowResults(true);
      else setShowResults(false);
    }
  };

  return (
    <form className="w-full md:w-3/5 order-2 md:order-1 relative flex items-center gap-4">
      <IoMenu
        className="text-5xl cursor-pointer hover:text-primary transition-all md:hidden"
        onClick={showDrawer}
      />
      <Drawer
        title="Danh mục"
        placement="bottom"
        onClose={onClose}
        open={open}
        height={400}
      >
        <ul>
          {listCateGory.map((category) => (
            <li className="mb-3" key={`cate-mobile-${category.slug}`}>
              <Link
                href={`/${category.slug}`}
                className="text-2xl hover:underline hover:text-primary capitalize"
              >
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
      </Drawer>
      <div className="w-full relative">
        <input
          ref={searchRef}
          onInput={Debounced(HandleSubmitSearch, 1000)}
          type="text"
          id="voice-search"
          className="w-full border py-3 outline-none pl-6 rounded-md text-sm"
          placeholder="Tìm kiếm sản phẩm..."
          required
          autoComplete="off"
        />
        <div
          className={`absolute top-[120%] max-h-80 inset-x-0 z-50 ${
            showResults ? "origin-top scale-y-100" : "origin-top scale-y-0"
          } transition-all duration-300`}
        >
          {ListProduct.map((product) => (
            <SearchItem key={`tim-kiem-${product.id}`} product={product} />
          ))}
          <Link
            href={`/tim-kiem?q=${search}`}
            className="bg-white block text-sm text-center py-3 text-primary"
          >
            Xem thêm {ListProduct.length} sản phẩm
          </Link>
        </div>
      </div>
      <button
        className="absolute inset-y-0 px-3 right-0 bg-primary text-white rounded-md hover:opacity-75 transition-all"
        onClick={(e) => {
          e.preventDefault();
          setShowResults(false);
          searchRef.current.value = "";
          // router.push(`/tim-kiem/${searchRef.current.value}`);
          router.push(`/tim-kiem?q=${search}`);
        }}
      >
        Tìm kiếm
      </button>
    </form>
  );
};

export default SearchComponent;
