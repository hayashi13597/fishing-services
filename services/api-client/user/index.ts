import { IUploadAvata, IChangePassword } from "./user.type";
import apiClient, { handleAttachToken } from "..";
import cookieClient from "../../cookie";
const UserApi = {
  path: "/user",
  loginWithToken() {
    const accessToken = cookieClient.get("accessToken");
    if (accessToken) {
      handleAttachToken(accessToken);
      return apiClient.post(this.path + "/firstlogin");
    } else {
      return false;
    }
  },
  register(data: any) {
    return apiClient.post(this.path + "/register", { data });
  },
  login(data: any) {
    return apiClient.post(this.path + "/login", { data });
  },
  authenWithFirebase(data: any) {
    return apiClient.post(this.path + "/firebase", { data });
  },
  updateAccount(data: {
    id: string;
    email: string;
    fullname: string;
    phone: string;
    address: string;
  }) {
    return apiClient.put(this.path, { data });
  },

  changePassword(data: IChangePassword) {
    return apiClient.post(this.path + "/changepassword", { data });
  },
  checkAccountMissPassword(data: { username: string; email: string }) {
    return apiClient.post(this.path + "/verify", { data });
  },

  ResetAvatar(id: string) {
    return apiClient.post(this.path + "/resetavatar", { data: { id } });
  },
  ChangeAvatar(data: IUploadAvata) {
    return apiClient({
      url: this.path + "/changeavatar",
      method: "POST",
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};
export default UserApi;
