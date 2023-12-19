"use client";
import React, { useState } from "react";
import { Validator } from "react-swisskit";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormField from "../../FormField";
import ModalStatus from "../../modal/ModalStatus";
import UserApi from "../../../services/api-client/user";
import { useDispatch } from "react-redux";
import { updateAccount } from "../../../redux/user";
import ToastNotify from "../../../services/toast";

interface ProfileAccountProps {
  email: string;
  fullname: string;
  address: string;
  phone: string;
  id: string;
}
const ProfileAccount = ({
  email,
  phone,
  address,
  fullname,
  id,
}: ProfileAccountProps) => {
  const dispatch = useDispatch();
  const schema = yup
    .object({
      email: yup
        .string()
        .email("Email không đúng định dạng")
        .matches(Validator.emailRegex, "Email không đúng định dạng")
        .required("Email không được để trống"),
      fullname: yup.string().required("Họ và tên không được để trống"),
      address: yup.string().required("Họ và tên không được để trống"),
      phone: yup
        .string()
        .matches(Validator.phoneRegex, "Số điện thoại không đúng định dạng")
        .required("Số điện thoại không được để trống"),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email,
      fullname,
      address,
      phone,
    },
  });
  const [dataUpdate, setDataUpdate] = useState({
    email,
    phone,
    address,
    fullname,
    id,
  });
  const handleStatusAction = (isChoose: boolean) => {
    if (isChoose) {
      UserApi.updateAccount({ ...dataUpdate, id })
        .then((res) => {
          dispatch(updateAccount({ ...dataUpdate }));
          ToastNotify("Cập nhập hồ sơ  thành công!").success();
        })
        .catch(() => {
          ToastNotify("Cập nhập hồ sơ   thất bại!").error();
        });
    }

    setIsOpenModal(() => false);
  };
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOnSubmit = async (data: any) => {
    setIsOpenModal(() => true);
    setDataUpdate(() => data);
  };
  return (
    <div>
      {isOpenModal && (
        <ModalStatus
          btnAccept="Cập nhập"
          btnCancel="Hủy"
          title="Bạn sẽ thay đổi thông tin chứ?"
          isCallback={handleStatusAction}
        />
      )}
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="grid md:grid-cols-2  grid-cols-1 p-3 gap-3">
          <FormField
            label="Email"
            type="text"
            id="email"
            placeholder="email@gmail.com"
            defaultValue={email}
            register={register}
            error={errors.email}
            disabled
          />
          <FormField
            label="Họ và tên"
            type="text"
            id="fullname"
            placeholder="Ốc đảo kỳ đà"
            register={register}
            error={errors.fullname}
            defaultValue={fullname}
          />
          <FormField
            label="Số điện thoại"
            type="text"
            id="phone"
            placeholder="0836xxxxxx"
            register={register}
            error={errors.phone}
            defaultValue={phone}
          />
          <FormField
            label="Địa chỉ"
            type="text"
            id="address"
            placeholder="300/34 đông hưng thuận"
            register={register}
            error={errors.address}
            defaultValue={address}
          />
        </div>

        <div className="flex ">
          <button
            type="submit"
            className="my-2 sm:m-auto sm:w-auto w-full px-4 rounded-md bg-primary py-1.5 font-medium text-blue-50 hover:opacity-80"
          >
            Cập Nhập
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileAccount;
