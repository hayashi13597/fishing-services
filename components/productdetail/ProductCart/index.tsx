"use client";
import React, { useState } from "react";
import { ConfigProvider, Rate } from "antd";
import CartUpdateAmount from "../../cart/cartUpdateAmmount";
import { useMediaQuery } from "react-responsive";
import { formatMoney, formatQuantity } from "../../../utils";
import ShareSocial from "../../ShareSocial";
import DescriptionItem from "./review/DesItem";
import ImageZoomOnHover from "../ImageZoomOnHover";
import ListSubImage from "../ListSubImage";
import { useDispatch } from "react-redux";
import { AddCart } from "../../../redux/cart";
import { OpenViewAddToCart, closeViewDetail } from "../../../redux/product";
import { IProduct } from "../../home/ProductContainer";
const ProductCart = ({
  isShow = true,
  product,
}: {
  isShow?: boolean;
  product: IProduct;
}) => {
  const dispatch = useDispatch();
  const [quatity, setQuantity] = useState(1);
  const [current, setCurrent] = useState(product.imageUrl);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  let listImage = [];
  try {
    listImage = JSON.parse(product.listSubimages);
  } catch (error) {}
  const handleAddTocart = () => {
    const { name, price, imageUrl, slug, id, Category } = product;
    dispatch(AddCart({ name, price, imageUrl, slug, id, quantity: quatity }));
    dispatch(
      OpenViewAddToCart({
        name,
        price,
        imageUrl,
        slug: `${Category.slug}/${slug}`,
      })
    );
    dispatch(closeViewDetail());
    setQuantity(() => 1);
  };
  return (
    <div className="lg:gap-12 md:gap-8 flex md:flex-row flex-col md:justify-start md:items-start justify-center items-center mt-3">
      <div className="w-[320px]">
        <div className="z-10">
          <div className="z-10">
            <ImageZoomOnHover
              src={current}
              zoomPosition={isDesktopOrLaptop ? "right" : "original"}
              href="san-pham-chi-tiet"
            />
          </div>
          {isShow && (
            <div className="mt-[1px] ">
              <ListSubImage
                handleChange={setCurrent}
                current={current}
                listImage={listImage ? listImage : []}
              />
            </div>
          )}
        </div>
      </div>
      <div className="basis-full  md:block flex flex-col justify-center items-center">
        <h1 className="title-pro-detail text-2xl md:mt-0  mt-4 md:text-left text-center">
          {product.name}
        </h1>

        <div>
          {isShow && (
            <section className="flex  gap-4 relative z-[0] mt-2">
              <div className="cursor-pointer flex sm:flex-row flex-col sm:items-center items-center">
                <span className="text-primary underline mr-1 inline-block ">
                  {product.stars}
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
                  <Rate
                    style={{ color: "#DB4444" }}
                    disabled
                    defaultValue={product.stars}
                  />
                </ConfigProvider>
              </div>
              <div className="border-x-[1px] px-4 pb-1 cursor-pointer  flex sm:flex-row flex-col sm:items-center items-center">
                <span className="underline mr-1 ">{formatQuantity(1)}</span>
                <span className="text-[#767676] capitalize text-sm">
                  Đánh giá
                </span>
              </div>
              <div className="flex sm:flex-row flex-col sm:items-center  items-center">
                <span className=" mr-1">
                  {formatQuantity(Number(product.sales))}
                </span>
                <span className="text-[#767676] capitalize text-sm">
                  đã bán
                </span>
              </div>
            </section>
          )}
          <section className="flex items-center my-2" aria-live="polite">
            <div className="flex items-center nmrSND">
              <div className="text-[#929292] mr-2 line-through">
                {product.sale_off
                  ? formatMoney((1 + product.sale_off / 100) * product.price)
                  : ""}
              </div>
              <div className="flex items-center">
                <div className=" text-primary font-semibold text-xl">
                  {formatMoney(product.price)}
                </div>
                {product.sale_off ? (
                  <div className="discount bg-primary">
                    giảm {product.sale_off}%
                  </div>
                ) : (
                  ""
                )}
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

            <button onClick={handleAddTocart} className="button_send">
              Thêm giỏ hàng
            </button>
          </div>
        )}
        <DescriptionItem des={product.content} />
        <div>
          <ShareSocial link={`${product.Category.slug}/${product.slug}`} />
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
