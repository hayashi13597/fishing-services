"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumb";
import ProductItem from "../Products/ProductItem";
import { Pagination } from "antd";
import CateApi from "../../services/api-client/cate";
import { IProduct } from "../home/ProductContainer";
import { notFound } from "next/navigation";
interface CateGoryScreenProps {
  category: string;
}

const CateGoryScreen = ({ category }: CateGoryScreenProps) => {
  const [pageCurrent, setPageCurrent] = useState(1);
  const [itemPerPage, setListItemPerPage] = useState(12);
  const [total, setTotal] = useState(0);
  const [structurePage, setStructurePage] = useState({
    page: "Mồi câu",
    link: "/moi-cau",
    last: true,
  });

  const [listData, setListData] = useState<IProduct[]>([]);
  useEffect(() => {
    CateApi.GetOneCate(category, itemPerPage, pageCurrent - 1)
      .then((res) => {
        setListData(res.data.listProducts);
        setTotal(res.data.total);
        setStructurePage(() => ({
          link: res.data.category.slug,
          last: true,
          page: res.data.category.name,
        }));
      })
      .catch(() => {
        notFound();
      });
  });
  return (
    <>
      <Breadcrumb structurePage={[structurePage]} title={structurePage.page} />
      <div className="grid grid-cols-2 gap-5 mb-5 md:grid-cols-4 md:gap-10 md:mb-10 ">
        {listData.map((product) => (
          <ProductItem product={product} key={product.name} />
        ))}
      </div>
      {total / itemPerPage > 1 && (
        <div
          className={`flex justify-center  ${
            itemPerPage >= listData?.length ? "hidden" : ""
          }`}
        >
          <Pagination
            total={total}
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
