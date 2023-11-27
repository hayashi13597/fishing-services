import Image from "next/image";
import React, { useState } from "react";
import ReviewModal from "./ReviewModal";
import { IProduct } from "../../home/ProductContainer";

type ReviewItemType = {
  product?: IProduct;
};

const ReviewItem = ({ product }: ReviewItemType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="p-3 bg-[#ffff] rounded-md mt-2">
        <div className="flex items-center gap-5 border-y md:py-3">
          <div className="w-20 h-20 md:w-28 md:h-28 overflow-hidden flex items-center justify-center">
            <Image
              src={`/assets/can-cau.jpg`}
              alt={`can cau`}
              width={300}
              height={300}
              className="w-full object-cover"
            />
          </div>
          <div className="flex-grow flex gap-10">
            <div className="flex-grow">
              <h3 className="text-text/80 line-clamp-2 font-semibold">
                Cần câu tay chuyên dụng cho câu cá
              </h3>
              <p className="text-sm text-text/50">
                Danh mục: <span>Cần câu</span>
              </p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-sm">350,000đ</p>
              <p className="text-text/50 text-sm">x1</p>
            </div>
          </div>
        </div>
        <div className="py-2 flex flex-col gap-3 items-end">
          <p className="text-sm">Thành tiền: 350,000đ</p>
          <button
            className="w-1/3 text-white bg-primary rounded-lg px-4 py-2 hover:opacity-80 transition-all duration-300"
            onClick={showModal}
          >
            Đánh giá
          </button>
        </div>
      </div>
      <ReviewModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleCancel={handleCancel}
        product={product}
      />
    </>
  );
};

export default ReviewItem;
