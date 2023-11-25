import Link from "next/link";
import React from "react";
import { aboutUs } from "../../../constants";

const AboutUs = () => {
  return (
    <div className="w-full bg-second pt-10 pb-5">
      <div className="container mx-auto">
        <h1 className="text-text text-4xl text-center font-bold">
          Tại sao phải đến với chúng tôi
        </h1>
        <div className="text-center mt-2 mb-10">
          Giới thiệu về Câu cá Ốc Đảo{" "}
          <Link
            href={"/gioi-thieu"}
            className="underline hover:text-primary transition-all"
          >
            tại đây
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-10">
          {aboutUs.map((item) => (
            <div className="text-center">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="my-5">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
