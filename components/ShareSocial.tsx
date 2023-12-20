import Link from "next/link";
import React from "react";
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { RiFlagLine } from "react-icons/ri";
import { DOMAIN_HOST } from "../utils";

interface ShareSocialProps {
  link: string;
}

const ShareSocial: React.FC<ShareSocialProps> = ({ link }) => {
  const className = `flex gap-2 items-center  py-4 mt-2 `;

  return (
    <div className={className}>
      <p className="md:block hidden"> Chia sẻ:</p>
      <p className="flex gap-1 text-base items-center">
        <Link
          title="Chia sẻ lên Facebook"
          className="flex items-center gap-1 hover:text-primary hover:border-primary border-gray-400 rounded-full p-1 border-[0.5px]"
          target="_blank"
          href={`https://www.facebook.com/sharer/sharer.php?u=${DOMAIN_HOST}/${link}`}
        >
          <BiLogoFacebook />
        </Link>

        <Link
          title="Chia sẻ lên Twitter "
          className="flex items-center gap-1 hover:text-primary hover:border-primary border-gray-400 rounded-full p-1 border-[0.5px]"
          target="_blank"
          href={`http://twitter.com/share?text=link&url=${DOMAIN_HOST}/${link}&hashtags=hashtag1,hashtag2,hashtag3`}
        >
          <BiLogoTwitter />
        </Link>

        <Link
          title="Xem Fanpage "
          className="flex items-center gap-1 hover:text-primary hover:border-primary border-gray-400 rounded-full p-1 border-[0.5px]"
          target="_blank"
          href={`https://www.facebook.com/ocdaokyda`}
        >
          <RiFlagLine />
        </Link>
      </p>
    </div>
  );
};

export default ShareSocial;
