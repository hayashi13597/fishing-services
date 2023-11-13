import React, { FC } from "react";
interface HeaderTitleProps {
  title: string;
}
const HeaderTitle: FC<HeaderTitleProps> = ({ title }) => {
  return (
    <p className="title-intro">
      <span>{title}</span>
    </p>
  );
};

export default HeaderTitle;
