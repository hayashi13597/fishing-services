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
  stock: "",
};
const ProductDetail = createSlice({
  name: "productDetail",
  initialState: {
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
  },
});

export const {
  openViewDetail,
  closeViewDetail,
  OpenViewAddToCart,
  closeViewAddToCart,
} = ProductDetail.actions;
export default ProductDetail.reducer;
