"use client";
import React, { useState } from "react";
import { ConfigProvider, Rate } from "antd";
import CartUpdateAmount from "../../cart/cartUpdateAmmount";
import { useMediaQuery } from "react-responsive";
import { ProductDetail } from "../../../constants";
import { formatQuantity } from "../../../utils";
import ShareSocial from "../../ShareSocial";
import DescriptionItem from "../review/DesItem";
import ImageZoomOnHover from "../ImageZoomOnHover";
import ListSubImage from "../ListSubImage";

const ProductCart = ({ isShow = true }: { isShow?: boolean }) => {
  const [quatity, setQuantity] = useState(3);
  const [current, setCurrent] = useState("/assets/can-cau.jpg");
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <div className="lg:gap-12 md:gap-8 flex md:flex-row flex-col md:justify-start md:items-start justify-center items-center mt-3">
      <div className="w-[320px]">
        <div className="z-10">
          <ImageZoomOnHover
            src={current}
            zoomPosition={isDesktopOrLaptop ? "right" : "original"}
            href="san-pham-chi tiet"
          />
        </div>
        {isShow && (
          <div className="mt-[1px] relative">
            <ListSubImage
              handleChange={setCurrent}
              current={current}
              listImage={ProductDetail.product.listSubImage}
            />
          </div>
        )}
      </div>
      <div className="basis-full  md:block flex flex-col justify-center items-center">
        <h1 className="title-pro-detail text-2xl md:mt-0  mt-4 md:text-left text-center">
          {ProductDetail.product.name}
        </h1>

        <div>
          {isShow && (
            <section className="flex  gap-4 relative z-[0] mt-2">
              <div className="cursor-pointer flex sm:flex-row flex-col sm:items-start  items-center ">
                <span className="text-second underline mr-1 inline-block ">
                  4.6
                </span>
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
                  <Rate disabled defaultValue={ProductDetail.product.star} />
                </ConfigProvider>
              </div>
              <div className="border-x-[1px] px-4 pb-1 cursor-pointer  flex sm:flex-row flex-col sm:items-start  items-center">
                <span className="underline mr-1 ">
                  {formatQuantity(235542)}
                </span>
                <span className="text-[#767676] capitalize text-sm">
                  Đánh giá
                </span>
              </div>
              <div className="flex sm:flex-row flex-col sm:items-start  items-center">
                <span className=" mr-1">{formatQuantity(120)}</span>
                <span className="text-[#767676] capitalize text-sm">
                  đã bán
                </span>
              </div>
            </section>
          )}
          <section className="flex items-center my-2" aria-live="polite">
            <div className="flex items-center nmrSND">
              <div className="text-[#929292] mr-2 line-through">₫199.000</div>
              <div className="flex items-center">
                <div className=" text-primary font-semibold text-xl">
                  ₫169.000
                </div>
                <div className="discount bg-second">15% giảm</div>
              </div>
            </div>
          </section>
        </div>

        {isShow && (
          <div className="flex items-center justify-start gap-4">
            <div>QTY</div>
            <div>
              <CartUpdateAmount
                isHide={false}
                quatity={quatity}
                setQuantity={setQuantity}
              />
            </div>

            <button className="button_send">Thêm giỏ hàng</button>
          </div>
        )}
        <DescriptionItem des={ProductDetail.product.description} />
        <div>
          <ShareSocial link="/" />
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
