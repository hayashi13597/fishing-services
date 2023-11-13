import Image from "next/image";
import React from "react";

const NoticeItemProfile = () => {
  return (
    <article className="flex gap-4 hover:bg-slate-100">
      <Image
        alt="notice"
        src="/assets/notice.png"
        width={60}
        height={60}
        className="object-cover"
      />
      <div>
        <h6 className="mb-1 font-semibold">Chúc mừng thành viên mới </h6>
        <p className="text-sm">
          Bạn đã đăng ký tài khoản thành công và trở thành hội viên của chúng
          tôi.
        </p>
      </div>
    </article>
  );
};

export default NoticeItemProfile;
