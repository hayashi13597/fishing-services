import React from "react";
import ReviewItem from "./ReviewItem";

const Reviews = () => {
  return (
    <>
      {/* Thay Array(3) thành dữ liệu sản phẩm khách đã mua từ server và thêm props product cho ReviewItem */}
      <div className="grid grid-cols-1 p-2">
        {[...Array(3)].map((item, index) => (
          <ReviewItem key={index} />
        ))}
      </div>
    </>
  );
};

export default Reviews;
