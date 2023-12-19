import React from "react";
import { Comments, FacebookProvider } from "react-facebook";
interface FacebookCommentProp {
  id: string;
}
const FacebookComment = ({ id = "homepage" }: FacebookCommentProp) => {
  return (
    <FacebookProvider appId={process.env.FACEBOOK_APP_ID}>
      <Comments
        href={`https://developers.facebook.comment/index.html?page=1&?href=${id}`}
      />
    </FacebookProvider>
  );
};

export default FacebookComment;
