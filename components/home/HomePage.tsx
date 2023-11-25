import React from "react";
import Banner from "./Banner";
import MainProduct from "./components/MainProduct";
import ListCategories from "./components/ListCategories";
import AboutUs from "./components/AboutUs";
import InfoMail from "./InfoMail";
import News from "./components/News";
import Event from "./events";
import events from "../../mock/news_events.json";
import YoutubeContainer from "./socials/YoutubeContainer";

const HomePage = () => {
  return (
    <>
      <Banner />
      <ListCategories />
      <MainProduct title="Sản phẩm mới nhất" />
      <MainProduct title="Sản phẩm bán chạy" />
      <News />
      <div className="container mx-auto mb-20">
        <Event ListEvent={events} />
        <div className="my-20"></div>
        <YoutubeContainer />
      </div>
      <AboutUs />
      <InfoMail />
    </>
  );
};

export default HomePage;
