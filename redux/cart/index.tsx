import { createSlice } from "@reduxjs/toolkit";

import ToastNotify from "../../services/toast";

export interface ICartItem {
  id: string;
  name: string;
  slug: string;
  price: number;
  imageUrl: string;
  quantity: number;
}
const initialState: {
  cart: ICartItem[];
  discount: string;
} = { cart: [], discount: "" };
const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    CartInit(state, action) {
      state.cart = action.payload;
    },
    AddCart(state, action: { payload: ICartItem }) {
      const item = state.cart.find((item) => item.id == action.payload.id);

      if (item?.name) {
        item.quantity += action.payload.quantity;
        state.cart = [
          ...state.cart.filter((item) => item.id != action.payload.id),
          item,
        ];
      } else {
        state.cart.push(action.payload);
      }
      ToastNotify("Thêm vào giỏ hàng thành công").success();
    },
    UpdateAmount(
      state,
      action: {
        payload: {
          quantity: number;
          id: string;
        };
      }
    ) {
      const item = state.cart.find((item) => item.id == action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },

    DeleteCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    ResetCart(state) {
      state.cart = [];
      state.discount = "";
    },
    UpdateDiscount(state, action) {
      state.discount = action.payload;
    },
  },
});

export default CartSlice.reducer;
export const {
  AddCart,
  DeleteCart,
  CartInit,
  UpdateAmount,
  ResetCart,
  UpdateDiscount,
} = CartSlice.actions;
