import { IProduct } from "../components/home/ProductContainer";
import { INewItem } from "../components/screen/NewScreen";
import CateApi from "../services/api-client/cate";
import EventApi from "../services/api-client/events";
import ProductsApi from "../services/api-client/product";
import { DOMAIN_HOST } from "../utils";

const domain = DOMAIN_HOST;
export default async function sitemap() {
  const listurl = [
    domain,
    `${domain}/chinh-sach-bao-mat`,
    `${domain}/dieu-khoan-su-dung`,
    `${domain}/gio-hang`,
    `${domain}/gioi-thieu`,
    `${domain}/lien-he`,
    `${domain}/tai-khoan`,
    `${domain}/thanh-toan`,
    `${domain}/tim-kiem`,
    `${domain}/dang-ky`,
    `${domain}/dang-nhap`,
  ];
  const listData = listurl.map((url) => ({
    url,
    lastModified: new Date(Date.now()).toISOString(),
  }));

  const ListProduct: IProduct[] = await ProductsApi.GetAllSlug();
  const ListSlugProduct = ListProduct.map((item) => ({
    url: `${domain}/${item.Category.slug}/${item.slug}`,
    lastModified: new Date(Date.now()).toISOString(),
  }));

  const ListNews: INewItem[] = await EventApi.getAllSlug();
  const listSeoNews = ListNews.map((item) => ({
    url: `${domain}/tin-tuc/${item.slug}`,
    lastModified: new Date(Date.now()).toISOString(),
  }));
  let listCategory: any = await CateApi.GetAllCate();
  listCategory = await listCategory.data.categories;

  listCategory = listCategory.map((item) => ({
    url: `${domain}/${item.slug}`,
    lastModified: new Date(Date.now()).toISOString(),
  }));
  return [...listData, ...ListSlugProduct, ...listSeoNews, ...listCategory];
}
