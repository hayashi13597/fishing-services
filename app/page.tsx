import React from "react";
import Banner from "../components/home/Banner";
import Support from "../components/home/Support";
import InfoMail from "../components/home/InfoMail";
import Appreciate from "../components/home/appreciate";
import About from "../components/home/About";

import NewContainer from "../components/home/socials/NewContainer";
import YoutubeContainer from "../components/home/socials/YoutubeContainer";
import type { Metadata } from "next";

import ProductContainer from "../components/home/ProductContainer";
import Brands from "../components/home/brands";
import Event from "../components/home/events";
import DidiveSpace from "../components/DidiveSpace";

export const metadata: Metadata = {
  title: "Ốc đảo câu cá",
  description:
    "Ốc đảo câu cá chuyên cung cấp dịch vụ câu cá đỉnh cao nhất sài gòn",
};

export default function Page() {
  return (
    <>
      <Banner />

      <main className="min-h-[100vh]">
        <div className="container mx-auto">
          <DidiveSpace coefficient={2} />
          <Support />
          <DidiveSpace coefficient={4} />
          <ProductContainer title="Sản phẩm bán chạy nhất" link="/san-pham" />
          <ProductContainer title="Sản phẩm mới nhất" link="/san-pham" />
          <DidiveSpace coefficient={1} />
          <About />
          <DidiveSpace coefficient={4} />
          <Appreciate />
          <DidiveSpace coefficient={4} />
        </div>

        <InfoMail />

        <DidiveSpace coefficient={4} />
        <div className="container mx-auto home--media grid md:grid-cols-2 grid-cols-1 gap-4 my-8">
          <NewContainer />
          <YoutubeContainer />
        </div>
        <DidiveSpace coefficient={1} />
        <div className="container mx-auto">
          <Event />
          <DidiveSpace coefficient={8} />
          <Brands />
          <DidiveSpace coefficient={1} />
        </div>
      </main>
    </>
  );
}
