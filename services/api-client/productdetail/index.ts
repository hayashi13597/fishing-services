import apiClient from "..";
import { ProductDetail, initialData } from "../../../constants";

const ProductDetailApi = {
  path: "/product/",
  async GetSeoProduct(slug: string) {
    const res = await apiClient.get(this.path + "seo/" + slug);
    const product = await res.data.product;
    return product;
  },
  async ListProductDetail(slug: string) {
    const res = await apiClient.get(this.path + slug);
    const data = await res.data;
    return data;
  },
};
export default ProductDetailApi;
