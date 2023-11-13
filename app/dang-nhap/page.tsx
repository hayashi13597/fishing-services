import React from "react";
import LoginScreen from "../../components/screen/Login.screen";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Đăng nhập",
  description:
    "Đăng nhập tài khoản dễ dàng tại trang website của ốc đảo kỳ đà ",
};
const page = () => {
  return <LoginScreen />;
};

export default page;
