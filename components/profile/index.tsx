"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  BiBell,
  BiShieldAlt2,
  BiTrash,
  BiUpload,
  BiUser,
} from "react-icons/bi";
import { BsCamera } from "react-icons/bs";
import { FaRegListAlt, FaStar } from "react-icons/fa";
import ProfileAccount from "./infoaccount";
import "../modal/modal.scss";
import { cn } from "react-swisskit";
import UserApi from "../../services/api-client/user";
import ToastNotify from "../../services/toast";
import ChangePassword from "./changepassword";
import { useSearchParams } from "next/navigation";
import NoticeContainer from "./noticecontainer/NoticeContainer";
import HistoryPurChase from "./historypurchase";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { updateAccount } from "../../redux/user";
import ModalStatus from "../modal/ModalStatus";
import Reviews from "./Reviews";
enum InfoProfile {
  "lich-su-mua-hang" = "Lịch sử mua hàng",
  "thong-tin-ca-nhan" = "Thông tin cá nhân",
  "doi-mat-khau" = "Đổi mật khẩu",
  "thong-bao" = "Thông báo",
  "danh-gia" = "Đánh giá",
}
const ProfilePage = () => {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") || "thong-tin-ca-nhan";
  const [tabs, SetTab] = useState(currentPage);
  const [imageUpload, setImageUpload] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [formData, setFromDAta] = useState<any>();
  const account = useSelector((state: RootState) => state.user.account);
  const dispatch = useDispatch();
  // gửi ảnh
  const handleChoose = (isChoose: boolean) => {
    if (!isChoose) {
    } else {
      account.id &&
        UserApi.ChangeAvatar(formData)
          .then((res: any) => {
            ToastNotify("Cập nhập ảnh đại diện thành công").success();
            dispatch(updateAccount({ avatar: res.data.avatar }));
          })
          .catch(() => ToastNotify("Cập nhập thất bại").error());
    }
    setIsOpenModal(false);
  };

  const handleChangeAvata = async (e: any) => {
    const file: File = e.target.files[0];
    if (file.size / 1000 > 200) {
      ToastNotify(`Chỉ Cập nhập ảnh nhỏ hơn 200 KB`).error();
      return;
    }
    const blog = URL.createObjectURL(file);
    setImageUpload(blog);
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    bodyFormData.append("id", account.id);
    setFromDAta(bodyFormData);
  };
  useEffect(() => {
    if (account.id) {
      setImageUpload(account.avatar);
    }
  }, [account.id]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.title = InfoProfile[tabs];
      window.history.replaceState(
        {},
        InfoProfile[tabs],
        `/tai-khoan?page=${tabs}`
      );
    }
  }, [tabs]);

  const [isOpenModalResetImage, setOpenModalResetImage] = useState(false);
  const handleDelete = (isChoose: boolean) => {
    if (isChoose) {
      account.id &&
        UserApi.ResetAvatar(account.id).then((res: any) => {
          ToastNotify("Cập nhập ảnh đại diện mặt định").success();
          dispatch(updateAccount({ avatar: res.data.avatar }));
        });
    }
    setOpenModalResetImage(() => false);
  };
  const handleResetAvatar = () => {
    setOpenModalResetImage(() => true);
    handleChoose(false);
  };
  return (
    <div className="my-8">
      {isOpenModalResetImage && (
        <ModalStatus
          btnAccept="Xóa"
          btnCancel="Hủy"
          title="Bạn chắc chắn sẽ xóa nó?"
          isCallback={handleDelete}
        />
      )}
      {/* Modal status upload iamge */}
      <div
        onClick={() => {
          handleChoose(false);
        }}
        className={cn(
          "flex z-50 inset-0 fixed bg-black/50",
          isOpenModal ? "" : "hidden"
        )}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="sm:w-[450px] w-[300px] m-auto  p-8  bg-white rounded-xl relative"
        >
          <h6 className="modal__title font-bold text-2xl text-center mb-8">
            Thay đổi ảnh đại diện
          </h6>
          <div className="flex gap-4 items-center">
            <div className="flex basis-1/2">
              <Image
                alt="profile"
                width={120}
                height={120}
                className="object-cover rounded-full m-auto"
                src={
                  imageUpload
                    ? imageUpload
                    : "https://elearning.iigvietnam.com/images/default-avatar.jpg"
                }
              />
            </div>
            <div className="flex flex-col  gap-4 ">
              <label
                htmlFor="user-profile-upload"
                className="flex items-center gap-2 hover:text-primary cursor-pointer"
              >
                <BiUpload /> <span>Tải ảnh đại diện lên</span>
              </label>
              <button
                onClick={handleResetAvatar}
                className="flex items-center gap-2 hover:text-primary cursor-pointer"
              >
                <BiTrash /> <span>Xóa ảnh đại diện</span>
              </button>
            </div>
          </div>
          <div className="modal__btns">
            <button
              onClick={() => handleChoose(false)}
              className="modal__btn modal__btn--apply bg-primary text-white hover:bg-blue-800"
              type="button"
            >
              Hủy bỏ
            </button>
            <button
              disabled={imageUpload == ""}
              onClick={() => handleChoose(true)}
              className={cn(
                "modal__btn modal__btn--dismiss border-2 ",
                imageUpload
                  ? "bg-blue-800/90 hover:bg-blue-800 text-white"
                  : "opacity-75 !text-black"
              )}
              type="button"
            >
              Cập nhập
            </button>
          </div>
          <button
            onClick={() => handleChoose(false)}
            title="Close (Esc)"
            type="button"
            className="absolute top-2 right-3 text-text text-3xl hover:text-primary"
          >
            ×
          </button>
        </div>
      </div>
      <input
        onChange={handleChangeAvata}
        id="user-profile-upload"
        type="file"
        className="hidden"
      />

      <div className="lg:flex  gap-4 ">
        <div className="basis-1/3 border p-3 cursor-pointer">
          <div className="flex gap-4">
            <div
              onClick={() => setIsOpenModal(!isOpenModal)}
              className="relative w-[60px] h-[60px]"
            >
              <Image
                alt="profile"
                width={60}
                height={60}
                className="object-cover rounded-full"
                src={account.avatar}
              />
              <div className="absolute right-1 -bottom-1 p-1 text-white bg-primary rounded-full">
                <BsCamera />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-semibold text-lg capitalize">
                {account.fullname || account.email}
              </h1>
              <p className="text-sm opacity-90"> {account.email}</p>
            </div>
          </div>
          <section className="mt-4 pl-2 flex flex-col gap-3">
            <div
              onClick={() => SetTab("thong-tin-ca-nhan")}
              className={cn(
                "flex gap-2 items-center hover:text-primary",
                tabs == "thong-tin-ca-nhan" ? "text-primary" : ""
              )}
            >
              <BiUser /> <span>Thông tin cá nhân</span>
            </div>
            <div
              onClick={() => SetTab("lich-su-mua-hang")}
              className={cn(
                "flex gap-2 items-center hover:text-primary",
                tabs == "lich-su-mua-hang" ? "text-primary" : ""
              )}
            >
              <FaRegListAlt /> <span>Lịch sử mua hàng</span>
            </div>
            <div
              onClick={() => SetTab("danh-gia")}
              className={cn(
                "flex gap-2 items-center hover:text-primary",
                tabs == "danh-gia" ? "text-primary" : ""
              )}
            >
              <FaStar /> <span>Đánh giá</span>
            </div>
            <div
              onClick={() => SetTab("doi-mat-khau")}
              className={cn(
                "flex gap-2 items-center hover:text-primary",
                tabs == "doi-mat-khau" ? "text-primary" : ""
              )}
            >
              <BiShieldAlt2 /> <span>Đổi mật khẩu</span>
            </div>
            <div
              onClick={() => SetTab("thong-bao")}
              className={cn(
                "flex gap-2 items-center hover:text-primary",
                tabs == "thong-bao" ? "text-primary" : ""
              )}
            >
              <BiBell /> <span>Thông báo</span>
            </div>
          </section>
        </div>
        <div
          className={cn(
            "basis-2/3 border h-[70vh]",
            tabs == "danh-gia" ? "overflow-y-auto scroll_y" : ""
          )}
        >
          {tabs == "thong-tin-ca-nhan" && (
            <ProfileAccount
              id={account.id}
              address={account.address}
              email={account.email}
              fullname={account.fullname}
              phone={account.phone}
              key="accoutn-provip"
            />
          )}
          {tabs == "lich-su-mua-hang" && <HistoryPurChase />}
          {tabs == "danh-gia" && <Reviews idAccount={account.id} />}
          {tabs == "thong-bao" && <NoticeContainer />}
          {tabs == "doi-mat-khau" && <ChangePassword id={account.id} />}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
