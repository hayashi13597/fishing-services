"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Pagination } from "antd";
import Breadcrumb from "../../components/Breadcrumb";
import {
  filterPriceType,
  productType,
  structurePageType,
} from "../../common.types";
import ToolBar from "../../components/Products/ToolBar";
import ProductItem from "../../components/Products/ProductItem";
import ListStyleItem from "../../components/Products/ListStyleItem";
import useFetchRod from "../../hooks/useFetchRod";
import Loading from "./Loading";

const structurePage: structurePageType[] = [
  { page: "Sản phẩm", link: "/products", last: true },
];

const itemPerPage: number = 4;

const filterPriceData: filterPriceType[] = [
  {
    key: "defaultFilter",
    value: "Lọc giá",
  },
  {
    key: "duoi-500",
    value: "Dưới 500.000đ",
  },
  {
    key: "tu-500-den-1000",
    value: "500.000đ - 1.000.000đ",
  },
  {
    key: "tu-1000-den-2000",
    value: "1.000.000đ - 2.000.000đ",
  },
  {
    key: "tren-2000",
    value: "Trên 2.000.000đ",
  },
];

const Products = () => {
  const [showType, setShowType] = useState("grip");
  const [pageCurrent, setPageCurrent] = useState(1);
  const searchParams = useSearchParams();

  const sortOrder = searchParams.get("sort") || "";
  const price = searchParams.get("filter") || "";
  const { data, loading }: { data: productType[]; loading: boolean } =
    useFetchRod(`?sort=${sortOrder}&price=${price}`);

  if (loading) {
    return (
      <div className="container mx-auto bg-menu">
        <Breadcrumb structurePage={structurePage} />
        <ToolBar setShowType={setShowType} filterPriceData={filterPriceData} />
        <Loading />
      </div>
    );
  }

  return (
    <div className="container mx-auto bg-menu">
      <Breadcrumb structurePage={structurePage} title="Tất cả sản phẩm" />
      <ToolBar setShowType={setShowType} filterPriceData={filterPriceData} />
      <div className="grid grid-cols-2 gap-5 mb-5 md:grid-cols-4 md:gap-10 md:mb-10">
        {showType === "grip" &&
          data
            ?.slice((pageCurrent - 1) * itemPerPage, pageCurrent * itemPerPage)
            .map((product) => (
              <ProductItem product={product} key={product.name} />
            ))}
      </div>
      <div className="hidden md:block">
        {showType === "list" &&
          data
            ?.slice((pageCurrent - 1) * itemPerPage, pageCurrent * itemPerPage)
            .map((product) => (
              <ListStyleItem product={product} key={product.name} />
            ))}
      </div>
      {data?.length > 0 && (
        <div
          className={`flex justify-center py-5 md:py-4 S${
            itemPerPage >= data?.length ? "hidden" : ""
          }`}
        >
          <Pagination
            defaultCurrent={4}
            total={data?.length}
            pageSize={itemPerPage}
            current={pageCurrent}
            onChange={(page) => setPageCurrent(page)}
          />
        </div>
      )}
    </div>
  );
};

export default Products;
