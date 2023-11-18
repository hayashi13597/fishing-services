import apiClient from "..";
import { ProductDetail, initialData } from "../../../constants";

const ProductDetailApi = {
  path: "/product-detail",
  // Lấy tát cả route sản phẩm
  get() {
    return initialData.map(({ slug }) => slug);
    // return apiClient.get(this.path, { params: { id } });
  },
  post(slug: string) {
    return {
      status: 200,
      message: "oke",
      data:
        initialData.find((item: any) => item.slug == slug) ||
        ProductDetail.product,
    };
    // return apiClient.post(this.path, { data: { slug } });
  },
  patch() {},
  delete() {},
};
export default ProductDetailApi;
