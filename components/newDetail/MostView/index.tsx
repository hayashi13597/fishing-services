import React from "react";
import MostViewItem from "./MostViewItem";
import { INewItem } from "../../screen/NewScreen";
interface MostViewPros {
  ListNews: INewItem[];
}
const MostView = ({ ListNews }: MostViewPros) => {
  return (
    <div className="w-full md:w-1/4 px-3 pb-5 md:pb-0">
      <h3 className="text-primary text-xl font-semibold underline cursor-pointer transition-opacity hover:opacity-70">
        Xem nhiều
      </h3>
      <div>
        {ListNews.map((newdetail) => (
          <MostViewItem
            newDetail={newdetail}
            key={`newdetail-${newdetail.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MostView;
