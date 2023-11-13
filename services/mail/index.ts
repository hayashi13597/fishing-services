"use strict";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.NODEMAILER_USERNAME || "namph2102@gmail.com",
    pass: process.env.NODEMAILER_PASSWORD || "tatvcdfftwrtwzwb",
  },
});
class SendMailService {
  async register(email: string, createdAt: string) {
    const info = await transporter
      .sendMail({
        from: `"${email} 👻" <adminocdao@gmail.com>`, //Địa chỉ gửi
        to: `${email}, adminocdao@gmail.com`, //  danh sách người nhận
        subject: "Chúc mừng thành viên mới ✔", // Tiêu đề
        text: "Hello world?", // plain text body
        html: ` <div>
        <h1>Xin chào <strong>thành viên mới</strong></h1>
        <br />
        <p>
          Chúng tôi xin gửi lời chúc mừng đến bạn về việc tạo tài khoản thành công
          trên nền tảng của chúng tôi. Chúc mừng bạn đã tham gia vào cộng đồng của
          chúng tôi!
        </p>
        <br />
        <p>Thông tin tài khoản của bạn:</p>
        <ul>
          <li>Tài khoản: <strong> ${email}</strong></li>
          <li>Ngày tạo: <strong> ${createdAt}</strong></li>
        </ul>
        <br />
        <p>
          Chúng tôi rất vui mừng khi bạn đã quyết định tham gia cùng chúng tôi và
          chúng tôi tin rằng bạn sẽ có những trải nghiệm thú vị và bổ ích tại đây.
        </p>
        <br />
        <p>
          Chúc bạn có một thời gian thú vị và hạnh phúc khi sử dụng tài khoản của
          mình trên nền tảng của chúng tôi!
        </p>
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

    console.log("Message sent: %s", info.messageId); // nếu trả ra id là bạn gửi dúng rồi
  }
  async codeChangePassword(email: string, code: string | number) {
    const info = await transporter
      .sendMail({
        from: `"namph2102@gmail.com 👻" <namph2102@gmail.com>`, //Địa chỉ gửi
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
        <li>Tồn tại trọng: <strong> 2 phút</strong></li>
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
  }
}

export default new SendMailService();
