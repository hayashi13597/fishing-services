import apiClient from "..";

const CateApi = {
  path: "/cate/",
  GetAllCate() {
    console.log("cate get all");
    return apiClient.get(this.path);
  },
  GetOneCate(slug: string, limit = 12, skip = 0) {
    return apiClient.post(this.path + slug, {
      params: {
        limit,
        skip,
      },
    });
  },
  async GetOneCateSeo(slug: string) {
    const res = await apiClient.post(this.path + "seo/" + slug);
    const data = await res.data.category;
    return data;
  },
};

export default CateApi;
