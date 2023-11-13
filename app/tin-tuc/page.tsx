import React from "react";
import TopNews from "../../components/NewsPage/TopNews";
import Popular from "../../components/NewsPage/Popular";
import Latest from "../../components/NewsPage/Latest";
import Breadcrumb from "../../components/Breadcrumb";
import { structurePageType } from "../../common.types";

const structurePage: structurePageType[] = [
  { page: "Tin tức", link: "/tin-tuc", last: true },
];

const News = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto pb-10">
        <Breadcrumb structurePage={structurePage} title="Tin tức - Sự kiện" />
        <TopNews />
        <Popular title="Tin tức nổi bật" />
        <Popular title="Sự kiện nổi bật" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Latest title="Tin tức mới nhất" />
          <Latest title="Sự kiện mới nhất" />
        </div>
      </div>
    </div>
  );
};

export default News;
