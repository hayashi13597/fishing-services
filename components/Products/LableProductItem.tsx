import React from "react";
interface LableProductItemProps {
  isNew?: boolean;
  discount?: number;
}
const LableProductItem = ({
  isNew = false,
  discount,
}: LableProductItemProps) => {
  return (
    <div className="absolute top-4 left-1 gap-1 md:left-4 flex md:gap-2">
      {isNew ? (
        <div className="text-xs bg-green-500 py-1 px-2 font-bold text-white rounded-sm">
          New
        </div>
      ) : (
        ""
      )}
      {discount ? (
        <div className="text-xs bg-blue-500 py-1 px-2 font-bold text-white rounded-sm">
          -{discount}%
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default LableProductItem;
