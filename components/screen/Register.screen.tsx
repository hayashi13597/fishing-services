"use client";

import Link from "next/link";
import React, { useCallback } from "react";
import Authentication from "../../services/auth";
import ToastNotify from "../../services/toast";
import UserApi from "../../services/api-client/user";
import cookieClient from "../../services/cookie";
import FormField from "../../components/FormField";
import { useForm } from "react-hook-form";
import { FormState } from "../../common.types";
import Button from "../../components/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Validator } from "react-swisskit";
import Breadcrumb from "../../components/Breadcrumb";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { updateAccount } from "../../redux/user";
import { handleAttachToken } from "../../services/api-client";
import { AddNotice } from "../../redux/notices";
const structurePage = [{ page: "Đăng ký", link: "/dang-ky", last: true }];

const RegisterScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const schema = yup
    .object({
      fullname: yup
        .string()
        .required("Họ và tên  không được để trống")
        .min(5, "Họ và tên ít nhất 5 ký tự"),
      email: yup
        .string()
        .email("Email không đúng định dạng")
        .matches(Validator.emailRegex, "Email không đúng định dạng")
        .required("Email không được để trống"),
      password: yup
        .string()
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
        .required("Mật khẩu không được để trống"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Mật khẩu không khớp nhau")
        .required("Xác nhận mật khẩu không được để trống"),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleUpdateAccount = (res) => {
    const { account, notices = [] } = res.data;

    dispatch(AddNotice(notices));
    dispatch(updateAccount(account));

    handleAttachToken(account.accessToken);
    ToastNotify(res.message).success();
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };
  const dataCallback = (res: any) => {
    const {
      uid = "",
      photoURL: avatar,
      email = "",
      displayName: fullname,
    } = res.user;

    if (!uid) return ToastNotify("Đăng ký thất bại").error();
    // mình sẽ nới sẵn đata như này
    UserApi.authenWithFirebase({ uid, avatar, email, fullname })
      .then(handleUpdateAccount)
      .catch((err) => {
        ToastNotify(err?.message || "Đăng nhập thất bại").error();
      });
  };

  const handleOnSubmit = async (data: FormState) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Mật khẩu không trùng nhau",
      });
      return;
    }
    // tạo tài khoảng
    UserApi.register(data)
      .then(handleUpdateAccount)
      .catch((err) => {
        ToastNotify(err?.message || "Đăng nhập thất bại").error();
      });
  };

  return (
    <section className="container mx-auto">
      <Breadcrumb structurePage={structurePage} title="Đăng ký" />
      <div className="flex flex-col justify-center items-center pb-10">
        <div className="w-full bg-neutral-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(handleOnSubmit)}
            >
              <FormField
                label="Họ và tên"
                type="text"
                id="fullname"
                placeholder="xxxxxx"
                register={register}
                error={errors.fullname}
              />
              <FormField
                label="Email"
                type="email"
                id="email"
                placeholder="email@gmail.com"
                register={register}
                error={errors.email}
              />
              <FormField
                label="Mật khẩu"
                type="password"
                id="password"
                placeholder="••••••••"
                register={register}
                error={errors.password}
              />
              <FormField
                label="Xác nhận mật khẩu"
                type="password"
                id="confirmPassword"
                placeholder="••••••••"
                register={register}
                error={errors.confirmPassword}
              />
              <Button
                title="Đăng ký"
                type="submit"
                textColor="text-white"
                bgColor="bg-primary"
                submitting={isSubmitting}
              />
              {/* <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Đăng ký
              </button> */}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Bạn đã có tài khoản?{" "}
                <Link
                  href="/dang-nhap"
                  className="font-medium text-primary hover:underline dark:text-primary-500"
                >
                  Đăng nhập ngay
                </Link>
              </p>
              <div className="relative flex justify-center items-center h-5">
                <p className="w-full h-[2px] bg-black"></p>
                <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white px-2">
                  Hoặc
                </span>
              </div>
              <div
                onClick={() => Authentication.signGoogle(dataCallback)}
                className="w-full flex justify-center items-center gap-4 bg-white border border-gray-400 py-2 rounded-full cursor-pointer hover:bg-neutral-300 hover:border-neutral-300 transition-all duration-200"
              >
                <img src="/assets/google-icon.png" alt="google icon" />
                Đăng ký bằng google
              </div>
              <div
                onClick={() => Authentication.signFacebook(dataCallback)}
                className="w-full flex justify-center items-center gap-4 bg-white border border-gray-400 py-2 rounded-full cursor-pointer hover:bg-neutral-300 hover:border-neutral-300 transition-all duration-200"
              >
                <img src="/assets/facebook-icon.png" alt="facebook icon" />
                Đăng ký bằng facebook
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterScreen;
