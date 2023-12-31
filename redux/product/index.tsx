import { createSlice } from "@reduxjs/toolkit";
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
    listCate: [],
    isOpenModalPurchasedHistory: false,
    productModalHistoryDetail: {
      idOrder: "",
      info: {
        address: "",
        codebill: "",
        shipping_fee: 0,
        discount: 0,
      },
    },
    isOpenModalDetail: false,
    productDetail: {
      description: "",
      name: "",
      price: "",
      sales: "",
      sale_off: "",
      slug: "",
      imageUrl: "",
      view: 0,
      stars: 5,
      content: "",
      visiable: false,
      listSubimages: "", // DẠNG json nha anh
      id: "",
      Category: {
        id: "",
        name: "",
        slug: "",
      },
      User: {
        avatar: "",
        fullname: "",
      },
      createdAt: "",
      updatedAt: "",
    },
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
    UpdateListCate(state, action) {
      state.listCate = action.payload;
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
  UpdateListCate,
} = ProductDetail.actions;
export default ProductDetail.reducer;
