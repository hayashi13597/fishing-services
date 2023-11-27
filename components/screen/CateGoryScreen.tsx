"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumb";
import ProductItem from "../Products/ProductItem";
import { Pagination } from "antd";
import CateApi from "../../services/api-client/cate";
import { IProduct } from "../home/ProductContainer";
import { notFound } from "next/navigation";
interface CateGoryScreenProps {
  listProducts: IProduct[];
  total: number;
}

const CateGoryScreen = ({ listProducts = [], total }: CateGoryScreenProps) => {
  const [pageCurrent, setPageCurrent] = useState(1);
  const [itemPerPage, setListItemPerPage] = useState(8);
  const [totalPage, setTotalPage] = useState(total);

  const [listData, setListData] = useState<IProduct[]>(listProducts);
  // useEffect(() => {
  //   CateApi.GetOneCate(category, itemPerPage, pageCurrent - 1)
  //     .then((res) => {
  //       setListData(res.listProducts);
  //       setTotal(res.total);
  //       setStructurePage(() => ({
  //         link: res.category.slug,
  //         last: true,
  //         page: res.category.name,
  //       }));
  //     })
  //     .catch(() => {
  //       notFound();
  //     });
  // });
  return (
    <>
      <div className="grid grid-cols-2 gap-5 mb-5 md:grid-cols-4 md:gap-10 md:mb-10 ">
        {listData.map((product) => (
          <ProductItem product={product} key={product.name} />
        ))}
      </div>
      {totalPage / itemPerPage > 1 && (
        <div
          className={`flex justify-center  ${
            itemPerPage >= listData?.length ? "hidden" : ""
          }`}
        >
          <Pagination
            total={totalPage}
            pageSize={itemPerPage}
            current={pageCurrent}
            onChange={(page) => setPageCurrent(page)}
          />
        </div>
      )}
    </>
  );
};

export default CateGoryScreen;
