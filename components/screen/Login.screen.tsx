"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
import Authentication from "../../services/auth";
import ToastNotify from "../../services/toast";
import FormField from "../../components/FormField";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Validator } from "react-swisskit";
import Breadcrumb from "../../components/Breadcrumb";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { updateAccount } from "../../redux/user";
import cookieClient from "../../services/cookie";
import UserApi from "../../services/api-client/user";
import { handleAttachTokenNotSave } from "../../services/api-client";
import { AddNotice } from "../../redux/notices";

const structurePage = [{ page: "Đăng nhập", link: "/dang-nhap", last: true }];

const LoginScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isCheckbox, setIsCheckbox] = useState(true);

  const schema = yup
    .object({
      email: yup
        .string()
        .email("Email không đúng định dạng")
        .matches(Validator.emailRegex, "Email không đúng định dạng")
        .required("Email không được để trống"),
      password: yup
        .string()
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
        .required("Mật khẩu không được để trống"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleUpdateAccount = (res) => {
    const { account, notices } = res.data;

    if (res.statusCode >= 400) {
      ToastNotify(res.message).error();
    } else {
      dispatch(AddNotice(notices));
      dispatch(updateAccount(account));
      handleAttachTokenNotSave(account.accessToken, isCheckbox);
      ToastNotify(res.message).success();
      router.push("/");
    }
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
      .catch(() => {
        ToastNotify("Đăng nhập thất bại").error();
      });
  };

  const handleOnSubmit = async (data) => {
    // tạo tài khoảng
    UserApi.login(data)
      .then(handleUpdateAccount)
      .catch(() => {
        ToastNotify("Đăng nhập thất bại").error();
      });
  };

  return (
    <section className="container mx-auto">
      <Breadcrumb structurePage={structurePage} title="Đăng nhập" />
      <div className="flex flex-col items-center justify-center pb-10">
        <div className="w-full bg-neutral-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(handleOnSubmit)}
            >
              <FormField
                label="Email"
                type="email"
                id="email"
                placeholder="xxxxxx"
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
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      checked={isCheckbox}
                      onChange={(e) => {
                        setIsCheckbox(e.target.checked);
                      }}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500">
                      Nhớ mật khẩu
                    </label>
                  </div>
                </div>
                <Link
                  href="/quen-mat-khau"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Quên mật khẩu?
                </Link>
              </div>
              <Button
                title="Đăng nhập"
                type="submit"
                textColor="text-white"
                bgColor="bg-primary"
                submitting={isSubmitting}
              />
              <p className="text-sm font-light text-gray-500">
                Bạn không có tài khoản?
                <Link
                  href="/dang-ky"
                  className="font-medium text-primary hover:underline ml-1"
                >
                  Đăng ký ngay
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
                Đăng nhập bằng google
              </div>
              <div
                onClick={() => Authentication.signFacebook(dataCallback)}
                className="w-full flex justify-center items-center gap-4 bg-white border border-gray-400 py-2 rounded-full cursor-pointer hover:bg-neutral-300 hover:border-neutral-300 transition-all duration-200"
              >
                <img src="/assets/facebook-icon.png" alt="facebook icon" />
                Đăng nhập bằng facebook
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginScreen;
