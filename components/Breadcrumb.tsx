"use client";

import Link from "next/link";
import React from "react";
import { structurePageType } from "../common.types";
import { usePathname } from "next/navigation";

const data = [
  {
    id: 1,
    title: "Elon Musk: AI sẽ khiến con người mất việc",
    slug: "Elon-Musk-se-khien-con-nguoi-mat-viec",
  },
];

const Breadcrumb = ({
  structurePage,
  isHidden,
  isDisplay = true,
  title,
}: {
  structurePage: structurePageType[];
  isHidden?: boolean;
  isDisplay?: boolean;
  title?: string;
}) => {
  const pathName = usePathname();
  const slug = pathName.split("/").at(-1);
  const titlePage = data?.map((item) =>
    item.slug === slug ? item.title : ""
  )[0];

  return (
    <div className={`${isHidden ? "hidden md:block py-5" : "py-5"}`}>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 line-clamp-1">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary"
            >
              <svg
                className="w-3 h-3 mr-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Trang chủ
            </Link>
          </li>
          {structurePage &&
            structurePage.map((page, index) => (
              <li key={index}>
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  {page.last ? (
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 capitalize ">
                      {page.page}
                    </span>
                  ) : (
                    <Link
                      href={page.link}
                      className="ml-1 text-sm font-medium text-gray-700 hover:text-primary md:ml-2 capitalize"
                    >
                      {page.page}
                    </Link>
                  )}
                </div>
              </li>
            ))}
        </ol>
      </nav>
      {isDisplay && (
        <h1 className="text-center font-bold text-3xl md:text-5xl mt-5 md:mb-5 text-primary capitalize">
          {titlePage ? titlePage : title}
        </h1>
      )}
    </div>
  );
};

export default Breadcrumb;
