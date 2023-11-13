import React from "react";
import MapScreen from "../../components/MapScreen";
import Address from "../../components/footer/Address";
import Breadcrumb from "../../components/Breadcrumb";
import { structurePageType } from "../../common.types";
import InfoMail from "../../components/home/InfoMail";
import DidiveSpace from "../../components/DidiveSpace";
import YoutubeContainer from "../../components/home/socials/YoutubeContainer";
import HeaderTitle from "../../components/HeaderTitle";
const structurePage: structurePageType[] = [
  { page: "Liên hệ", link: "/gio-hang", last: true },
];
const page = () => {
  return (
    <section>
      <div className="container mx-auto">
        <Breadcrumb structurePage={structurePage} title="Liên hệ" />
        {/* <h1 className="mb-10 text-center text-3xl md:text-2xl font-bold">
          Liên hệ
        </h1> */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <div>
              <HeaderTitle title="Địa chỉ liên hệ" />
              <Address isFooter={false} />
            </div>
            <div className="mt-8">
              <YoutubeContainer />
            </div>
          </div>
          <div className="mt-1">
            <HeaderTitle title="Bản đồ" />
            <MapScreen />
          </div>
        </div>
      </div>
      <DidiveSpace coefficient={4} />
      <InfoMail />
      <DidiveSpace coefficient={2} />
    </section>
  );
};

export default page;
