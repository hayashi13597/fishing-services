"use client";
import React, { useEffect, useState } from "react";
import TopNews from "../../components/NewsPage/TopNews";
import PopularContainer from "../../components/NewsPage/Popular";
import Latest from "../../components/NewsPage/Latest";
import Breadcrumb from "../../components/Breadcrumb";
import { structurePageType } from "../../common.types";
import EventApi from "../../services/api-client/events";
import { message } from "antd";

const structurePage: structurePageType[] = [
  { page: "Tin tức", link: "/tin-tuc", last: true },
];
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tin tức mới cập nhập tại Ốc đảo câu cá",
  description:
    "Tin tức và sự kiện luôn cập nhập một số giải thưởng hấp dẫn cho cần thủ đến khắp mọi nơi trên đất nước",
};

export interface INewItem {
  id: string;
  title: string;
  isEvent: boolean;
  timeEvent: number;
  description: string;
  imageUrl: string;
  idPath: string;
  slug: string;
  time_end: number;
  views: number;
  content: string;
  visiable: boolean;
  createdAt: string;
  updatedAt: string;
  User: {
    avatar: string;
    fullname: string;
  };
}
const News = () => {
  const [ListContentNew, setListcontentNews] = useState({
    listTopNews: [],
    listNewHot: [],
    listEventHost: [],
    listNewNew: [],
    listEventNews: [],
  });
  useEffect(() => {
    EventApi.getNewScreen()
      .then((res) => {
        setListcontentNews(() => res.data);
      })
      .catch(() => {
        message.error("Lỗi server");
      });
  }, []);
  return (
    <div className="bg-white">
      <div className="container mx-auto pb-10">
        <Breadcrumb structurePage={structurePage} title="Tin tức " />

        {ListContentNew.listTopNews.length > 0 && (
          <TopNews
            itemHost={ListContentNew.listTopNews[0]}
            listSubItem={ListContentNew.listTopNews.slice(1)}
          />
        )}
        <PopularContainer
          ListEvents={ListContentNew.listNewHot}
          title="Tin tức nổi bật"
        />
        <PopularContainer
          ListEvents={ListContentNew.listEventHost}
          title="Sự kiện nổi bật"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Latest
            listNews={ListContentNew.listNewNew}
            title="Tin tức mới nhất"
          />
          <Latest
            listNews={ListContentNew.listEventNews}
            title="Sự kiện mới nhất"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
