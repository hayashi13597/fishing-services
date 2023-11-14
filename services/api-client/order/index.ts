import apiClient from "..";

const OrdertDetailApi = {
  path: "/order",
  // Lấy tát cả route sản phẩm
  get() {
    // return apiClient.get(this.path, { params: { id } });
  },
  post(data: any) {
    return apiClient.post(this.path, data);
  },
  patch() {},
  delete() {},
};
export default OrdertDetailApi;
