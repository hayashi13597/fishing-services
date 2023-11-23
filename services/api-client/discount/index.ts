import apiClient from "..";
const DiscountApi = {
  path: "/discount/",

  verify(code: string) {
    return apiClient.post(this.path + "verify", {
      data: {
        code,
      },
    });
  },
};
export default DiscountApi;
