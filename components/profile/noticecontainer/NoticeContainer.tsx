"use state";
import React, { useEffect, useState } from "react";
import NoticeItem from "../../notice/NoticeItem";
import Image from "next/image";
import NoticeItemProfile from "./NoticeItemProfile";
import { ConfigProvider, Pagination } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { INotice } from "../../../redux/notices";
import NoticeApi from "../../../services/api-client/notice";

const NoticeContainer = () => {
  const account = useSelector((state: RootState) => state.user.account);
  const [listNotice, setListNotice] = useState<INotice[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [pageSize] = useState(4);
  useEffect(() => {
    if (!account.id) {
      return;
    }
    NoticeApi.getNoticeAccount({
      id: account.id,
      limit: pageSize,
      skip: (currentPage - 1) * pageSize,
    }).then((res) => {
      setListNotice(() => res.data.notices);
      setTotal(() => res.data.total);
    });
  }, [currentPage, account.id]);
  return (
    <section>
      <div className="p-3 flex flex-col gap-3  ">
        {listNotice.map((item, index) => (
          <NoticeItemProfile notice={item} key={`ssss--${index}`} />
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
            total={total}
            showSizeChanger={false}
          />
        </div>
      </ConfigProvider>
    </section>
  );
};

export default NoticeContainer;
