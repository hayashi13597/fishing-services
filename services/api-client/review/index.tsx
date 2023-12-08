import apiClient from "..";

const ReviewApi = {
  path: "/review/",
  GetReviewProduct(id: number, star: string, limit: number, skip: number) {
    return apiClient.get(this.path + id, {
      params: {
        star,
        limit,
        skip,
      },
    });
  },
  GetListReview(id: string, limit: number, skip: number) {
    return apiClient.post(this.path + "order", {
      data: {
        id,
        limit,
        skip,
      },
    });
  },
  Evaluate(id: string, idProduct: number, star: number, content: string) {
    return apiClient.post(this.path + "evaluate", {
      data: {
        id,
        star,
        content,
        idProduct,
      },
    });
  },
};
export default ReviewApi;
