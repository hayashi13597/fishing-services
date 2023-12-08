import React from "react";
import MostViewItem from "./MostViewItem";
import { INewItem } from "../../screen/NewScreen";
interface MostViewPros {
  ListNews: INewItem[];
  title: string;
}
const MostView = ({ ListNews, title }: MostViewPros) => {
  return (
    <div className="w-full  px-3 pb-5 md:pb-0">
      <h3 className="text-primary text-xl font-semibold underline cursor-pointer transition-opacity hover:opacity-70 capitalize">
        {title}
      </h3>
      <div>
        {ListNews.map((newdetail) => (
          <MostViewItem
            newDetail={newdetail}
            key={`${title}-${newdetail.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MostView;
