import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import type { MenuProps } from "antd";
import { Button, Dropdown, Input } from "antd";
import { IoMenu } from "react-icons/io5";
import { SearchProps } from "antd/es/input";
import AccountMenu from "./account/AccountMenu";
import { Debounced } from "react-swisskit";
import SearchComponent from "./home/components/SearchComponent";
import NavComponent from "./home/components/NavComponent";

const { Search } = Input;

const items: MenuProps["items"] = [
  {
    key: "can-cau",
    label: (
      <Link href="/can-cau" className="hover:underline">
        Cần câu
      </Link>
    ),
  },
  {
    key: "moi-cau",
    label: (
      <Link className="hover:underline" href="/moi-cau">
        Mồi câu
      </Link>
    ),
  },
  {
    key: "day-cau",
    label: (
      <Link className="hover:underline" href="/day-cau">
        Dây câu
      </Link>
    ),
  },
];

const HeaderComponent = () => {
  return (
    <header className="container mx-auto py-4">
      <div className="flex justify-between items-center flex-wrap">
        <div className="w-1/2 md:w-1/5 flex items-center justify-between order-1">
          <div
            style={{
              width: "80px",
              height: "80px",
              position: "relative",
            }}
          >
            <Link href={`/`}>
              <Image
                src={`/assets/logo-footer.png`}
                alt="logo"
                fill
                className="object-contain"
              />
            </Link>
          </div>
          <div className="hidden md:block w-1/2 gap-5 items-center">
            <Dropdown
              menu={{ items }}
              placement="bottomLeft"
              arrow
              overlayStyle={{ width: "200px" }}
            >
              <Button className="flex items-center gap-1">
                <IoMenu />
                <span className="font-medium">Danh mục</span>
              </Button>
            </Dropdown>
          </div>
        </div>
        <SearchComponent />
        <div className="w-1/2 md:w-1/6 flex justify-end order-1 md:order-3">
          <AccountMenu />
        </div>
      </div>
      <NavComponent />
    </header>
  );
};

export default HeaderComponent;
