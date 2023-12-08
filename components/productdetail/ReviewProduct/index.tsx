"use client";
import React, { useEffect, useState } from "react";
import ReviewProductItem from "./ReviewProductItem";
import { FaRegStar, FaStar } from "react-icons/fa";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "react-swisskit";
import { IProduct } from "../../home/ProductContainer";
import ReviewApi from "../../../services/api-client/review";
import { Pagination } from "antd";
interface ReviewProductProps {
  product: IProduct;
}
const ReviewProduct = ({ product }: ReviewProductProps) => {
  const itemPerPage = 6;
  const [pageCurrent, setPageCurrent] = useState(1);

  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const starFilter = params.get("filter") || "all";
  const [star, setStar] = useState<any>(starFilter);
  const handleFilter = (star: number | string) => {
    setPageCurrent(() => 1);
    router.push(`${pathname}?filter=${star}`, { scroll: false });
    setStar(() => star);
  };

  const [productReview, setProductReview] = useState({
    reviews: [],
    star1: 0,
    star2: 0,
    star3: 0,
    star4: 0,
    star5: 0,
    total: 0,
  });
  useEffect(() => {
    ReviewApi.GetReviewProduct(
      product.id,
      star,
      itemPerPage,
      itemPerPage * (pageCurrent - 1)
    ).then((res: any) => {
      setProductReview(() => res.data);
    });
  }, [starFilter, star]);

  return (
    <>
      <div className="flex items-center gap-10 border border-primary p-5 mb-10">
        <div className="flex flex-col items-center">
          <p className="text-primary text-xl">
            <span className="text-3xl font-bold">{product.stars}</span> trên 5
          </p>
          <div className="flex text-primary text-2xl">
            {[...Array(5)].map((star) => (
              <FaStar />
            ))}
            {[...Array(5 - 5)].map((star) => (
              <FaRegStar />
            ))}
          </div>
        </div>
        <div className="flex gap-5 flex-wrap">
          <button
            onClick={() => handleFilter("all")}
            className={cn(
              "px-4 py-2 w-[100px] border",
              starFilter === "all" ? "border-primary text-primary" : ""
            )}
          >
            Tất cả
          </button>
          <button
            onClick={() => handleFilter(5)}
            className={cn(
              "px-4 py-2 w-[100px] border",
              starFilter === "5" ? "border-primary text-primary" : ""
            )}
          >
            5 Sao ({productReview.star5})
          </button>
          <button
            onClick={() => handleFilter(4)}
            className={cn(
              "px-4 py-2 w-[100px] border",
              starFilter === "4" ? "border-primary text-primary" : ""
            )}
          >
            4 Sao ({productReview.star4})
          </button>
          <button
            onClick={() => handleFilter(3)}
            className={cn(
              "px-4 py-2 w-[100px] border",
              starFilter === "3" ? "border-primary text-primary" : ""
            )}
          >
            3 Sao ({productReview.star3})
          </button>
          <button
            onClick={() => handleFilter(2)}
            className={cn(
              "px-4 py-2 w-[100px] border",
              starFilter === "2" ? "border-primary text-primary" : ""
            )}
          >
            2 Sao ({productReview.star2})
          </button>
          <button
            onClick={() => handleFilter(1)}
            className={cn(
              "px-4 py-2 w-[100px] border",
              starFilter === "1" ? "border-primary text-primary" : ""
            )}
          >
            1 Sao ({productReview.star1})
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {productReview.reviews?.length
          ? productReview.reviews.map((review) => (
              <ReviewProductItem item={review} cate={product.Category.name} />
            ))
          : "Chưa có đánh giá nào"}
      </div>

      <div
        className={`flex justify-center ${
          itemPerPage > productReview.total ? "!hidden" : "mb-10"
        }`}
      >
        <Pagination
          total={productReview.total}
          pageSize={itemPerPage}
          showSizeChanger={false}
          current={pageCurrent}
          onChange={(page) => setPageCurrent(page)}
        />
      </div>
    </>
  );
};

export default ReviewProduct;
