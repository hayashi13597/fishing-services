import apiClient from "..";
const ProductsApi = {
  path: "/products/",
  search(searchValue: String) {
    return apiClient.post(this.path + "search", { text: searchValue });
  },

  edit() {},
};
export default ProductsApi;
