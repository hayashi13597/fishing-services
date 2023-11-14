import { IUploadAvata, IChangePassword } from "./user.type";
import apiClient, { handleAttachToken } from "..";
import cookieClient from "../../cookie";
const UserApi = {
  path: "/api",
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
    return apiClient.post(this.path + "/register", data);
  },
  login(data: any) {
    return apiClient.post(this.path + "/login", { data });
  },
  authenWithFirebase(data: any) {
    return apiClient.post(this.path + "/firebase", { data });
  },
  updateAccount(data: {
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

  deleteImage(id: string) {
    return apiClient({
      url: this.path,
      method: "POST",
      data: { id },
    });
  },
  uploadImage(data: IUploadAvata) {
    return apiClient({
      url: this.path,
      method: "POST",
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};
export default UserApi;
