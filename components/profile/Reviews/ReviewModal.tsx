import React, { useState } from "react";
import { Modal, Input, Form } from "antd";
import Image from "next/image";
import Rating from "./Rating";
import { IProduct } from "../../home/ProductContainer";

const { TextArea } = Input;

type ReviewItemType = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  handleCancel: () => void;
  product?: IProduct;
};

const ReviewModal = ({
  isModalOpen,
  setIsModalOpen,
  handleCancel,
  product,
}: ReviewItemType) => {
  const [rating, setRating] = useState(3);
  const [hover, setHover] = useState(null);
  const [form] = Form.useForm();
  const content = Form.useWatch("content", form);

  const handleSubmit = () => {
    console.log("Rating: ", rating);
    console.log("Content: ", content);
  };

  return (
    <Modal
      title="Đánh giá sản phẩm #mã sản phẩm"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={""}
    >
      <div className="flex flex-col mt-3">
        <div className="flex gap-5 items-center">
          <div className="w-14 h-14">
            <Image
              src={`/assets/can-cau.jpg`}
              alt="can cau"
              width={200}
              height={200}
              className="w-full object-cover"
            />
          </div>
          <div className="">
            <h3 className="text-text font-medium line-clamp-1">
              Cần câu tay FH3 - 1522
            </h3>
            <p className="text-text/50 text-sm">
              Danh mục: <span>Cần câu</span>
            </p>
          </div>
        </div>
        <div className="border my-2"></div>
        <Rating
          title="Chất lượng sản phẩm"
          rating={rating}
          setRating={setRating}
          hover={hover}
          setHover={setHover}
        />
        <Form form={form} name="ratingForm" onFinish={handleSubmit}>
          <div className="bg-white mt-3 p-2 rounded-md">
            <p className="font-medium mb-2">Chất lượng sản phẩm:</p>
            <p className="border mt-1"></p>
            <Form.Item
              name="content"
              rules={[
                {
                  required: true,
                  message: "Chất lượng sản phẩm không được để trống",
                },
              ]}
            >
              <TextArea
                rows={4}
                placeholder="Hãy chia sẽ nhận xét cho sản phẩm này bạn nhé!"
                className="bg-white border-none outline-none focus:outline-none focus:border-none"
              />
            </Form.Item>
          </div>
          <div className="flex justify-end">
            <button
              className="w-1/3 text-white bg-primary rounded-lg px-4 py-2 hover:opacity-80 transition-all duration-300 mt-3"
              type="submit"
            >
              Đánh giá
            </button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default ReviewModal;
