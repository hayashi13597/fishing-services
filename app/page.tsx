import React from "react";
import type { Metadata } from "next";
import HomePage from "../components/home/HomePage";
export const revalidate = 3600;
export const metadata: Metadata = {
  title: "Hồ câu cá Ốc đảo kỳ đà",
  description:
    "Hồ câu cá Ốc đảo kỳ đà chuyên cung cấp dịch vụ câu cá tại hồ câu dịch vụ câu cá kỳ đà đỉnh cao nhất sài gòn, giá cả phải chăng chỉ 50k 1 tiếng",
  keywords: ["ốc đảo kỳ đà", "câu cá ốc đảo", "cần câu xịn nhật"],
};

export default function Page() {
  return <HomePage />;
}
