import React from "react";
import CollapseContainer from "../../components/AboutUs/CollapseContainer";
import { structurePageType } from "../../common.types";
import Breadcrumb from "../../components/Breadcrumb";
import HeaderTitle from "../../components/HeaderTitle";
import Address from "../../components/footer/Address";
import YoutubeContainer from "../../components/home/socials/YoutubeContainer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Giới thiệu hồ câu cá ốc đảo kỳ đà",
  description:
    "Ốc đảo kỳ đà có rất nhiều sự kiện hằng năm để cần thủ có thể tham gia để giành giải với các giải hấp dẫn từ 500k đến 500tr. Ngoài ra còn thu mua lại cá của anh em với giá hấp dẫn, nếu cá dưới 3kg có thể mang về để chế biến tùy thích.",
};
const structurePage: structurePageType[] = [
  { page: "Giới thiệu", link: "/gioi-thieu", last: true },
];

const page = () => {
  return (
    <div className="container mx-auto">
      <Breadcrumb structurePage={structurePage} title="Giới thiệu" />
      <section className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div>
          <div>
            <HeaderTitle title="Địa chỉ liên hệ" />
            <Address isFooter={false} />
          </div>
          <div className="mt-8">
            <YoutubeContainer />
          </div>
        </div>
        <div>
          <CollapseContainer />
        </div>
      </section>
    </div>
  );
};

export default page;
