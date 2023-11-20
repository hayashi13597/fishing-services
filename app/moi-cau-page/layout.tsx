import React from "react";
import { ConfigProvider } from "antd";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            colorPrimary: "#DB4444",
            colorPrimaryHover: "#DB4444",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default layout;
