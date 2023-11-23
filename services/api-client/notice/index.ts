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
  getNoticeAccount({ id, limit, skip }) {
    return apiClient.get(this.path, { params: { id, limit, skip } });
  },
};
export default NoticeApi;
