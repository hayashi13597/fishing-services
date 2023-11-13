import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import UserApi from "../../services/api-client/user";
import { handleAttachToken } from "../../services/api-client";

export interface IAccount {
  id: string;
  username: string;
  role: "admin" | "member" | "manager";
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
}

const initialState: IAccount = {
  id: "dsadsadsa",
  username: "phamhoainam",
  role: "member",
  fullname: "Phạm hoài Nam",
  avatar: "/assets/avatar.png",
  email: "dsadsasdadsasda@gmail.com",
  phone: "",
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
      state.account = { ...state, ...action.payload };
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
      const account: IAccount = res.data;
      handleAttachToken(account.accessToken);
      return { account };
    } else {
      return Promise.reject("dont have token");
    }
  }
);

export const { updateAccount } = UserSlice.actions;

export default UserSlice.reducer;
