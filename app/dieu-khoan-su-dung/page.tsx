import React from "react";
import { termsOfUseConstants } from "../../constants";

const TermsOfUse = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="uppercase text-3xl font-bold mb-10">Điều khoản sử dụng</h1>
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
