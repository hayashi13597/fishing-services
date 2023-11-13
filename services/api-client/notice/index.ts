import { IInfoAdd } from "./notice.type";
import apiClient from "..";
const NoticeApi = {
  path: "/notice",
  add(data: IInfoAdd) {
    return apiClient.post(this.path, { data });
  },

  edit() {},
};
export default NoticeApi;
