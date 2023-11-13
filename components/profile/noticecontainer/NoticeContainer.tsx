"use state";
import React, { useState } from "react";
import NoticeItem from "../../notice/NoticeItem";
import Image from "next/image";
import NoticeItemProfile from "./NoticeItemProfile";
import { ConfigProvider, Pagination } from "antd";

const NoticeContainer = () => {
  const [listNotice, setListNotice] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(4);

  return (
    <section>
      <div className="p-3 flex flex-col gap-3  ">
        {listNotice
          .slice((currentPage - 1) * pageSize, currentPage * pageSize)
          .map((item, index) => (
            <NoticeItemProfile key={`ssss--${index}`} />
          ))}
      </div>
      <ConfigProvider
        theme={{
          components: {
            Pagination: {
              colorBgTextActive: "#DB4444",

              colorPrimary: "#DB4444",
            },
          },
        }}
      >
        <div className="flex  justify-end  w-full">
          <Pagination
            current={currentPage}
            onChange={(page) => setCurrentPage(page)}
            pageSize={pageSize}
            total={listNotice.length}
          />
        </div>
      </ConfigProvider>
    </section>
  );
};

export default NoticeContainer;
