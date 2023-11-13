import { Metadata } from "next";
import React from "react";
import MissPassword from "../../components/screen/MissPassword.screen";

export const metadata: Metadata = {
  title: "Quên mật khẩu",
  description: "Lấy lại mật khẩu nhanh gọn cho người dùng ",
};
const page = () => {
  return <MissPassword />;
};

export default page;
