"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { cn, Debounced } from "react-swisskit";
import Link from "next/link";
import SearchItem from "./home/components/SearchItem";
import ProductsApi from "../services/api-client/product";
const Header = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [IsSeach, setIsSearch] = useState(false);
  const HandleSubmitSearch = () => {
    console.log("Delay 200ms");
    if (searchRef.current) {
      const valueSearch = searchRef.current.value;
      console.log("valueSearch", valueSearch);
      // ProductsApi.search(valueSearch)
      if (valueSearch) {
        setIsSearch(() => true);
      } else {
        setIsSearch(() => false);
      }
    }
  };

  return (
    <header className="pt-2 text-black container mx-auto">
      <section className="md:flex  block items-center justify-between">
        <figure className="md:block flex justify-center py-4">
          <Link className="block" href={"/"}>
            <Image
              src="/assets/logo-footer.png"
              width={80}
              height={129}
              alt="logo"
              className="object-cover"
            />
          </Link>
        </figure>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            HandleSubmitSearch();
          }}
          className="flex relative items-center md:basis-1/2 basis-full lg:my-0 my-3"
        >
          <label htmlFor="voice-search" className="sr-only">
            Tìm kiếm
          </label>
          <div className="relative w-full bg-white rounded-full border-2">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Image
                src="/assets/logo-footer.png"
                width={20}
                height={20}
                alt="logo-search"
                className="object-cover"
              />
            </div>
            <input
              ref={searchRef}
              onInput={Debounced(HandleSubmitSearch, 1000)}
              type="text"
              id="voice-search"
              className="search_header_input "
              placeholder="Tìm kiếm sản phẩm, tin tức"
              required
            />

            <button
              className={cn(
                "absolute inset-y-0 right-[0px] flex items-center pr-3  py-2 px-6 my-[1px] hover:text-white ease-in duration-100"
              )}
              type="submit"
            >
              <BiSearch className="font-bold text-xl text-black" />
            </button>
          </div>
          {IsSeach && (
            <section className="absolute z-20 top-full left-0 right-0  max-h-[50vh] scroll_y overflow-y-auto">
              <div>
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem /> <SearchItem />
                <SearchItem />
                <SearchItem />
              </div>
            </section>
          )}
        </form>
        <div className="gap-2 items-center md:flex  hidden justify-center pb-2">
          <Image
            src="/assets/hotline_03.png"
            width={52}
            height={52}
            alt="hotline 3"
            className="object-cover"
          />
          <div className="text-start">
            <p className="font-bold text-sm">Liên Hệ Tư Vấn:</p>
            <span className="text-primary font-bold md:inline-block hidden">
              0347.088.538 -
            </span>
            <span className="text-primary font-bold md:inline-block hidden pl-1">
              0877.669.990
            </span>
            <Link
              className="text-primary font-bold md:hidden"
              href="tel:+0325024277"
            >
              0347.088.538 -
            </Link>

            <Link
              className="text-primary font-bold md:hidden"
              href="tel:+0877669990"
            >
              0877.669.990
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};

export default React.memo(Header);
