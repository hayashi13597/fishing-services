"use client";
import React, { useEffect, useState } from "react";
import { menuDropdown } from "../../constants";
import Link from "next/link";
import { cn } from "react-swisskit";
import { BiMenu, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { AccountMenu } from "../";
import { usePathname } from "next/navigation";
import "./nav.scss";
import { RiCloseFill } from "react-icons/ri";
import ProductsApi from "../../services/api-client/product";
const Nav = () => {
  const currentPage = usePathname();
  const [isOpenDropMenu, setIsOpenDropMenu] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [listCateGory, setListCategory] = useState([]);
  const handleClose = () => {
    setIsOpenMenu(() => false);
    setIsOpenDropMenu(() => false);
  };
  useEffect(() => {
    ProductsApi.GetCategory().then((res: any) => {
      setListCategory(() => res.data.categories);
    });
  }, []);

  useEffect(() => {
    handleClose();
  }, [currentPage]);
  return (
    <nav>
      <div className="flex flex-wrap justify-between items-center  md:py-4 py-2">
        <button
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          data-collapse-toggle="mega-menu-full"
          className="md:hidden block text-3xl text-text"
        >
          <BiMenu />
        </button>
        {isOpenMenu && (
          <div
            onClick={handleClose}
            className="fixed inset-0 bg-black/40 z-[2]"
          ></div>
        )}
        <div
          id="mega-menu-full"
          className={cn(
            "items-center justify-between   w-full md:flex md:w-auto md:order-1 ",
            isOpenDropMenu ? "menu_mobile" : "",
            isOpenMenu ? "menu__appear" : ""
          )}
        >
          <button
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="absolute top-4 right-2 md:hidden text-black text-3xl hover:text-primary"
          >
            <RiCloseFill />
          </button>
          <ul className="flex flex-col mt-4 text-text  font-medium md:flex-row md:space-x-8 md:mt-0">
            <li className="md:hidden">
              <Link
                href="/"
                className="block py-2 pl-3 pr-4  border-b border-gray-100  md:hover:bg-transparent md:border-0  md:p-0 hover:text-primary "
                aria-current="page"
              >
                Menu
              </Link>
            </li>
            <li className="md:!ml-0">
              <Link
                href="/"
                className="block py-2 pl-3 pr-4  font-semibold border-b border-gray-100 hover:bg-gray-50 hover:text-primary  md:hover:bg-transparent md:border-0  md:p-0 "
                aria-current="page"
              >
                Trang chủ
              </Link>
            </li>
            <li>
              <button
                onClick={() => setIsOpenDropMenu(!isOpenDropMenu)}
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                className="flex items-center  justify-between w-full py-2 pl-3 pr-4 font-semibold  border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0  hover:text-primary  md:p-0 "
              >
                Sản phẩm
                {!isOpenDropMenu ? <BiChevronDown /> : <BiChevronUp />}
              </button>
              <ul
                className={cn(
                  "md:hidden",
                  isOpenDropMenu ? "menu_mobile-hidden" : "height_effect"
                )}
              >
                {listCateGory.map((menu) => (
                  <li key={menu.name + "-mobile"}>
                    <Link
                      href={`/${menu.slug}`}
                      className="block p-3 rounded-lg hover:bg-gray-200"
                    >
                      <div className="font-medium pl-4 text-sm text-[#6f6e6e] capitalize ">
                        {menu.name}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link
                href="/tin-tuc"
                className="block py-2 pl-3 pr-4  font-semibold border-b border-gray-100 hover:bg-gray-50 hover:text-primary  md:hover:bg-transparent md:border-0  md:p-0"
              >
                Tin tức - Sự kiện
              </Link>
            </li>
            <li>
              <Link
                href="/gioi-thieu"
                className="block py-2 pl-3 pr-4  font-semibold border-b border-gray-100 hover:bg-gray-50 hover:text-primary  md:hover:bg-transparent md:border-0  md:p-0"
              >
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link
                href="/lien-he"
                className="block py-2 pl-3 pr-4  font-semibold border-b border-gray-100 hover:bg-gray-50 hover:text-primary  md:hover:bg-transparent md:border-0  md:p-0 "
              >
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>
        <AccountMenu />
      </div>
      <div
        id="mega-menu-full-dropdown"
        className={cn(
          "mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 ease-out duration-1000  md:block hidden",
          isOpenDropMenu ? `lg:h-[50vh] h-screen` : "h-0 overflow-hidden"
        )}
      >
        <div>
          <ul
            aria-labelledby="mega-menu-full-dropdown-button"
            className="grid  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1"
          >
            {listCateGory.map((menu) => (
              <li key={menu.name}>
                <Link
                  href={`/${menu.slug}`}
                  className="block p-3 rounded-lg hover:bg-gray-200"
                >
                  <div className="font-semibold text-black  ">{menu.name}</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {menu.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
