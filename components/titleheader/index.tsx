import React from "react";
import "./title.scss";
interface TitleHeaderProps {
  title: string;
}
const TitleHeader = ({ title }: TitleHeaderProps) => {
  return (
    <div>
      <h1 className="title-main ">{title}</h1>
    </div>
  );
};

export default TitleHeader;
