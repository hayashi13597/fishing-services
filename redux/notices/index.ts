import { createSlice } from "@reduxjs/toolkit";

import ToastNotify from "../../services/toast";

export interface INotice {
  id: string;
  title: string;
  content: string;
  kind: number;
  isSee: boolean;
  link: string;
}
const initialState: {
  notice: INotice[];
  numberView: number;
} = { notice: [], numberView: 0 };
const NoticeSlice = createSlice({
  name: "notice",
  initialState: initialState,
  reducers: {
    AddNotice(state, action) {
      state.notice = action.payload;
      state.numberView = state.notice.filter(
        (item) => item.isSee == false
      ).length;
    },
    UpdateNotice(state, action) {
      const findItem = state.notice.find(
        (item) => item.id == action.payload.id
      );
      if (findItem) {
        state.notice = [
          action.payload,
          ...(state.notice.filter((item) => item.id != action.payload.id) ||
            []),
        ];
      }
    },
    UploadIsViewNotice(state) {
      state.numberView = 0;
    },
    LogOutNotice(state) {
      state.notice = [];
      state.numberView = 0;
    },
  },
});

const NoticeReducer = NoticeSlice.reducer;
export const { UpdateNotice, AddNotice, UploadIsViewNotice, LogOutNotice } =
  NoticeSlice.actions;
export default NoticeReducer;
