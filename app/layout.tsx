"use client";
import React from "react";
import "./style/globals.css";

import Header from "../components/Header";

import Script from "next/script";
import SupportAttachRight from "../components/supports";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../components/Nav";
import Footer from "../components/footer";
import ReduxLayoutStore from "../redux/layout";
import GlobalInfomation from "../components/GlobalInfomation";
import HeaderComponent from "../components/HeaderComponent";
import { ConfigProvider } from "antd";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ReduxLayoutStore>
          <div id="fb-root"></div>
          <Script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v18.0&appId=3210650549173249"
            nonce="MMstOcko"
          />
          <GlobalInfomation />
          {/* <Header /> */}
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  activeBorderColor: "#DB4444",
                  hoverBorderColor: "#DB4444",
                },
              },
              token: {
                colorIconHover: "#DB4444",
                colorPrimary: "#DB4444",
              },
            }}
          >
            <HeaderComponent />
            <div className="border border-text/10 w-full"></div>
          </ConfigProvider>
          {/* <div className="sticky border-b-2 border-[#6c6b6b33] top-0 z-10 bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
            <div className="container mx-auto">
              <Nav />
            </div>
          </div> */}
          <div>{children}</div>

          <SupportAttachRight />
          <ToastContainer className="z-[9999]" />
          <Footer />
        </ReduxLayoutStore>
      </body>
    </html>
  );
}
