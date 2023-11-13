import React from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import MostView from "../../../components/newDetail/MostView";
import NewContent from "../../../components/newDetail/NewContent";

const structurePage = [
  { page: "Tin tức - Sự kiện", link: "/tin-tuc" },
  {
    page: "Elon Musk: AI sẽ khiến con người mất việc",
    link: "/tin-tuc",
    last: true,
  },
];

const NewDetail = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <Breadcrumb structurePage={structurePage} isDisplay={false} />
        <div className="flex flex-col md:flex-row gap-10">
          <NewContent />
          <MostView />
        </div>
      </div>
    </div>
  );
};

export default NewDetail;
