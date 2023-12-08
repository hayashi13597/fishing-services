"use client";
import React, { useEffect, useRef } from "react";
import ImageZoom from "js-image-zoom";
import LableProductItem from "../Products/LableProductItem";
import { useMediaQuery } from "react-responsive";
const options = {
  width: 320,
  zoomWidth: 500,
  offset: { vertical: 0, horizontal: 10 },
  zoomStyle: {
    opacity: 0.1,
  },
  zoomPosition: "right",
};
interface ImageZoomOnHoverProps extends React.ComponentPropsWithoutRef<"img"> {
  src: string;
  href: string;
  zoomPosition: string;
}
const ImageZoomOnHover = ({
  src,
  alt,
  zoomPosition = "right",
  ...props
}: ImageZoomOnHoverProps) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const ref = useRef(null);
  options.zoomPosition = zoomPosition;
  options.zoomWidth = isTabletOrMobile ? 320 : 500;

  useEffect(() => {
    ref.current && new ImageZoom(ref.current, options);
  }, [src]);

  return (
    <section key={Math.random() * 100} className="relative z-[2]">
      <div ref={ref} id="img-container" className="border">
        <img src={src} alt={alt} {...props} />
      </div>
    </section>
  );
};

export default ImageZoomOnHover;
