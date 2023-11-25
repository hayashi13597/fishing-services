import React from "react";
import type { Metadata } from "next";
import HomeScreen from "../components/screen/HomeScreen";
import HomePage from "../components/home/HomePage";

export const metadata: Metadata = {
  title: "Ốc đảo câu cá",
  description:
    "Ốc đảo câu cá chuyên cung cấp dịch vụ câu cá đỉnh cao nhất sài gòn",
};

export default function Page() {
  return (
    <>
      {/* <HomeScreen /> */}
      <HomePage />
    </>
  );
}
