"use client";
import React, { useState } from "react";
import Breadcrumb from "../Breadcrumb";
import { structurePageType } from "../../common.types";
import FoodType from "./FoodType";
import DrinkType from "./DrinkType";

const structurePage: structurePageType[] = [
  {
    page: "Món nhậu",
    link: "/mon-nhau",
    last: true,
  },
];

const itemPerPage: number = 4;

const FoodComponent = () => {
  const [type, setType] = useState("mon-an");
  const [pageCurrent, setPageCurrent] = useState(1);

  const handleClick = (type: string) => {
    setType(type);
    setPageCurrent(1);
  };

  return (
    <>
      <Breadcrumb structurePage={structurePage} title="Tất cả món nhậu" />
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/6 text-center h-min text-sm font-medium text-gray-900 bg-white border rounded-lg flex flex-col items-center justify-center">
          <a
            href="#"
            className="block w-full px-4 py-2 text-text border-b rounded-t-lg cursor-pointer hover:bg-primary hover:text-white transition-all"
            onClick={(e) => {
              e.preventDefault();
              handleClick("mon-an");
            }}
          >
            Món ăn
          </a>
          <a
            href="#"
            className="block w-full px-4 py-2 text-text rounded-b-lg cursor-pointer hover:bg-primary hover:text-white transition-all"
            onClick={(e) => {
              e.preventDefault();
              handleClick("do-uong");
            }}
          >
            Đồ uống
          </a>
        </div>
        <div className="w-full md:w-5/6">
          {type === "mon-an" && (
            <FoodType
              itemPerPage={itemPerPage}
              pageCurrent={pageCurrent}
              setPageCurrent={setPageCurrent}
            />
          )}
          {type === "do-uong" && (
            <DrinkType
              itemPerPage={itemPerPage}
              pageCurrent={pageCurrent}
              setPageCurrent={setPageCurrent}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default FoodComponent;
