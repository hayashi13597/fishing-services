import React from "react";
import RegisterScreen from "../../components/screen/Register.screen";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Đăng ký thành viên",
  description:
    "Đăng ký thành viên mới để nhận tin tức và sự kiện hấp dẫn tại ốc đảo kỳ đà ",
};
const page = () => {
  return <RegisterScreen />;
};

export default page;
