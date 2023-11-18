import apiClient from "..";
const ProductsApi = {
  path: "/product/",
  search(searchValue: String) {
    return apiClient.post(this.path + "search", { text: searchValue });
  },
  getAll() {
    return apiClient.get(this.path + "admin");
  },
  getOne(slug: String) {
    return apiClient.get(this.path + slug);
  },
  GetDataViewHome() {
    return apiClient.get(this.path + "home");
  },
  GetCategory() {
    return apiClient.get("/cate");
  },
};
export default ProductsApi;
