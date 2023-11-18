import { createSlice } from "@reduxjs/toolkit";
import { initialData } from "../../constants";
import { productType } from "../../common.types";
const initState: productType = {
  id: "",
  name: "",
  slug: "",
  price: 0,
  imageUrl: "/assets/can-cau.jpg",
  description: "",
};
const ProductDetail = createSlice({
  name: "productDetail",
  initialState: {
    isOpenModalPurchasedHistory: false,
    productModalHistoryDetail: {
      listOrder: [],
      info: null,
    },
    isOpenModalDetail: false,
    productDetail: initState,
    isOpenModalAddToCart: false,
    productAddToCart: {
      imageUrl: "",
      name: "",
      price: 0,
      slug: "",
    },
  },

  reducers: {
    openViewDetail(state, action) {
      state.productDetail = action.payload.productDetail;
      state.isOpenModalDetail = true;
    },
    closeViewDetail(state) {
      state.isOpenModalDetail = false;
    },
    OpenViewAddToCart(state, action) {
      state.productAddToCart = action.payload;
      state.isOpenModalAddToCart = true;
    },
    closeViewAddToCart(state) {
      state.isOpenModalAddToCart = false;
    },
    openModalPurchasedHistory(state, action) {
      state.productModalHistoryDetail = action.payload;
      state.isOpenModalPurchasedHistory = true;
    },
    closeModalPurchasedHistory(state) {
      state.isOpenModalPurchasedHistory = false;
    },
  },
});

export const {
  openViewDetail,
  closeViewDetail,
  OpenViewAddToCart,
  closeViewAddToCart,
  openModalPurchasedHistory,
  closeModalPurchasedHistory,
} = ProductDetail.actions;
export default ProductDetail.reducer;
