import React from "react";
import ProfilePage from "../../components/profile";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Thông tin tài khoản",
  description: "Thông tin tài khoản được bảo mật nhé",
};

const page = () => {
  return (
    <div className="container mx-auto">
      <ProfilePage />
    </div>
  );
};

export default page;
