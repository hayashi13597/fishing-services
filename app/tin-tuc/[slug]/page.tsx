import React from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import MostView from "../../../components/newDetail/MostView";
import NewContent from "../../../components/newDetail/NewContent";
import { DOMAIN_HOST } from "../../../utils";
import EventApi from "../../../services/api-client/events";

import { listIconsSeo } from "../../../constants";
import { notFound } from "next/navigation";
import { INewItem } from "../../../components/screen/NewScreen";
export const revalidate = 3600;
interface ParamsBlog {
  params: { slug: string };
}
export async function generateMetadata({ params }: ParamsBlog) {
  const res = await EventApi.getSlug(params.slug);
  const data: INewItem = await res.event;
  return {
    title: data.title,
    description: data.description,

    metadataBase: new URL(`${DOMAIN_HOST}/${data.slug}`),
    authors: ["ocdaocauca.online", "ocdaocauca.online"],
    publisher: "acdaocauca",
    alternates: {
      canonical: `${DOMAIN_HOST}/${data.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      siteId: "1646660186759892992",
      creator: data?.User?.fullname || "Phạm Hoài Nam",
      creatorId: "1646660186759892992",
      images: [data.imageUrl],
    },
    openGraph: {
      title: data.title,
      description: data.description,
      images: {
        url: data.imageUrl,
        alt: data.title,
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
interface ISlugNew {
  slug: string;
}
export async function generateStaticParams() {
  const data: Promise<ISlugNew[]> = await EventApi.getAllSlug();
  const listParams = await data;
  return listParams.map((item) => ({
    slug: item.slug,
  }));
}

const NewDetail = async ({ params }: ParamsBlog) => {
  const { slug } = params;
  const res = await EventApi.getSlug(slug);
  const data = await res.event;
  const listNewsTop = await res.listNewsTop;
  if (!data.id) notFound();
  const structurePage = [
    { page: "Tin tức ", link: "/tin-tuc" },
    {
      page: data.title,
      link: `/tin-tuc/${data.slug}`,
      last: true,
    },
  ];
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <Breadcrumb structurePage={structurePage} isDisplay={false} />
        <div className="flex flex-col md:flex-row gap-10">
          <NewContent newDetail={data} />
          <MostView ListNews={listNewsTop} />
        </div>
      </div>
    </div>
  );
};

export default NewDetail;
