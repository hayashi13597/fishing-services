"use client";
import React, { useState } from "react";
import { Input } from "antd";
import { RiSendPlaneFill } from "react-icons/ri";
import FormField from "../FormField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Validator } from "react-swisskit";
import ToastNotify from "../../services/toast";
import NoticeApi from "../../services/api-client/notice";
import ContactApi from "../../services/api-client/contact";
const { TextArea } = Input;
const InfoMail = () => {
  const [message, setMessage] = useState("");

  const schema = yup
    .object({
      email: yup
        .string()
        .matches(Validator.emailRegex, "Email không đúng định dạng")
        .email("Email không đúng định dạng")
        .required("Email không được để trống"),
      phone: yup
        .string()
        .matches(Validator.phoneRegex, "Phone không đúng định dạng")
        .min(9, "Phone  có 10 hoặc 11 ký tự")
        .max(12, "Phone  ckhương vượt quá 12 ký tự")
        .required("Phone  không được để trống"),
      fullname: yup.string().required("Họ và tên không được để trống"),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleOnSubmit = (data) => {
    if (!message) {
      ToastNotify("Vui lòng điền nội dung liên hệ").error();
      return;
    }
    data.content = message;

    ContactApi.create(data)
      .then(() => {
        ToastNotify("Liên hệ thành công").success();
        reset();
        setMessage(() => "");
      })
      .catch(() => ToastNotify("Liên hệ thất bại").error());
  };
  return (
    <div className="bg-[url('/assets/info.png')] lg:h-400 bg-cover py-10">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center text-white font-medium capitalize">
          Liên hệ
        </h2>
        <p className="text-center text-white mt-1">
          Bạn vui lòng để lại thông tin chúng tôi sẽ liên hệ với bạn trong thời
          gian sớm nhất
        </p>
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          action=""
          className="mt-4"
        >
          <div className="grid md:grid-cols-3 gap-4 grid-cols-1 mb-2">
            <FormField
              type="text"
              id="fullname"
              placeholder="Họ và tên"
              register={register}
              error={errors.fullname}
            />
            <FormField
              type="email"
              id="email"
              placeholder="email@gmail.com"
              register={register}
              error={errors.email}
            />
            <FormField
              type="text"
              id="phone"
              placeholder="Số điện thoại"
              register={register}
              error={errors.phone}
            />
          </div>
          <TextArea
            placeholder="Nhập nội dung"
            rows={4}
            name="content"
            id="content"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className=" text-gray-900 mt-2 "
          />
          <div className="flex w-full justify-center mt-4 ">
            <button
              type="submit"
              className="bg-primary md:w-auto w-full text-white md:py-2 py-3 px-4 text-base hover:bg-primary/80 flex rounded-full gap-1 justify-center items-center"
            >
              <RiSendPlaneFill /> <span>Gủi Thông tin</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InfoMail;
