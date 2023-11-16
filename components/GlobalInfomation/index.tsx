"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchFirstLoginWithToken } from "../../redux/user";
import { AppDispatch, RootState } from "../../redux/store";
import cookieClient from "../../services/cookie";
import apiClient from "../../services/api-client";
import ModalAddProduct from "../modal/AddProduct";
import ModalViewDetailProduct from "../Products/ModalProduct";
import { closeViewDetail } from "../../redux/product";
import { CartInit } from "../../redux/cart";
import ModalViewHistoryDetail from "../modal/ModalViewHistoryDetail";
import { AddNotice } from "../../redux/notices";
const GlobalInfomation = () => {
  const {
    isOpenModalDetail,
    productDetail,
    isOpenModalAddToCart,
    productAddToCart,
    isOpenModalPurchasedHistory,
    productModalHistoryDetail,
  } = useSelector((state: RootState) => state.productDetail);
  const dispatch: any = useDispatch();

  useEffect(() => {
    const accessToken = cookieClient.get("accessToken");
    if (accessToken) {
      apiClient.defaults.headers.common["Authorization"] =
        "Bearer " + accessToken;
      dispatch(FetchFirstLoginWithToken()).then((res) => {
        if (res?.payload?.notices) {
          dispatch(AddNotice(res.payload.notices));
        }
      });
    }

    if (typeof window !== "undefined") {
      console.log(localStorage.getItem("cart"));
      let listStringCart: any = localStorage.getItem("cart");
      if (listStringCart) {
        listStringCart = JSON.parse(listStringCart);
        console.log(listStringCart);
        if (listStringCart) {
          listStringCart = listStringCart.cart;
          if (listStringCart) {
            console.log("listStringCart", listStringCart);
            dispatch(CartInit(listStringCart || []));
          }
        }
      }
    }
  }, []);
  console.log("isOpenModalDetail", isOpenModalDetail);
  return (
    <div>
      {isOpenModalAddToCart && <ModalAddProduct product={productAddToCart} />}

      {isOpenModalDetail && (
        <ModalViewDetailProduct
          handleClose={() => dispatch(closeViewDetail())}
          product={productDetail}
        />
      )}
      {isOpenModalPurchasedHistory && <ModalViewHistoryDetail />}
    </div>
  );
};

export default GlobalInfomation;
