"use client";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import ShareSocial from "../../ShareSocial";
import { useRouter } from "next/navigation";

const NewContent = () => {
  const router = useRouter();
  return (
    <div className="w-full md:w-3/4 border-b-2 md:border-none">
      <div className="flex justify-between opacity-75">
        <p>Công nghệ</p>
        <p>Chủ nhật, 5/11/2023, 12:29</p>
      </div>
      <h1 className="text-4xl text-center font-bold text-primary my-5 italic">
        Elon Musk: AI sẽ khiến con người mất việc
      </h1>
      <div className="">
        <p>
          Elon Musk cho rằng sẽ đến lúc con người không cần việc làm nữa bởi AI
          có thể làm mọi thứ, nhưng điều đó "vừa tốt vừa xấu". Tại cuộc trao đổi
          với Thủ tướng Anh Rishi Sunak, trong khuôn khổ AI Safety Summit 2023
          diễn ra ngày 1-2/11 ở Buckinghamshire, Musk cho rằng AI có tiềm năng
          trở thành "lực lượng đột phá nhất trong lịch sử". "Chúng ta sẽ có một
          thứ gì đó, lần đầu tiên thông minh hơn cả người thông minh nhất. Thật
          khó nói chính xác là khi nào, nhưng sẽ đến lúc không cần việc làm
          nữa", Musk nói. Theo tỷ phú công nghệ, trong tương lai đó AI sẽ có thể
          làm mọi thứ. Con người sẽ chỉ tìm một việc làm để thỏa mãn cá nhân.
          Ông cũng ví von điều này giống như con người có được những điều ước
          không giới hạn, và điều này "vừa tốt vừa xấu". "Tôi không biết điều đó
          sẽ khiến mọi người thoải mái hay khó chịu. Một trong những thách thức
          trong tương lai là làm thế nào chúng ta có thể tìm được ý nghĩa cuộc
          sống", Musk nói.
        </p>
        <div className="my-3 w-4/6 mx-auto">
          <img
            src="https://i1-sohoa.vnecdn.net/2023/11/04/NTSTAJOORZO5HI4QFGOA5MD7BE-1498-1699041107.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=mjNE-U794V1exeNrgxCyrw"
            alt="elon musk"
          />
          <p className="text-center text-xs mt-2">Elon Musk</p>
        </div>
        <p className="mb-5">
          Đây không phải lần đầu ông chủ của X cảnh báo về những mối đe dọa mà
          AI gây ra cho nhân loại. Musk từng đánh giá AI nguy hiểm hơn cả vũ khí
          hạt nhân, đồng thời là một trong những lãnh đạo công nghệ kêu gọi tạm
          dừng phát triển các AI tiên tiến hơn GPT-4 của OpenAI hồi tháng 3 năm
          nay. Tuy nhiên, việc phản đối của những lãnh đạo công nghệ như Musk
          cũng gặp nhiều ý kiến trái chiều. Một số cho rằng đây chỉ là một cách
          khéo léo để thổi phồng khả năng của AI. Số khác nói do ông chưa có sản
          phẩm đủ mạnh nên phản đối. Thực tế, sự phát triển nóng của AI thời
          gian qua cũng gây nhiều lo ngại. Đây là một trong những lý do AI
          Safety Summit 2023 được tổ chức nhằm tìm ra những rủi ro mà công nghệ
          này có thể gây ra, từ đó có biện pháp quản lý phù hợp. Tại đây, các
          chuyên gia công nghệ, chính trị gia cảnh báo về mối đe dọa hiện hữu mà
          AI tạo ra, trong đó đề cập đến kịch bản thế giới có thể đến ngày tận
          thế vì sự xuất hiện của siêu AI. Theo CNBC, tại hội nghị này, Mỹ và
          Trung Quốc dù có những căng thẳng về công nghệ, cũng đã đồng thuận
          trong nhiều vấn đề xung quanh AI, như quản lý và phát triển AI một
          cách an toàn.
        </p>
        <p className="font-bold text-right">Lưu Quý</p>
        <div className="flex justify-between mb-5">
          <div className="flex items-center">
            <button
              className="py-2 px-4 bg-primary rounded-lg text-white transition-all hover:opacity-80 flex items-center gap-1"
              onClick={() => router.back()}
            >
              <BiArrowBack /> Trở lại
            </button>
          </div>
          <ShareSocial link="facebook.com" />
        </div>
      </div>
    </div>
  );
};

export default NewContent;
