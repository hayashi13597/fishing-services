import React from "react";
import { Comments, FacebookProvider } from "react-facebook";

const FacebookComment = () => {
  return (
    <FacebookProvider appId={process.env.FACEBOOK_APP_ID}>
      <Comments href="https://developers.facebook.comment/index.html?page=1&?href=111" />
    </FacebookProvider>
  );
};

export default FacebookComment;
