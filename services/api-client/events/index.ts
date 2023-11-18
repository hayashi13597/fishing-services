import apiClient from "..";
const EventApi = {
  path: "/event/",

  getAll() {
    return apiClient.get(this.path);
  },
};
export default EventApi;
