import React from "react";
import Image from "next/image";
type ImageType = typeof Image;
interface IconsProps extends ImageType {
  link: string;
}
const IconsRender: any = ({ link, ...props }: IconsProps) => {
  return (
    <Image
      src={link}
      alt="link"
      width={32}
      height={32}
      className="object-cover"
      {...props}
    />
  );
};

export default IconsRender;
