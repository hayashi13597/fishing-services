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
    keywords: [data.keywords || data.name],
    metadataBase: new URL(`${DOMAIN_HOST}/${data.slug}`),
    authors: ["blog.zecky.online", "zecky.online"],
    creator: "Phạm Hoài Nam",
    publisher: "Phạm Hoài Nam",
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
          "@id": `${DOMAIN_HOST}/${data.slug}`,
          name: `✅${data.name}`,
        },
      },
    ],
  };

  const schema2 = {
    "@context": "http://schema.org/",
    "@type": "Book",
    name: data.name,
    description: data.description,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: `${data.star}`,
      bestRating: "5",
      ratingCount: `${data.totalRate || 1}`,
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }}
      />
      <ProductDetail />
    </div>
  );
};
export default page;
