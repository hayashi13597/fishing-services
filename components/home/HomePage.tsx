"use client";
import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import MainProduct from "./components/MainProduct";
import ListCategories from "./components/ListCategories";
import AboutUs from "./components/AboutUs";
import InfoMail from "./InfoMail";
import News from "./components/News";
import Event from "./events";

import YoutubeContainer from "./socials/YoutubeContainer";
import ProductsApi from "../../services/api-client/product";
import DidiveSpace from "../DidiveSpace";

const HomePage = () => {
  const [listDataHome, setListDataHome] = useState({
    ListProductSaleTop: [],
    ListProductNews: [],
    ListFoods: [],
    listNews: [],
    listEvents: [],
  });

  useEffect(() => {
    ProductsApi.GetDataViewHome().then((res) => {
      if (res.data) {
        setListDataHome(() => res.data);
      }
    });
  }, []);

  return (
    <>
      <Banner />
      <ListCategories />
      <div className="container mx-auto my-10 md:my-20 flex flex-col gap-10 md:gap-20">
        {listDataHome.ListProductNews.length ? (
          <MainProduct
            listProduct={listDataHome.ListProductNews}
            title="Sản phẩm mới nhất"
          />
        ) : (
          ""
        )}
        {listDataHome.ListProductSaleTop.length ? (
          <MainProduct
            listProduct={listDataHome.ListProductSaleTop}
            title="Sản phẩm bán chạy"
          />
        ) : (
          ""
        )}
      </div>

      <News listNews={listDataHome.listNews?.slice(0, 8)} />
      <div className="container mx-auto mb-10 md:mb-20">
        <Event ListEvent={listDataHome.listEvents} />
        <div className="my-10 md:my-20"></div>
        <YoutubeContainer />
      </div>

      <AboutUs />
      <DidiveSpace coefficient={4} />
      <InfoMail />
      <DidiveSpace coefficient={4} />
    </>
  );
};

export default HomePage;
