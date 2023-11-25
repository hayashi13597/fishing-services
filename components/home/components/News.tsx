import Image from "next/image";
import Link from "next/link";
import React from "react";
import news from "../../../mock/news_events.json";
import { formatDateTime } from "../../../utils";

const News = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="flex justify-center items-center flex-col md:flex-row md:justify-between md:text-text/80">
        <h1 className="text-4xl">Tin tức - Sự kiện</h1>
        <p className="text-sm">
          Xem thêm tin tức{" "}
          <Link
            href={"/san-pham"}
            className="underline text-text md:text-text/80 text-base hover:text-primary transition-all font-medium"
          >
            tại đây
          </Link>
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 mt-5 gap-5">
        {news
          ?.sort((a, b) => a.createdAt.localeCompare(b.createdAt))
          .slice(0, 8)
          .map((newItem) => (
            <div
              className="relative group border rounded-md overflow-hidden hover:shadow-2xl transition-all duration-300"
              key={newItem.id}
            >
              <Link href={`/`}>
                <Image
                  src={`/assets/can-cau.jpg`}
                  alt={newItem.title}
                  height={500}
                  width={500}
                  className="object-cover w-full"
                />
                <div className="py-3 px-2">
                  <h3 className="text-base font-semibold line-clamp-2 group-hover:text-primary mb-1">
                    {newItem.title}
                  </h3>
                  <p className="text-sm line-clamp-3">{newItem.description}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p>{formatDateTime(newItem.createdAt)}</p>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        position: "relative",
                        borderRadius: "100%",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={`/assets/user-avt.png`}
                        alt="user image"
                        fill
                        className="w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default News;