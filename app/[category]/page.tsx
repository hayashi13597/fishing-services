import React, { FC } from "react";
import ProductsApi from "../../services/api-client/product";
import CateGoryScreen from "../../components/screen/CateGoryScreen";
import { listIconsSeo } from "../../constants";
import CateApi from "../../services/api-client/cate";
import { DOMAIN_HOST } from "../../utils";
export const revalidate = 3600;
interface ISlugCateProduct {
  slug: string;
  Category: {
    slug: string;
  };
}
interface ParamsBlog {
  params: { category: string; slug: string };
}
export async function generateMetadata({ params }: ParamsBlog) {
  const data = await CateApi.GetOneCateSeo(params.category);
  return {
    title: data.name,
    description: data.description,

    metadataBase: new URL(`${DOMAIN_HOST}/${data.slug}`),
    authors: ["ocdaocauca.online", "ocdaocauca.online"],
    publisher: "acdaocauca",
    alternates: {
      canonical: `${DOMAIN_HOST}/${data.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: data.name,
      description: data.description,
      siteId: "1646660186759892992",
      creator: "blog.zecky.online",
      creatorId: "1646660186759892992",
      images: [data.imageUrl],
    },
    openGraph: {
      title: data.name,
      description: data.description,
      images: {
        url: data.imageUrl,
        alt: data.name,
      },
      type: "article",
      publishedTime: data.updatedAt,
    },
    icons: listIconsSeo,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
      },
    },
  };
}
export async function generateStaticParams() {
  const data: Promise<ISlugCateProduct[]> = await ProductsApi.GetAllSlug();
  const listParams = await data;
  return listParams.map((item) => ({
    category: item.Category.slug,
    slug: item.slug,
  }));
}

const page: FC<ParamsBlog> = async ({ params }) => {
  const { category, slug } = params;

  return (
    <div className="container mx-auto  md:py-4  py-5 min-h-screen">
      <CateGoryScreen category={category} />
    </div>
  );
};

export default page;
