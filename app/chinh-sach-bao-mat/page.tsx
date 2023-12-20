import React from "react";
import { privacyPolicy } from "../../constants";
import { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
export const metadata: Metadata = {
  title: "Chính sách bảo mật",
  description: "Chính sách bảo mật vô cùng kỷ lưỡng tại chúng tôi",
};
const structurePage = [
  { page: "Chính sách bảo mật", link: "/chinh-sach-bao-mat", last: true },
];
const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto mb-8">
      <Breadcrumb structurePage={structurePage} title="Chính sách bảo mật" />

      {privacyPolicy?.map((policy, index) => (
        <div className="border p-5" key={index}>
          <h2 className="font-semibold text-lg uppercase">{policy.title}</h2>
          <p className="text-justify px-5 mt-2 text-sm">{policy.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
