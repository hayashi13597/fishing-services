"use client";
import { Pagination, Select } from "antd";
import React, { useState } from "react";
import SearchProduct from "../../components/SearchPage/SearchProduct";
import Breadcrumb from "../../components/Breadcrumb";
import ProductScreen from "../../components/screen/ProductScreen";

const itemPerPage: number = 8;

const SearchPage = () => {
  const [pageCurrent, setPageCurrent] = useState(1);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const [structurePage, setStructurePage] = useState({
    page: "Sản phẩm",
    link: "/san-pham",
    last: true,
  });
  return (
    <div className="container mx-auto">
      <Breadcrumb structurePage={[structurePage]} title={structurePage.page} />

      <ProductScreen isPageProduct listProductDefault={[]} total={0} />
    </div>
  );
};

export default SearchPage;
