import apiClient from "..";
const EventApi = {
  path: "/event/",

  getAll() {
    return apiClient.get(this.path);
  },
  async getNewScreen() {
    const res = await apiClient.post(this.path + "new");
    return await res.data;
  },
  async getSlug(slug: string) {
    const res = await apiClient.get(this.path + slug);
    const newDetail = await res.data;
    return newDetail;
  },
  async getAllSlug() {
    const res = await apiClient.post(this.path + "slug");
    const listSlugs = await res.data.listSlugs;
    return listSlugs;
  },
};
export default EventApi;
