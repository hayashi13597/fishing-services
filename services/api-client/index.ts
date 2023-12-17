import axios from "axios";
import cookieClient from "../cookie";
const DOMAIN_HOST = process.env.DOMAIN_SERVER || "http://localhost:5000/";
const apiClient = axios.create({
  baseURL: DOMAIN_HOST,
  timeout: 4000,
  headers: { "Content-Type ": "application/json" },
});

// Thêm một bộ đón chặn request
apiClient.interceptors.request.use(
  function (config) {
    // Làm gì đó trước khi request dược gửi đi
    return config;
  },
  function (error) {
    // Làm gì đó với lỗi request
    return Promise.reject(error);
  }
);

// Thêm một bộ đón chặn response
apiClient.interceptors.response.use(
  function (response) {
    // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
    // Làm gì đó với dữ liệu response
    return response.data;
  },
  function (error) {
    // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
    // Làm gì đó với lỗi response
    return Promise.reject(error?.response?.data);
  }
);
export function handleAttachToken(AUTH_TOKEN: string) {
  apiClient.defaults.headers.common["Authorization"] = "Bearer " + AUTH_TOKEN;
  cookieClient.set("accessToken", AUTH_TOKEN, 60 * 60 * 24 * 1000 * 10);
  cookieClient.set("loggedIn", true);
}
export function handleAttachTokenNotSave(AUTH_TOKEN: string, isSave = false) {
  apiClient.defaults.headers.common["Authorization"] = "Bearer " + AUTH_TOKEN;
  isSave &&
    cookieClient.set("accessToken", AUTH_TOKEN, 60 * 60 * 24 * 1000 * 10);
  cookieClient.set("loggedIn", true);
}
export default apiClient;
