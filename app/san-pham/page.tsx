"use client";
import { Pagination, Select } from "antd";
import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import ProductScreen from "../../components/screen/ProductScreen";

const SearchPage = () => {
  const [structurePage, setStructurePage] = useState({
    page: "Sản phẩm",
    link: "/san-pham",
    last: true,
  });
  return (
    <div className="container mx-auto">
      <Breadcrumb structurePage={[structurePage]} title={structurePage.page} />

      <ProductScreen isPageProduct={true} listProductDefault={[]} total={0} />
    </div>
  );
};

export default SearchPage;
