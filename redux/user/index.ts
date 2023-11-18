import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import UserApi from "../../services/api-client/user";
import { handleAttachToken } from "../../services/api-client";
import { AddNotice, INotice } from "../notices";

export interface IAccount {
  id: string;
  username: string;
  fullname: string;
  avatar: string;
  email: string;
  address: string;
  phone: string;
  accessToken: string;
  visiable: boolean;
  uid: string | null;
  created_at: string;
  updated_at: string;
  role: string;
}

const initialState: IAccount = {
  id: "",
  username: "",
  fullname: "",
  avatar: "/assets/avatar.png",
  email: "",
  phone: "",
  role: "",
  address: "",
  accessToken: "",
  visiable: false,
  uid: null,
  created_at: "",
  updated_at: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    account: initialState,
  },
  reducers: {
    updateAccount(state, action) {
      state.account = { ...state.account, ...action.payload };
    },
    LogoutAccount(state) {
      state.account = initialState;
    },
  },
  extraReducers(builder) {
    builder.addCase(FetchFirstLoginWithToken.fulfilled, (state, action) => {
      state.account = action.payload.account;
    });
  },
});

export const FetchFirstLoginWithToken = createAsyncThunk(
  "users/loginWithToken",
  async () => {
    const res = await UserApi.loginWithToken();
    if (res && res.data) {
      const { account, notices = [] } = res.data;
      handleAttachToken(account.accessToken);
      return { account, notices };
    } else {
      return Promise.reject("dont have token");
    }
  }
);

export const { updateAccount, LogoutAccount } = UserSlice.actions;

export default UserSlice.reducer;
