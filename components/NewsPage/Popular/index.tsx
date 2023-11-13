import React from "react";
import PopularItem from "./PopularItem";

const Popular = ({ title }: { title: string }) => {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-5">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-10">
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
      </div>
    </>
  );
};

export default Popular;
