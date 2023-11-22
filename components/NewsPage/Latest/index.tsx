import React from "react";
import LatestItem from "./LatestItem";
import { Pagination } from "antd";
import { INewItem } from "../../../app/tin-tuc/page";

interface latestType {
  title: string;
  listNews: INewItem[];
}

const Latest = ({ title, listNews }: latestType) => {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-semibold mb-5">{title}</h2>
      <div className="flex flex-col gap-3">
        {listNews.map((itemdetail) => (
          <LatestItem
            key={`${itemdetail.title} ${title}`}
            newItem={itemdetail}
          />
        ))}
      </div>
      {/* <div className="w-full flex items-center justify-center mt-5">
        <Pagination defaultCurrent={4} total={12} />
      </div> */}
    </div>
  );
};

export default Latest;
