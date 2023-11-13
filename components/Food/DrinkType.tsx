import React from "react";
import ProductItem from "../Products/ProductItem";
import { Pagination } from "antd";
import { productType } from "../../common.types";
import Loading from "../../app/san-pham/Loading";
import useFetchDrink from "../../hooks/useFetchDrink";

type FoodPropsType = {
  pageCurrent: number;
  itemPerPage: number;
  setPageCurrent: (page: number) => void;
};

const DrinkType = ({
  pageCurrent,
  itemPerPage,
  setPageCurrent,
}: FoodPropsType) => {
  const { data, loading }: { data: productType[]; loading: boolean } =
    useFetchDrink("/");

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-5 mb-5 md:grid-cols-4 md:gap-10 md:mb-10">
        {data
          ?.slice((pageCurrent - 1) * itemPerPage, pageCurrent * itemPerPage)
          .map((product: productType) => (
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

export default DrinkType;
