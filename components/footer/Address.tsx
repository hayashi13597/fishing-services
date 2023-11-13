import React from "react";
import { footerAddress } from "../../constants";
import Link from "next/link";
import { cn } from "react-swisskit";

interface AddressProps {
  isFooter?: boolean;
}

const Address = ({ isFooter = true }: AddressProps) => {
  return (
    <div>
      {footerAddress.contact.map((item) => {
        const IconElement = item.icon;
        return (
          <div key={`social-address_${item.title} flex `}>
            <div className="flex gap-2 items-center">
              <div className="flex flex-nowrap items-start">
                <span
                  className={cn(
                    "text-primary text-xl  p-1 flex  border-[1px] rounded-full",
                    isFooter ? "" : "border-gray-300"
                  )}
                >
                  <IconElement />
                </span>
              </div>

              <span className="mt-2">{item.content}</span>
            </div>
          </div>
        );
      })}
      <div className="flex gap-2 mt-3">
        {footerAddress.social.map((item) => {
          const IconElement = item.icon;
          return (
            <Link
              key={`social-${item.title}`}
              href={`${item.ref}`}
              className={cn(
                "flex items-center hover:bg-primary justify-center py-2 w-10 h-10  ease-in duration-100 rounded-full text-xl border-[1px]",
                isFooter ? "border-white" : "hover:text-white  border-gray-300"
              )}
              target="_blank"
            >
              <IconElement />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Address;
