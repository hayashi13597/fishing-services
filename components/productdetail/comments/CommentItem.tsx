import React from "react";
import { HandleTimeDiff } from "../../../utils";
import Image from "next/image";
import { ICommentItem } from "./comment.type";

interface CommentItemProps {
  comment: ICommentItem;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  return (
    <div className="flex items-start mt-4">
      <a className="me-3" href="#">
        <Image
          className="rounded-full shadow-md"
          src={comment.user.avatar}
          alt="avatar"
          width={65}
          height={65}
        />
      </a>
      <div className="flex ">
        <div>
          <div className="flex justify-between items-center">
            <p className="mb-1">
              <span className="font-semibold capitalize">
                {comment.user.fullname}
              </span>
              <span className="text-xs">
                - {HandleTimeDiff(comment.created_at)}
              </span>
            </p>
          </div>
          <p className="text-sm mb-0">
            {comment.comment} Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Labore placeat, eveniet dignissimos assumenda
            praesentium rerum, natus tempore quod repellendus temporibus officia
            adipisci eligendi repudiandae ipsa sit consequuntur totam similique
            tempora.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
