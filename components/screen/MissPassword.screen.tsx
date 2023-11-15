"use client";

import Link from "next/link";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Validator } from "react-swisskit";

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import type { Metadata } from "next";

import { handleAttachToken } from "../../services/api-client";
import ToastNotify from "../../services/toast";
import { updateAccount } from "../../redux/user";
import Breadcrumb from "../Breadcrumb";
import FormField from "../FormField";
import Button from "../Button";
import ModalStatus from "../modal/ModalStatus";
import ModalDialog from "../modal/ModalDialog";
import TimeRuning from "../TimeRuning";
import UserApi from "../../services/api-client/user";

const structurePage = [
  { page: "Quên Mật khẩu", link: "/quen-mat-khau", last: true },
];

const MissPassword = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isProtecting, setIsProtecting] = useState(false);
  const [isVeryfy, setIsVeryfy] = useState(true);

  const [codeProtect, setCodeProtect] = useState("");

  const schema = yup
    .object({
      email: yup
        .string()
        .email("Email không đúng định dạng")
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
        .required("Mật khẩu không được để trống"),
      code: yup.string(),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      code: "",
    },
  });

  const [isOpenModalStatus, setIsOpenModalStatus] = useState(false);
  const [isOpenModalNotice, setIsOpenModalNotice] = useState(false);
  const [contentModalNotice, setContentModalNotice] = useState("");
  const [isTimeOut, setIsTimeOut] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // nhận mã và verify

  const handleRedirect = (isChoose: boolean) => {
    if (isChoose && isSuccess) {
      router.push("/tai-khoan?page=doi-mat-khau");
    }
    setIsOpenModalStatus(false);
  };

  const handleCallbackVeryfyToken = (isChose: boolean) => {
    setIsOpenModalNotice(() => false);
  };

  // reset
  useEffect(() => {
    return () => {
      setIsOpenModalStatus(false);
      setContentModalNotice("");
      setIsVeryfy(true);
      setIsTimeOut(false);
      setCodeProtect("");
    };
  }, []);
  const handleOnSubmit = async (data) => {
    if (data.code) {
      UserApi.verifyCode(data)
        .then((res) => {
          dispatch(updateAccount(res.data));
          setContentModalNotice(
            `Mã Xác nhận chính xác mật khẩu mới là <strong>123456</strong>`
          );

          setIsOpenModalStatus(true);
          setIsOpenModalNotice(true);
          setIsTimeOut(true);
          setIsSuccess(true);
        })
        .catch(({ message }) => {
          ToastNotify(message).error();
          setIsSuccess(false);
        });
      reset();
      return;
    }
    UserApi.checkAccountMissPassword({
      email: data.email,
    })
      .then((res: any) => {
        setIsProtecting(() => true);
        ToastNotify(res.message).success();
      })
      .catch(({ message }) => {
        setContentModalNotice(message);
        setIsOpenModalNotice(true);
        setContentModalNotice(message);
      });
  };

  return (
    <section className="container mx-auto">
      <Breadcrumb structurePage={structurePage} title="Quên Mật khẩu" />
      {isOpenModalNotice && (
        <ModalDialog
          message={contentModalNotice}
          isCallback={handleCallbackVeryfyToken}
        />
      )}
      {isOpenModalStatus && (
        <ModalStatus
          btnAccept="chấp nhận"
          btnCancel="Hủy"
          title="Bạn có muốn chuyển trang đổi mật khẩu không?"
          isCallback={handleRedirect}
        />
      )}
      <div className="flex flex-col items-center justify-center pb-10">
        <div className="w-full bg-neutral-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {isProtecting ? (
              <form
                onSubmit={handleSubmit(handleOnSubmit)}
                className="space-y-4 md:space-y-6"
              >
                <FormField
                  label="Mả Xác thực"
                  type="text"
                  id="code"
                  name="code"
                  placeholder="xxxxxx"
                  register={register}
                  error={errors.code}
                />
                {!isVeryfy && (
                  <p className="text-red-400">Xác thực không chính xác</p>
                )}
                {!isTimeOut && !isSuccess && (
                  <TimeRuning setTimeOfff={setIsTimeOut} />
                )}
                <div>
                  <button
                    type={isSuccess ? "button" : "submit"}
                    onClick={() => {
                      isTimeOut && isSuccess && router.push("/dang-nhap");
                      isTimeOut && !isSuccess && setIsProtecting(false);
                    }}
                    className="w-full text-white bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:opacity-80 transition-all"
                  >
                    {!isTimeOut
                      ? "Xác thực"
                      : isSuccess
                      ? "Đăng nhập"
                      : "Xác thực lại"}
                  </button>
                </div>
              </form>
            ) : (
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(handleOnSubmit)}
              >
                <FormField
                  label="Email"
                  type="text"
                  id="email"
                  placeholder="email@gmail.com"
                  register={register}
                  error={errors.email}
                />

                <Button
                  title={"Kiểm tra"}
                  type="submit"
                  textColor="text-white"
                  bgColor="bg-primary"
                  submitting={isSubmitting}
                />
                <p className="text-sm font-light text-gray-500">
                  Bạn không có tài khoản?{" "}
                  <Link
                    href="/dang-ky"
                    className="font-medium text-primary hover:underline"
                  >
                    Đăng ký ngay
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissPassword;
