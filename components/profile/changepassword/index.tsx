"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import ToastNotify from "../../../services/toast";
import UserApi from "../../../services/api-client/user";
import FormField from "../../FormField";
import ModalStatus from "../../modal/ModalStatus";
interface FormChangePassword {
  oldPassword: string;
  password: string;
  confirmPassword: string;
}
interface ChangePasswordProps {
  id: string;
}
const ChangePassword = ({ id }: ChangePasswordProps) => {
  const schema = yup
    .object({
      oldPassword: yup.string().required("Mật khẩu cũ không được để trống"),
      password: yup
        .string()
        .min(6, "Mật khẩu mới phải có ít nhất 6 ký tự")
        .required("Mật khẩu mới không được để trống"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Mật khẩu mới không khớp nhau")
        .required("Xác nhận mật khẩu mới không được để trống"),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({
    id,
    newPassword: "",
    oldPassword: "",
  });

  const handleStatusAction = (isChoose: boolean) => {
    if (isChoose) {
      UserApi.changePassword(dataUpdate)
        .then(() => {
          ToastNotify("Thay đổi mật khẩu mới  thành công").success();
        })
        .catch((err) => {
          ToastNotify(err?.message).error();
        });
    }

    setIsOpenModal(() => false);
  };
  const handleOnSubmit = async (data: FormChangePassword) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Mật khẩu không trùng nhau",
      });
      return;
    }
    if (data.password == data.oldPassword) {
      setError("password", {
        type: "manual",
        message: "Mật khẩu mới phải khác khác mật khẩu cũ",
      });
      return;
    }
    setIsOpenModal(() => true);
    setDataUpdate(() => ({
      id,
      newPassword: data.password,
      oldPassword: data.oldPassword,
    }));
  };
  return (
    <div>
      {isOpenModal && (
        <ModalStatus
          btnAccept="Cập nhập"
          btnCancel="Hủy"
          title="Bạn sẽ thay đổi mật khẩu mới?"
          isCallback={handleStatusAction}
        />
      )}
      <div className="w-full">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <FormField
              label="Mật khẩu cũ"
              type="password"
              id="oldPassword"
              placeholder="••••••••"
              register={register}
              error={errors.oldPassword}
            />
            <FormField
              label="Mật khẩu mới"
              type="password"
              id="password"
              placeholder="••••••••"
              register={register}
              error={errors.password}
            />
            <FormField
              label="Xác nhận mật khẩu mới"
              type="password"
              id="confirmPassword"
              placeholder="••••••••"
              register={register}
              error={errors.confirmPassword}
            />
            <div className="flex ">
              <button
                type="submit"
                className="my-2 sm:m-auto sm:w-auto w-full px-4 rounded-md bg-primary py-1.5 font-medium text-blue-50 hover:opacity-80"
              >
                Cập nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
