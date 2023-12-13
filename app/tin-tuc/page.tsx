import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tin tức mới cập nhập tại Ốc đảo kỳ đà",
  description:
    "Tin tức và sự kiện luôn cập nhập một số giải thưởng hấp dẫn cho cần thủ đến khắp mọi nơi trên đất nước",
};
import React from "react";
import NewScreen from "../../components/screen/NewScreen";
import EventApi from "../../services/api-client/events";

const page = async () => {
  const res = await EventApi.getNewScreen();
  return (
    <>
      <NewScreen
        listEventHost={res.listEventHost}
        listEventNews={res.listEventNews}
        listNewHot={res.listNewHot}
        listNewNew={res.listNewNew}
        listTopNews={res.listTopNews}
      />
    </>
  );
};

export default page;
