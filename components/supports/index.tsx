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
            onClick={() => {
              zaloRef.current && zaloRef.current.click();
            }}
            icon={<IconsRender link="/assets/zalo.png" />}
          />
          <FloatButton icon={<IconsRender link="/assets/phone-call.png" />} />
          <FloatButton icon={<IconsRender link="/assets/messenger.png" />} />
        </FloatButton.Group>
      </ConfigProvider>
      <Link ref={zaloRef} href="https://zalo.me/0907338862" target="_blank" />
      <FacebookMessenger />
    </>
  );
};

export default SupportAttachRight;
