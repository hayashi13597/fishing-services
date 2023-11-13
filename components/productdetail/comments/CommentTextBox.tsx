"use client";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";
import React, { useState } from "react";

import { BsFillSendCheckFill } from "react-icons/bs";
import { Rate } from "antd";
interface CommentTextBoxProps {
  handleChat: any;
}
const CommentTextBox = ({ handleChat }: CommentTextBoxProps) => {
  const [message, setMessage] = useState("");
  const [reviewStar, setReviewStar] = useState(5);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleChat(message);
    setMessage(() => "");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" my-2 gap-4 border-b-[#6b6a6a11] border-b-2"
    >
      <div className="flex gap-2">
        <div>
          <a className="me-3" href="#">
            <Image
              className="rounded-full shadow-md"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(11).webp"
              alt="avatar"
              width={65}
              height={65}
            />
          </a>
        </div>
        <TextArea
          id="message"
          showCount
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={100}
          style={{ height: 60 }}
          placeholder="Nhập bình luận"
          required
        />
      </div>
      <div className="flex  justify-end w-full mt-4 mb-2">
        <Rate value={reviewStar} onChange={setReviewStar} defaultValue={5} />
        <button
          type="submit"
          className="button_send gap-1  md:w-auto  w-1/3 lg:px-4 ml-2 bg-primary"
        >
          <BsFillSendCheckFill /> Gửi
        </button>
      </div>
    </form>
  );
};

export default CommentTextBox;
