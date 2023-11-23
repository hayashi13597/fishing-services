import nodemailer from "nodemailer";

import { NextResponse } from "next/server";

export async function POST(req) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.NODEMAILER_USERNAME || "namph2102@gmail.com",
      pass: process.env.NODEMAILER_PASSWORD || "tatvcdfftwrtwzwb",
    },
  });
  const data = await req.json();
  const { email, code } = data;
  if (!email || !code)
    return NextResponse.json({
      status: false,
      message: "Email không tồn tại",
      code,
    });
  const info = await transporter
    .sendMail({
      from: `"Ốc đảo kỳ đà 👻"<namph2102@gmail.com>`, //Địa chỉ gửi
      to: `${email}`, //  danh sách người nhận
      subject: "Xác nhận quên mật khẩu ✔", // Tiêu đề
      text: "Hello world?", // plain text body
      html: ` <div>
  <h1>Mã xác nhận của bạn</h1>
  <br />
  <div style="display: flex">
  <div
    style="
      background-color: aquamarine;
      border-radius: 8px;
      margin: auto;
      padding: 8px 16px;
      font-weight: 800;
      font-size: 24px;
      letter-spacing: 3px;
    "
  >
    ${code}
  </div>
</div>
<br />
  <p>Lưu ý:</p>
  <ul>
    <li>Không chia sẻ  mã code  bất kỳ ai:</li>
    <li>Chỉ tồn tại trong: <strong> 2 phút</strong></li>
  </ul>
  <br />
 
  <div>
    <p>Trân trọng,</p>
    <p>Nguyễn Quốc Trường</p>
    <p>Hồ câu cá Ốc đảo kỳ đà</p>
    <p>Địa chỉ email liên hệ: adminocdao@gmail.com</p>
    <p>Số điện thoại liên hệ: 0347.088.538</p>
  </div>
</div>`, // Nội dung trong Email Dạng inline style
    })
    .catch((err) => {
      throw new Error(err);
    });

  console.log("Message sent: %s", info.messageId);
  return NextResponse.json({
    status: true,
    code,
    message: "Gửi mail thành công",
  });
}

nodemailer;
