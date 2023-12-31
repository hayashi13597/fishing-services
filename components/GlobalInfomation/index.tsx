"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchFirstLoginWithToken } from "../../redux/user";
import { AppDispatch, RootState } from "../../redux/store";
import cookieClient from "../../services/cookie";
import apiClient from "../../services/api-client";
import ModalAddProduct from "../modal/AddProduct";
import ModalViewDetailProduct from "../Products/ModalProduct";
import { UpdateListCate, closeViewDetail } from "../../redux/product";
import { CartInit } from "../../redux/cart";
import ModalViewHistoryDetail from "../modal/ModalViewHistoryDetail";
import { AddNotice } from "../../redux/notices";
import CateApi from "../../services/api-client/cate";
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
    CateApi.GetAllCate().then((res) => {
      if (res.data?.categories) {
        const listCate = res.data.categories.map((cate) => ({
          id: cate.id,
          name: cate.name,
          slug: cate.slug,
          description: cate.description,
        }));
        dispatch(UpdateListCate(listCate));
      }
    });
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
      let listStringCart: any = localStorage.getItem("cart");
      if (listStringCart) {
        listStringCart = JSON.parse(listStringCart);
        if (listStringCart) {
          listStringCart = listStringCart.cart;
          if (listStringCart) {
            dispatch(CartInit(listStringCart || []));
          }
        }
      }
    }
  }, []);
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
