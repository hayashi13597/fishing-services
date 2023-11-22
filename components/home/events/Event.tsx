"use client";
import Image from "next/image";
import React from "react";

import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import DiscountFlipCountdown from "../UI/discountCountdown";

interface Props {
  title: string;
  description: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  numberOfDiscountDate: number;
  buttonText: string;
  href: string;
}
const EventBox: React.FC<Props> = ({
  title,
  description,
  imgSrc,
  imgWidth,
  imgHeight,
  numberOfDiscountDate,
  buttonText,
  href,
}) => {
  const isDestop = useMediaQuery({ query: "(min-width:200px)" });
  let imageWidth = isDestop ? 1300 : imgWidth;
  return (
    <div className="col-span-6  lg:col-span-6 flex text-white/80  justify-center  shadow-2xl relative rounded-lg overflow-hidden dark:bg-gray-500/70 !dark:bg-blend-multiply">
      <Image
        src={imgSrc}
        width={imageWidth}
        height={imgHeight}
        alt={title}
        className="drop-shadow-lg blur-sm  object-cover w-full object-center hover:scale-110 transition duration-1000"
      />

      <div className="flex justify-between items-center sm:block absolute top-[25%] ltr:top-[15%] ltr:sm:top-3 sm:top-3 ltr:md:top-8 md:top-8 ltr:lg:top-2 lg:top-2 ltr:2xl:top-6 2xl:top-6 sm:left-6 sm:w-[55%] md:w-3/4 lg:w-[60%] xl:w-1/2">
        <h3 className="text-palette-secondary capitalize shadow-sm text-xl font-bold sm:text-2xl sm:font-normal md:text-2xl 2xl:text-3xl ltr:mr-4  sm:pt-8 lg:pt-2 xl:pt-8">
          {title}
        </h3>
        <p className="hidden shadow sm:block text-palette-secondary/80  leading-6 lg:text-[12px] xl:text-base my-2 sm:my-4 lg:my-2 2xl:my-4 rtl:2xl:mt-6 text-ellipsis overflow-hidden max-h-[52px] line-clamp-2">
          {description}
        </p>
        <Link
          href={href}
          className="py-2 px-3 md:inline-block hidden  sm:py-3 lg:py-2 xl:py-3 sm:px-6 rounded-lg bg-primary/90 hover:bg-primary/100 transition-all duration-300 shadow-lg 2xl:mt-4 mr-2  ltr:mr-auto sm:mr-14 ltr:sm:ml-14 ltr:sm:mr-0  =  text-white text-[12px] rtl:sm:text-sm"
        >
          {buttonText}
        </Link>
      </div>
      <Link
        href={href}
        className="py-2 px-3 md:hidden  absolute left-1/2 bottom-2 -translate-x-1/2 sm:py-3 lg:py-2 xl:py-3 sm:px-6 rounded-lg bg-primary/90 hover:bg-primary/100 transition-all duration-300 shadow-lg 2xl:mt-4 mr-2  ltr:mr-auto sm:mr-14 ltr:sm:ml-14 ltr:sm:mr-0  =  text-white text-[12px] rtl:sm:text-sm"
      >
        {buttonText}
      </Link>
      <DiscountFlipCountdown targetDate={numberOfDiscountDate} />
    </div>
  );
};

export default EventBox;
