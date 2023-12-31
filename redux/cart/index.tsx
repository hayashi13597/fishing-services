import { createSlice } from "@reduxjs/toolkit";

import ToastNotify from "../../services/toast";

export interface ICartItem {
  id: any;
  name: string;
  slug: string;
  price: number;
  imageUrl: string;
  quantity: number;
}
const initialState: {
  cart: ICartItem[];
  discount: string;
  value: number;
} = { cart: [], discount: "", value: 0 };
const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    CartInit(state, action) {
      state.cart = action.payload;
    },
    AddCart(state, action: { payload: ICartItem }) {
      const item = state.cart.find((item) => item.id == action.payload.id);

      if (item?.id) {
        item.quantity += action.payload.quantity;

        // state.cart = [
        //   item,
        //   ...state.cart.filter((item) => item.id != action.payload.id),
        // ];
        ToastNotify("Cập nhập giỏ hàng thành công").success();
      } else {
        state.cart.push(action.payload);
        ToastNotify("Thêm vào giỏ hàng thành công").success();
      }
    },
    UpdateAmount(
      state,
      action: {
        payload: {
          quantity: number;
          id: number;
        };
      }
    ) {
      const item = state.cart.find((item) => item.id == action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },

    DeleteCart(state, action) {
      state.cart = state.cart.filter((item) => item.id != action.payload.id);
    },
    ResetCart(state) {
      state.cart = [];
      state.discount = "";
      state.value = 0;
    },
    UpdateDiscount(state, action) {
      state.discount = action.payload.discount;
      state.value = action.payload.value;
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
