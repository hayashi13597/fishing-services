import React from "react";
import LatestItem from "./LatestItem";
import { Pagination } from "antd";

type latestType = {
  title: string;
};

const Latest = ({ title }: latestType) => {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-semibold mb-5">{title}</h2>
      <div className="flex flex-col gap-3">
        <LatestItem />
        <LatestItem />
        <LatestItem />
        <LatestItem />
      </div>
      <div className="w-full flex items-center justify-center mt-5">
        <Pagination defaultCurrent={4} total={12} />
      </div>
    </div>
  );
};

export default Latest;
