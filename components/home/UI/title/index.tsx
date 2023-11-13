import Link from "next/link";
import React from "react";
import "./title.scss";
interface TitleFormatProps {
  title: string;
  link?: string;
}
const TitleFormat = ({ title, link }: TitleFormatProps) => {
  return (
    <div className="namelist">
      <span className="sm:text-xl text-sm">{title}</span>
      {link && (
        <Link className="sm:inline-block hidden" href={link}>
          Xem tất cả
        </Link>
      )}
    </div>
  );
};

export default TitleFormat;
