import React from "react";
import { privacyPolicy } from "../../constants";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="uppercase text-3xl font-bold mb-10">
        CHÍNH SÁCH BẢO MẬT THÔNG TIN
      </h1>
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
