"use client";
import React, { useEffect, useState } from "react";

import Banner from "../home/Banner";
import Support from "../home/Support";
import InfoMail from "../home/InfoMail";
import Appreciate from "../home/appreciate";
import About from "../home/About";
import NewContainer from "../home/socials/NewContainer";
import YoutubeContainer from "../home/socials/YoutubeContainer";
import ProductContainer from "../home/ProductContainer";
import Brands from "../home/brands";
import Event from "../home/events";
import DidiveSpace from "../DidiveSpace";
import ProductsApi from "../../services/api-client/product";
const HomeScreen = () => {
  const [listProduct, ListProduct] = useState({
    ListProductSaleTop: [],
    ListProductNews: [],
    ListFoods: [],
    listNews: [],
    listEvents: [],
  });

  useEffect(() => {
    ProductsApi.GetDataViewHome().then((res) => {
      if (res.data) {
        ListProduct(() => res.data);
      }
    });
  }, []);
  return (
    <>
      <Banner />

      <main className="min-h-[100vh] ">
        <div className="container mx-auto">
          <DidiveSpace coefficient={2} />
          <Support />
          <DidiveSpace coefficient={4} />
          <ProductContainer
            listProducts={listProduct.ListProductSaleTop}
            title="Sản phẩm bán chạy nhất"
            link="/san-pham"
          />
          <ProductContainer
            isNew={true}
            listProducts={listProduct.ListProductNews}
            title="Sản phẩm mới nhất"
            link="/san-pham"
          />
          <DidiveSpace coefficient={1} />
          <About />
          <DidiveSpace coefficient={4} />
          <Appreciate />
          <DidiveSpace coefficient={4} />
        </div>

        <InfoMail />

        <DidiveSpace coefficient={4} />
        <div className="container mx-auto home--media grid md:grid-cols-2 grid-cols-1 gap-4 my-8">
          <NewContainer listNews={listProduct.listNews} />
          <YoutubeContainer />
        </div>
        <DidiveSpace coefficient={1} />
        <div className="container mx-auto">
          <Event ListEvent={listProduct.listEvents} />
          <DidiveSpace coefficient={8} />
          <Brands />
          <DidiveSpace coefficient={1} />
        </div>
      </main>
    </>
  );
};

export default HomeScreen;
