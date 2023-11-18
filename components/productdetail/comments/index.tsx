"use client";
import React, { useState } from "react";
import CommentItem from "./CommentItem";
import CommentTextBox from "./CommentTextBox";
import { initChat } from "./comment.type";
import { BiSolidStar } from "react-icons/bi";
import StarReview from "../starReview";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";

const CommentContainer = () => {
  const account = useSelector((state: RootState) => state.user.account);
  const [listComment, setListComment] = useState(initChat);

  const handleSubmit = (message: string) => {
    setListComment((prev) => [
      {
        id: account.id + Math.random(),
        user: {
          ...account,
        },
        product_id: "asdsadsa",
        comment: message,
        visiable: false,
        created_at: new Date(Date.now()).toISOString(),
        updated_at: new Date(Date.now()).toISOString(),
      },
      ...prev,
    ]);
  };
  return (
    <section>
      <CommentTextBox handleChat={handleSubmit} />

      <div className=" overflow-y-auto max-h-[50vh] scroll_y">
        {listComment.map((comment) => (
          <CommentItem comment={comment} key={comment.id} />
        ))}
      </div>
    </section>
  );
};

export default CommentContainer;
