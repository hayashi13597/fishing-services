import apiClient from "..";

const ProductsApi = {
  path: "/product/",

  getAll() {
    return apiClient.get(this.path + "admin");
  },
  async GetAllSlug() {
    const res = await apiClient.get(this.path + "allslug");
    const listParams = await res.data.products;
    return listParams;
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
  search(search: string) {
    return apiClient.post(this.path + "search", {
      data: {
        search: search,
      },
    });
  },
};

export default ProductsApi;
