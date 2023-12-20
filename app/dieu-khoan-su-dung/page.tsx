import React from "react";
import { termsOfUseConstants } from "../../constants";
import { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
export const metadata: Metadata = {
  title: "Điều khoản sử dụng",
  description:
    "Điều khoản sử dụng vô cùng kỷ lưỡng tại chúng tôi, yên tâm thanh toán",
};
const structurePage = [
  { page: "Điều khoản sử dụng ", link: "/dieu-khoan-su-dung", last: true },
];
const TermsOfUse = () => {
  return (
    <div className="container mx-auto py-10">
      <Breadcrumb structurePage={structurePage} title="Điều khoản sử dụng" />
      {termsOfUseConstants?.map((term, index) => (
        <div className="border p-5" key={index}>
          <h2 className="font-semibold text-lg uppercase">{term.title}</h2>
          <p className="text-justify px-5 mt-2 text-sm">{term.content}</p>
        </div>
      ))}
    </div>
  );
};

export default TermsOfUse;
