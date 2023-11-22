"use client";
import React, { useEffect, useState } from "react";
import PopularItem from "./PopularItem";
import { useSelector } from "react-redux";
import EventApi from "../../../services/api-client/events";
import { INewItem } from "../../../app/tin-tuc/page";
interface PopularProps {
  title: string;
  ListEvents: INewItem[];
}
const Popular = ({ title, ListEvents }: PopularProps) => {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-5">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-10">
        {ListEvents.map((item) => (
          <PopularItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Popular;
