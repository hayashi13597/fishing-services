import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Pagination, Navigation } from "swiper/modules";
import { DiscountCalc, formatMoney } from "../../utils";

import Link from "next/link";
import { productType } from "../../common.types";
import CartUpdateAmount from "../cart/cartUpdateAmmount";
import { useDispatch } from "react-redux";
import { AddCart } from "../../redux/cart";
import { OpenViewAddToCart, closeViewDetail } from "../../redux/product";
import { IProduct } from "../home/ProductContainer";
import { ConfigProvider, Rate } from "antd";

const ModalProduct: React.FC<{
  handleClose: () => void;
  product: any;
}> = ({ handleClose, product }) => {
  const modalRef = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const { name, price, imageUrl, slug, id } = product;
  const dispatch = useDispatch();
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleAddTocart = () => {
    dispatch(AddCart({ name, price, imageUrl, slug, id, quantity: quantity }));
    dispatch(
      OpenViewAddToCart({
        name,
        price,
        imageUrl,
        slug: `${product.Category.slug}/${slug}`,
      })
    );
    dispatch(closeViewDetail());
    setQuantity(() => 1);
  };

  let listImage = [];
  try {
    listImage = JSON.parse(product.listSubimages);
  } catch (error) {}
  return (
    <div className="fixed  top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full flex items-center justify-center bg-[#00000080]">
      <div className="relative w-full max-w-3xl max-h-full" ref={modalRef}>
        {/* Modal content */}
        <div className="relative bg-[#ffffff] rounded-lg shadow">
          {/* Modal header */}
          <div className="flex items-start justify-between p-4 border-b rounded-t ">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                <Link
                  className="block hover:text-primary"
                  href={`/${product.Category.slug}/${slug}`}
                >
                  {name}
                </Link>
              </h3>
              <p>
                <ConfigProvider
                  theme={{
                    token: {
                      fontSize: 8,
                      colorText: "#C0034E",
                      controlHeightLG: 30,
                      marginXS: 1,
                    },
                  }}
                >
                  <Rate
                    style={{ color: "#DB4444" }}
                    disabled
                    defaultValue={product.stars}
                  />
                </ConfigProvider>
              </p>
            </div>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
              onClick={handleClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="max-h-96 overflow-auto md:flex py-3 px-6">
            <div className="w-full md:w-1/3">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="cursor-pointer"
              >
                <SwiperSlide>
                  <img src={imageUrl} alt={name} />
                </SwiperSlide>
                {listImage.map((item, index) => (
                  <SwiperSlide key={`sub-image-${index}`}>
                    <img src={item.imageUrl} alt={name} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="px-4">
              <div className="flex flex-col gap-3">
                <p className="text-lg">
                  Giá:{" "}
                  <span className="font-bold text-primary">
                    {formatMoney(price)}{" "}
                  </span>
                  <span className="text-sm ml-2 text-black opacity-40 line-through">
                    {DiscountCalc(product.price, product.sale_off)}
                  </span>
                </p>

                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <p className="md:whitespace-nowrap">Số lượng: </p>
                  <div>
                    <CartUpdateAmount
                      quatity={quantity}
                      setQuantity={setQuantity}
                      isHide={false}
                    />
                  </div>
                  <button onClick={handleAddTocart} className="button_send">
                    Thêm giỏ hàng
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-5 py-5 border-t border-gray-200">
                <p>Lượt bán: {product.sales}</p>
                <p>Lượt Xem: {product.view}</p>
                <p>
                  Danh mục:
                  <span className="capitalize">{product.Category.name} </span>
                </p>
                <Link
                  href={`/${product.Category.slug}/${slug}`}
                  className="text-primary font-bold group/view"
                >
                  Xem chi tiết{" "}
                  <span className="opacity-0 transition-all group-hover/view:opacity-100">
                    {">>"}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;
