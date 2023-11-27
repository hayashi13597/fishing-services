"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Breadcrumb from "../Breadcrumb";
import ProductScreen from "./ProductScreen";
import ProductsApi from "../../services/api-client/product";
import { IProduct } from "../home/ProductContainer";

const SearchScreen = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("q");
  const [listProduct, setListProduct] = useState<IProduct[]>([]);
  const structurePage = {
    page: "Tìm kiếm",
    link: "/tim-kiem",
    last: true,
  };

  useEffect(() => {
    if (!search) return;
    ProductsApi.search(search).then((res) => {
      setListProduct(() => res.data.products);
    });
  }, [search]);

  return (
    <div className="container mx-auto">
      <Breadcrumb structurePage={[structurePage]} title={structurePage.page} />
      <div className="text-center mb-10">
        Có <span className="font-bold">{listProduct.length} sản phẩm</span> cho
        tìm kiếm "{search}"
      </div>
      <ProductScreen
        total={listProduct.length}
        listProductDefault={listProduct}
        search={search}
      />
    </div>
  );
};

export default SearchScreen;
