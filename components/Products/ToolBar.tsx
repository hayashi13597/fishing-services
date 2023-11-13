"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { FaListUl } from "react-icons/fa";
import { FaGrip } from "react-icons/fa6";
import { countriesOptions } from "../../constants";
import { filterPriceType } from "../../common.types";

const ToolBar: React.FC<{
  setShowType: (str: string) => void;
  filterPriceData: filterPriceType[];
}> = ({ setShowType, filterPriceData }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const handleChangeSelect = (
    e: React.ChangeEvent<HTMLSelectElement>,
    type: string
  ) => {
    if (e.target.value === "defaultFilter") {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.delete("price");
      router.push(`${pathName}?${newParams.toString()}`);
      return;
    }
    if (e.target.value === "defaultSort") {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.delete("sort");
      router.push(`${pathName}?${newParams.toString()}`);
      return;
    }
    const newParams = new URLSearchParams(searchParams.toString());
    if (type === "sort") {
      newParams.set("sort", e.target.value);
    } else if (type === "price") {
      newParams.set("price", e.target.value);
    }
    router.push(`${pathName}?${newParams.toString()}`);
  };

  const handleClick = (type: string) => {
    setShowType(type);
  };

  return (
    <div className="w-full bg-white flex justify-between items-center p-4 border rounded-xl mb-5">
      <select
        id="filter"
        className="w-36 md:w-48 text-gray-900 text-sm rounded-lg block p-2.5 focus:outline-none focus:ring-0 cursor-pointer"
        onChange={(e) => handleChangeSelect(e, "price")}
        value={searchParams.get("price") || "defaultFilter"}
      >
        {filterPriceData?.map((data) => (
          <option key={data.key} value={data.key}>
            {data.value}
          </option>
        ))}
      </select>
      <div className="hidden md:flex gap-3">
        <button
          className="text-lg hover:text-primary transition-all duration-200"
          onClick={() => handleClick("grip")}
        >
          <FaGrip />
        </button>
        <button
          className="text-lg hover:text-primary transition-all duration-200"
          onClick={() => handleClick("list")}
        >
          <FaListUl />
        </button>
      </div>
      <select
        id="countries"
        className="w-36 md:w-48 text-gray-900 text-sm rounded-lg block p-2.5 focus:outline-none focus:ring-0 cursor-pointer"
        onChange={(e) => handleChangeSelect(e, "sort")}
        value={searchParams.get("sort") || "defaultSort"}
      >
        {countriesOptions?.map((country) => (
          <option key={country.key} value={country.key}>
            {country.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ToolBar;
