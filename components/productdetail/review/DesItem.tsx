"use client";
import React, { useState } from "react";
import { cn } from "react-swisskit";
import DidiveSpace from "../../DidiveSpace";
interface DescriptionItemProps {
  des: string;
}
const DescriptionItem = ({ des }: DescriptionItemProps) => {
  const [isShowFull, setShowFull] = useState(false);
  return (
    <div>
      <DidiveSpace coefficient={2} />
      <div
        className={cn(
          "ease-out duration-200",
          !isShowFull ? "max-h-20 overflow-hidden" : "max-h-auto"
        )}
        dangerouslySetInnerHTML={{ __html: des }}
      />
      <p
        className="cursor-pointer hover:text-primary font-medium text-sm opacity-95  mt-2"
        onClick={() => setShowFull(!isShowFull)}
      >
        {isShowFull ? "Ẩn mô tả..." : "Hiện mô tả...."}
      </p>
    </div>
  );
};

export default DescriptionItem;
