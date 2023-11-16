import { IInfoAdd } from "./notice.type";
import apiClient from "..";
const NoticeApi = {
  path: "/notice",
  add(data: IInfoAdd) {
    return apiClient.post(this.path, { data });
  },
  updateStatusView(data: { id: string }) {
    return apiClient.put(this.path, { data });
  },
  getAll(data: { id: string }) {
    return apiClient.post(this.path, { data });
  },
};
export default NoticeApi;
