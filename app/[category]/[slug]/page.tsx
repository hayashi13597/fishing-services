import { notFound } from "next/navigation";
import React from "react";
import ProductDetailApi from "../../../services/api-client/productdetail";
import ProductDetail from "../../../components/productdetail";
import { DOMAIN_HOST } from "../../../utils";
import { listIconsSeo } from "../../../constants";
import { IProduct } from "../../../components/home/ProductContainer";
export const revalidate = 3600;
interface ParamsBlog {
  params: { category: string; slug: string };
}
export async function generateMetadata({ params }: ParamsBlog) {
  const data: IProduct = await ProductDetailApi.GetSeoProduct(params.slug);
  if (!data.name) {
    return {};
  }
  return {
    title: data.name,
    description: data.description,
    keywords: data.name,
    metadataBase: new URL(`${DOMAIN_HOST}/${data.slug}`),
    authors: [data.User.fullname, "ocdaocauca.online"],
    publisher: data.User.fullname,
    alternates: {
      canonical: `${DOMAIN_HOST}/${data.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: data.name,
      description: data.description,
      siteId: "1646660186759892992",
      creator: data.User.fullname,
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
const page = async ({ params }: ParamsBlog) => {
  const { slug, category } = params;
  const res = await ProductDetailApi.ListProductDetail(slug);
  const product: IProduct = (await res.ProductDetail) || {};
  const listProductSame = (await res.listProductSame) || [];

  const schema1 = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": DOMAIN_HOST,
          name: "Trang chủ",
        },
      },

      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": DOMAIN_HOST,
          name: "blog-developer",
        },
      },

      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@id": `${DOMAIN_HOST}/${product.Category.slug}/${product.slug}`,
          name: `✅${product.name}`,
        },
      },
    ],
  };
  const schema2 = {
    "@context": "http://schema.org/",
    "@type": "Book",
    name: product.name,
    description: product.description,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: `${product.stars}`,
      ratingCount: `${listProductSame.length + 10 || 1}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }}
      />
      <ProductDetail
        listProductSame={listProductSame}
        product={product}
        category={category}
        slug={slug}
      />
    </>
  );
};

export default page;
