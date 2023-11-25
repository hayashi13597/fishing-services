"use client";
import { Pagination, Select } from "antd";
import React, { useState } from "react";
import SearchProduct from "../../components/SearchPage/SearchProduct";

const itemPerPage: number = 8;

const SearchPage = () => {
  const [pageCurrent, setPageCurrent] = useState(1);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-text/80 text-4xl text-center mt-10">Tìm kiếm</h1>
      <div className="text-center mb-10">
        Có <span className="font-bold">52 sản phẩm</span> cho tìm kiếm
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm">
          Kết quả tìm kiếm cho <span className="font-bold">Cần câu</span> là:
        </p>
        <Select
          defaultValue="Sắp xếp"
          style={{ width: 200 }}
          onChange={handleChange}
          options={[
            { value: "lowest", label: "Giá: thấp đến cao" },
            { value: "hightest", label: "Giá: Cao đến thấp" },
            { value: "az", label: "Tên: từ a - z" },
            { value: "za", label: "Tên: từ z - a" },
          ]}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10 mt-4">
        <SearchProduct />
        <SearchProduct />
        <SearchProduct />
        <SearchProduct />
        <SearchProduct />
        <SearchProduct />
        <SearchProduct />
        <SearchProduct />
      </div>
      {300 / itemPerPage > 1 && (
        <div
          className={`flex justify-center ${
            itemPerPage >= 300 ? "hidden" : "mb-10"
          }`}
        >
          <Pagination
            total={300}
            pageSize={itemPerPage}
            showSizeChanger={false}
            current={pageCurrent}
            onChange={(page) => setPageCurrent(page)}
          />
        </div>
      )}
    </div>
  );
};

export default SearchPage;
