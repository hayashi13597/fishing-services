"use client";
import React, { useRef } from "react";

import { BiSupport } from "react-icons/bi";
import dynamic from "next/dynamic";
const FacebookMessenger = dynamic(() => import("./FacebookMessenger"), {
  ssr: false,
});
import { FloatButton, ConfigProvider } from "antd";
import IconsRender from "../icons";
import Link from "next/link";

const SupportAttachRight = () => {
  const zaloRef = useRef<HTMLAnchorElement>(null);
  const handleOpenLink = (link: string) => {
    if (zaloRef.current) {
      zaloRef.current.href = link;
      zaloRef.current.click();
    }
  };
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#DB4444",
            controlHeightLG: 60,
            fontSizeSM: 12,
          },
        }}
      >
        <FloatButton.Group
          trigger="hover"
          type="primary"
          style={{
            right: 24,
            fontSize: 20,
            bottom: 100,
            zIndex: 2,
          }}
          icon={<BiSupport />}
        >
          <FloatButton
            className="hover:bg-white"
            onClick={() => {
              handleOpenLink("https://zalo.me/g/jawwre080");
            }}
            icon={<IconsRender link="/assets/zalo.png" />}
          />
          <FloatButton
            className="hover:bg-white"
            onClick={() => {
              handleOpenLink("tel:+0325024277");
            }}
            icon={<IconsRender link="/assets/phone-call.png" />}
          />
          <FloatButton
            className="hover:bg-white"
            onClick={() => {
              handleOpenLink(
                "https://www.facebook.com/ocdaokyda/?ref=embed_page"
              );
            }}
            icon={<IconsRender link="/assets/messenger.png" />}
          />
        </FloatButton.Group>
      </ConfigProvider>
      <a href="tel:+0325024277"></a>
      <Link ref={zaloRef} href="https://zalo.me/g/jawwre080" target="_blank" />
      <FacebookMessenger />
    </>
  );
};

export default SupportAttachRight;
