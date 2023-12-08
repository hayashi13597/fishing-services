import apiClient from "..";

const OrdertDetailApi = {
  path: "/order",
  // Lấy tát cả route sản phẩm
  get(id: string, limit: number, skip: number) {
    return apiClient.get(this.path + "/detail", {
      params: { id, limit, skip },
    });
  },
  GetDetail(order_id: string) {
    return apiClient.post(this.path, { data: { order_id } });
  },
  post(data: any) {
    return apiClient.post(this.path + "/create", data);
  },
  search(search: string) {
    return apiClient.post(this.path + "/search", {
      data: {
        search,
      },
    });
  },
  delete() {},
};
export default OrdertDetailApi;
