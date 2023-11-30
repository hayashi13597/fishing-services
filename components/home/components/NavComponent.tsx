import Link from "next/link";
import React from "react";

const NavComponent = () => {
  return (
    <div className="w-full hidden md:flex items-center justify-center gap-10">
      <Link
        href="/"
        className="hover:bg-primary py-2 px-4 hover:text-white rounded-full transition-all"
      >
        Trang chủ
      </Link>
      <Link
        href="/san-pham"
        className="hover:bg-primary py-2 px-4 hover:text-white rounded-full transition-all"
      >
        Sản phẩm
      </Link>
      <Link
        href="/tin-tuc"
        className="hover:bg-primary py-2 px-4 hover:text-white rounded-full transition-all"
      >
        Tin tức - Sự kiện
      </Link>
      <Link
        href="/gioi-thieu"
        className="hover:bg-primary py-2 px-4 hover:text-white rounded-full transition-all"
      >
        Giới thiệu
      </Link>
      <Link
        href="/lien-he"
        className="hover:bg-primary py-2 px-4 hover:text-white rounded-full transition-all"
      >
        Liên hệ
      </Link>
    </div>
  );
};

export default NavComponent;
