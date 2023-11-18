import ProductDetail from "../../components/productdetail";
import { TProductDetail, listIconsSeo, initialData } from "../../constants";
import { notFound } from "next/navigation";
import ProductDetailApi from "../../services/api-client/productdetail";

interface ParamsBlog {
  params: { slug: string };
}
type DataType = {
  data: TProductDetail;
  status: number;
};
const DOMAIN_HOST = process.env.DOMAIN_HOST || "http://localhost:3000/";
export async function generateMetadata({ params: { slug } }: ParamsBlog) {
  const dataResponse: any = await ProductDetailApi.post(slug);
  const { data, status } = dataResponse;
  if (status >= 400) {
    return {};
  }

  return {
    title: data.name,
    description: data.description,
  };
}

export async function generateStaticParams() {
  const listSlug = ProductDetailApi.get();
  const path = listSlug.map((slug) => ({
    slug,
  }));

  return path;
}
const page = async ({ params: { slug } }: ParamsBlog) => {
  const dataResponse: any = await ProductDetailApi.post(slug);
  const { data, status } = dataResponse;
  if (status >= 400) {
    return notFound();
  }

  return (
    <div>
      <ProductDetail slug={slug} />
    </div>
  );
};
export default page;
