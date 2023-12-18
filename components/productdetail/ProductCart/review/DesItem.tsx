"use client";
import React, { useState } from "react";
import { cn } from "react-swisskit";
import DidiveSpace from "../../../DidiveSpace";
interface DescriptionItemProps {
  des: string;
}
const DescriptionItem = ({ des }: DescriptionItemProps) => {
  return (
    <div>
      <DidiveSpace coefficient={2} />

      <div
        className={cn("ease-out duration-200 max-h-auto")}
        dangerouslySetInnerHTML={{ __html: des }}
      />
    </div>
  );
};

export default DescriptionItem;
