import Link from "next/link";
import React from "react";
import { BiHomeAlt, BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { RiFlagLine } from "react-icons/ri";

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
          href={`https://www.facebook.com/sharer/sharer.php?u=${link}&hashtag=baiviethay,zeckytintuc,top`}
        >
          <BiLogoFacebook />
        </Link>

        <Link
          title="Chia sẻ lên Twitter "
          className="flex items-center gap-1 hover:text-primary hover:border-primary border-gray-400 rounded-full p-1 border-[0.5px]"
          target="_blank"
          href={`http://twitter.com/share?text=link&url=${link}&hashtags=hashtag1,hashtag2,hashtag3`}
        >
          <BiLogoTwitter />
        </Link>

        <Link
          title="Xem Fanpage "
          className="flex items-center gap-1 hover:text-primary hover:border-primary border-gray-400 rounded-full p-1 border-[0.5px]"
          target="_blank"
          href={`https://www.facebook.com/groups/286649553025819/?locale=vi_VN`}
        >
          <RiFlagLine />
        </Link>
      </p>
    </div>
  );
};

export default ShareSocial;
