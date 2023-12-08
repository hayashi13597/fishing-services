import React, { useState } from "react";
import { Modal, Input, Form } from "antd";
import Image from "next/image";
import Rating from "./Rating";
import { IProduct } from "../../home/ProductContainer";
import ReviewApi from "../../../services/api-client/review";
import ToastNotify from "../../../services/toast";

const { TextArea } = Input;

type ReviewItemType = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  handleCancel: () => void;
  review: {
    Product: IProduct;
    quantity: number;
    id: string;
  };
  idAccount: string;
  setTotal: any;
};

const ReviewModal = ({
  isModalOpen,
  setIsModalOpen,
  handleCancel,
  review,
  setTotal,
}: ReviewItemType) => {
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(null);
  const [form] = Form.useForm();

  const content = Form.useWatch("content", form);
  const { Product: product } = review;
  const handleSubmit = () => {
    if (!content) {
      return ToastNotify("Nội dung không được để trống").error();
    }

    ReviewApi.Evaluate(review.id, product.id, rating, content)
      .then((res: any) => {
        ToastNotify(res.message).success();
        setIsModalOpen(false);
        setTotal((prev) => prev - 1);
        form.setFieldValue("content", "");
        setRating(5);
      })
      .catch((err) => {
        ToastNotify(err?.message || "Đánh giá thất bại").error();
      });
  };

  return (
    <Modal
      title={`Đánh giá sản phẩm`}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={""}
    >
      <div className="flex flex-col mt-3">
        <div className="flex gap-5 items-center">
          <div className="w-14 h-14">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={200}
              height={200}
              className="w-full object-cover"
            />
          </div>
          <div className="">
            <h3 className="text-text font-medium line-clamp-1 capitalize">
              {product.name}
            </h3>
            <p className="text-text/50 text-sm">
              Danh mục:{" "}
              <span className="capitalize"> {product.Category.name}</span>
            </p>
          </div>
        </div>
        <div className="border my-2"></div>
        <Rating
          title="Điểm đánh giá"
          rating={rating}
          setRating={setRating}
          hover={hover}
          setHover={setHover}
        />
        <Form form={form} name="ratingForm" onFinish={handleSubmit}>
          <div className=" mt-3 p-2 rounded-md">
            <p className="font-medium mb-2">Chất lượng sản phẩm:</p>
            <p className=" mt-1"></p>
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
                className=" outline-none focus:outline-none focus:border-none border-[1px]"
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
