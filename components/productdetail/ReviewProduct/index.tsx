import React from "react";
import ReviewProductItem from "./ReviewProductItem";
import { FaRegStar, FaStar } from "react-icons/fa";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "react-swisskit";

const ReviewProduct = () => {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const starFilter = params.get("filter") || "all";

  const handleFilter = (star: number | string) => {
    router.push(`${pathname}?filter=${star}`, { scroll: false });
  };

  return (
    <>
      <div className="flex items-center gap-10 border border-primary p-5 mb-10">
        <div className="flex flex-col items-center">
          <p className="text-primary text-xl">
            <span className="text-3xl font-bold">5</span> trên 5
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
        <div className="flex gap-5">
          <button
            onClick={() => handleFilter("all")}
            className={cn(
              "px-4 py-2 border",
              starFilter === "all" ? "border-primary text-primary" : ""
            )}
          >
            Tất cả
          </button>
          <button
            onClick={() => handleFilter(5)}
            className={cn(
              "px-4 py-2 border",
              starFilter === "5" ? "border-primary text-primary" : ""
            )}
          >
            5 Sao (13)
          </button>
          <button
            onClick={() => handleFilter(4)}
            className={cn(
              "px-4 py-2 border",
              starFilter === "4" ? "border-primary text-primary" : ""
            )}
          >
            4 Sao (0)
          </button>
          <button
            onClick={() => handleFilter(3)}
            className={cn(
              "px-4 py-2 border",
              starFilter === "3" ? "border-primary text-primary" : ""
            )}
          >
            3 Sao (0)
          </button>
          <button
            onClick={() => handleFilter(2)}
            className={cn(
              "px-4 py-2 border",
              starFilter === "2" ? "border-primary text-primary" : ""
            )}
          >
            2 Sao (0)
          </button>
          <button
            onClick={() => handleFilter(1)}
            className={cn(
              "px-4 py-2 border",
              starFilter === "1" ? "border-primary text-primary" : ""
            )}
          >
            1 Sao (0)
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <ReviewProductItem />
        <ReviewProductItem />
        <ReviewProductItem />
        <ReviewProductItem />
      </div>
    </>
  );
};

export default ReviewProduct;
