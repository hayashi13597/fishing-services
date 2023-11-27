"use client";
import React, { useEffect, useState } from "react";
import { IProduct } from "../home/ProductContainer";
import SearchProduct from "../SearchPage/SearchProduct";
import { Pagination, Select } from "antd";
interface IProductScreen {
  listProductDefault: IProduct[];
  total: number;
}
const itemPerPage: number = 8;
const ProductScreen = ({ listProductDefault = [], total }: IProductScreen) => {
  const [listProduct, setListProduct] =
    useState<IProduct[]>(listProductDefault);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [totalPage, setTotalPage] = useState(total);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    if (!listProductDefault.length) return;

    setListProduct(() => listProductDefault);
  }, [listProductDefault.length]);
  return (
    <div className="container mx-auto">
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
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 mb-10 mt-4">
        {listProduct.map((product) => (
          <SearchProduct product={product} key={`serach-${product.id}`} />
        ))}
      </div>

      {totalPage / itemPerPage > 1 && (
        <div
          className={`flex justify-center ${
            itemPerPage >= total ? "hidden" : "mb-10"
          }`}
        >
          <Pagination
            total={totalPage}
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

export default ProductScreen;
