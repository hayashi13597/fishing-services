"use client";
import React, { useEffect, useState } from "react";
import ReviewItem from "./ReviewItem";
import ReviewApi from "../../../services/api-client/review";
import { Pagination } from "antd";

interface ReviewsProps {
  idAccount: string;
}
const Reviews = ({ idAccount }: ReviewsProps) => {
  const [listOrderDetails, setListOrderDetails] = useState([]);

  const [itemPerPage] = useState(2);
  const [total, setTotal] = useState(1);
  const [pageCurrent, setPageCurrent] = useState(1);
  useEffect(() => {
    if (idAccount) {
      ReviewApi.GetListReview(
        idAccount,
        itemPerPage,
        (pageCurrent - 1) * itemPerPage
      ).then((res) => {
        setListOrderDetails(() => res.data.reviews);
        setTotal(() => res.data.total);
      });
    }
  }, [idAccount, pageCurrent, total]);
  if (!idAccount) return <></>;
  return (
    <>
      {/* Thay Array(3) thành dữ liệu sản phẩm khách đã mua từ server và thêm props product cho ReviewItem */}
      <div className="grid grid-cols-1 p-2">
        {listOrderDetails.length ? (
          listOrderDetails.map((item, index) => (
            <ReviewItem
              idAccount={idAccount}
              review={item}
              key={index}
              setTotal={setTotal}
            />
          ))
        ) : (
          <p className="flex justify-center items-center mt-8 font-semibold text-primary">
            Sản phẩm đánh giá trống!
          </p>
        )}
      </div>
      <div
        className={`flex justify-center ${
          itemPerPage >= total ? "!hidden" : "mb-10"
        }`}
      >
        <Pagination
          total={total}
          pageSize={itemPerPage}
          showSizeChanger={false}
          current={pageCurrent}
          onChange={(page) => setPageCurrent(page)}
        />
      </div>
    </>
  );
};

export default Reviews;
