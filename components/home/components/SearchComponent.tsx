import React, { useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Debounced } from "react-swisskit";
import SearchItem from "./SearchItem";
import { Drawer } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SearchComponent = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [showResults, setShowResults] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

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
          <li className="mb-3">
            <Link
              href={`/`}
              className="text-2xl hover:underline hover:text-primary"
            >
              Cần câu
            </Link>
          </li>
          <li className="mb-3">
            <Link
              href={`/`}
              className="text-2xl hover:underline hover:text-primary"
            >
              Mồi câu
            </Link>
          </li>
          <li className="mb-3">
            <Link
              href={`/`}
              className="text-2xl hover:underline hover:text-primary"
            >
              Dây cước
            </Link>
          </li>
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
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <Link
            href={`/tim-kiem`}
            className="bg-white block text-sm text-center py-3 text-primary"
          >
            Xem thêm 52 sản phẩm
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
          router.push(`/tim-kiem`);
        }}
      >
        Tìm kiếm
      </button>
    </form>
  );
};

export default SearchComponent;