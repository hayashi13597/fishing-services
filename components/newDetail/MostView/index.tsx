import React from "react";
import MostViewItem from "./MostViewItem";

const MostView = () => {
  return (
    <div className="w-full md:w-1/4 px-3 pb-5 md:pb-0">
      <h3 className="text-primary text-xl font-semibold underline cursor-pointer transition-opacity hover:opacity-70">
        Xem nhiều
      </h3>
      <div>
        <MostViewItem />
        <MostViewItem />
        <MostViewItem />
        <MostViewItem />
        <MostViewItem />
        <MostViewItem />
      </div>
    </div>
  );
};

export default MostView;
