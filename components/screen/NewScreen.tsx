"use client";
import React, { useEffect, useState } from "react";
import EventApi from "../../services/api-client/events";
import { message } from "antd";
import Breadcrumb from "../Breadcrumb";
import TopNews from "../NewsPage/TopNews";
import Latest from "../NewsPage/Latest";
import { structurePageType } from "../../common.types";
import PopularContainer from "../../components/NewsPage/Popular";

const structurePage: structurePageType[] = [
  { page: "Tin tức - Sự kiện", link: "/tin-tuc", last: true },
];

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
const NewScreen = () => {
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
    <div className="">
      <div className="container mx-auto pb-10">
        <Breadcrumb structurePage={structurePage} title="Tin tức - Sự kiện" />

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

export default NewScreen;
