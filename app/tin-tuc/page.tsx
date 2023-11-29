import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tin tức mới cập nhập tại Ốc đảo câu cá",
  description:
    "Tin tức và sự kiện luôn cập nhập một số giải thưởng hấp dẫn cho cần thủ đến khắp mọi nơi trên đất nước",
};
import React from "react";
import NewScreen from "../../components/screen/NewScreen";

const page = () => {
  return (
    <>
      <NewScreen />
    </>
  );
};

export default page;
