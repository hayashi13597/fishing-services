"use client";
import Image from "next/image";
import React from "react";
import { footerAddress } from "../../constants";

import Link from "next/link";
import Address from "./Address";
const Footer = () => {
  return (
    <>
      <footer className="relative bg-[url('/assets/footer.png')] bg-no-repeat min-h-full  pt-8 text-white bg-cover ">
        <Image
          src="/assets/logo-footer.png"
          width={142}
          height={179}
          alt="logo"
          className="absolute top-0 left-0 md:block hidden"
        />
        <div className="container mx-auto">
          <article className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1  gap-y-4">
            <section className="md:col-span-2 col-span-1 pr-2">
              <p className="title-footer relative">Thông tin liên hệ </p>
              <Address />
              {/* <p className="flex items-center flex-wrap mt-4">
                <span className="text-primary inline-block min-w-[25px]">
                  <BiMapPin />
                </span>
                Address : dsad sa dsa
              </p> */}
              {/* <div className="flex gap-2 mt-3">
                {footerAddress.social.map((item) => {
                  const IconElement = item.icon;
                  return (
                    <Link
                      key={`social-${item.title}`}
                      href={`${item.ref}`}
                      className="flex items-center justify-center py-2 hover:bg-primary w-10 h-10  ease-in duration-100 rounded-full text-xl border-white border-[1px]"
                      target="_blank"
                    >
                      <IconElement />
                    </Link>
                  );
                })}
              </div> */}
              {/* <div className="flex gap-2 mt-2">
                <Link
                  href={"https://www.facebook.com/namhoai"}
                  className="flex items-center justify-center py-2 hover:bg-primary w-10 h-10  ease-in duration-100 rounded-full text-2xl border-white border-[1px]"
                  target="_blank"
                >
                  <BiLogoFacebook />
                </Link>
              </div> */}
            </section>
            <section className="md:col-span-2 col-span-2">
              <p className="title-footer relative">FANPAGE FACEBOOK </p>
              <div
                className="fb-page lg:w-[600px] md:w-[320px] w-[300px]"
                data-href="https://www.facebook.com/profile.php?id=100087004991368"
                data-tabs="timeline"
                data-height="200"
                data-width="320"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/profile.php?id=100087004991368"
                  className="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/profile.php?id=100087004991368">
                    Zecky - Ứng dụng nhắn tin
                  </a>
                </blockquote>
              </div>
            </section>
            <section className="col-span-1">
              <p className="title-footer relative">GOOGLE MAP</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71421.55241001902!2d106.6075776018345!3d10.748307898794643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4e3e1baf21%3A0x71992461b247bff5!2zSOG7kyBjw6J1IGPDoSBnaeG6o2kgdHLDrSDhu5BjIMSQ4bqjbyBL4buzIMSQw6A!5e0!3m2!1svi!2s!4v1697100335563!5m2!1svi!2s"
                className="w-full lg:h-[200px] h-32"
                style={{
                  border: "0",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </section>
          </article>
          <p className="text-center pb-2 pt-8 text-sm">
            © 2023 FBTeam-Fish Product. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
