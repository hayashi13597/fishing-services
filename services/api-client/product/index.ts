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
  Filter(idCate = null, filter = "", limit = 8, skip = 0) {
    return apiClient.get(this.path + "filter", {
      params: { idCate, filter, limit, skip },
    });
  },
  search(search: string, limit: number, skip: number) {
    return apiClient.post(this.path + "search", {
      data: {
        search: search,
        limit,
        skip,
      },
    });
  },
};

export default ProductsApi;
