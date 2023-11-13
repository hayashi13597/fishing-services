"use client";
import React, { useState } from "react";
import Breadcrumb from "../Breadcrumb";
import { productType } from "../../common.types";
import useFetchBait from "../../hooks/useFetchBait";
import Loading from "../../app/san-pham/Loading";
import ProductItem from "../Products/ProductItem";
import { Pagination } from "antd";

const structurePage = [
  {
    page: "Mồi câu",
    link: "/moi-cau",
    last: true,
  },
];

const itemPerPage: number = 4;

const BaitComponent = () => {
  const { data, loading }: { data: productType[]; loading: boolean } =
    useFetchBait("/");
  const [pageCurrent, setPageCurrent] = useState(1);

  if (loading) {
    return (
      <div className="container mx-auto bg-menu">
        <Breadcrumb structurePage={structurePage} />
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Breadcrumb structurePage={structurePage} title="Mồi câu" />
      <div className="grid grid-cols-2 gap-5 mb-5 md:grid-cols-4 md:gap-10 md:mb-10">
        {data
          ?.slice((pageCurrent - 1) * itemPerPage, pageCurrent * itemPerPage)
          .map((product) => (
            <ProductItem product={product} key={product.name} />
          ))}
      </div>
      {data?.length > 0 && (
        <div
          className={`flex justify-center py-5 md:py-4 S${
            itemPerPage >= data?.length ? "hidden" : ""
          }`}
        >
          <Pagination
            // defaultCurrent={4}
            total={data?.length}
            pageSize={itemPerPage}
            current={pageCurrent}
            onChange={(page) => setPageCurrent(page)}
          />
        </div>
      )}
    </>
  );
};

export default BaitComponent;
