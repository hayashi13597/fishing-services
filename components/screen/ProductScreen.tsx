"use client";
import React, { useEffect, useState } from "react";
import { IProduct } from "../home/ProductContainer";
import SearchProduct from "../SearchPage/SearchProduct";
import { Pagination, Select } from "antd";
import CateApi from "../../services/api-client/cate";
import ProductsApi from "../../services/api-client/product";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
interface IProductScreen {
  listProductDefault: IProduct[];
  total: number;
  cate?: string;
  search?: string;
  isPageProduct?: boolean;
}

const ProductScreen = ({
  listProductDefault = [],
  total,
  cate,
  search,
  isPageProduct,
}: IProductScreen) => {
  const itemPerPage = 8;
  const [listProduct, setListProduct] =
    useState<IProduct[]>(listProductDefault);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [totalPage, setTotalPage] = useState(total);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const listCateGory = useSelector(
    (state: RootState) => state.productDetail.listCate
  );
  useEffect(() => {
    if (!listProductDefault.length) return;
    if (cate) {
      CateApi.GetOneCate(
        cate,
        itemPerPage,
        itemPerPage * (pageCurrent - 1)
      ).then((res) => {
        setListProduct(() => res.listProducts);
        setTotalPage(() => res.total);
      });
    } else if (search) {
      ProductsApi.search(search).then((res) => {
        const listProductSearch = res.data.products;
        if (listProductSearch) {
          setListProduct(() => listProductSearch);
          setTotalPage(() => listProductSearch.length);
        }
      });
    }
  }, [listProductDefault.length, pageCurrent]);
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <div className="text-sm">
          {!isPageProduct ? (
            search ? (
              <p>
                Kết quả tìm kiếm cho <span className="font-bold">{search}</span>{" "}
                là:
              </p>
            ) : (
              ""
            )
          ) : (
            <Select
              defaultValue="Danh mục"
              style={{ width: 200 }}
              onChange={handleChange}
              options={listCateGory.map((cate) => ({
                value: cate.slug,
                label: cate.name,
              }))}
            />
          )}
        </div>
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
