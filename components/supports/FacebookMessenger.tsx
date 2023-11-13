import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMessenger = () => {
  return (
    <div className="z-[1]">
      <FacebookProvider appId={process.env.FACEBOOK_APP_ID} chatSupport>
        <CustomChat
          pageId={process.env.FACEBOOK_PAGE_ID}
          minimized={undefined}
        />
      </FacebookProvider>
    </div>
  );
};
export default FacebookMessenger;
