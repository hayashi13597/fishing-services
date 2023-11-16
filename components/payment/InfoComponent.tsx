"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import RadioInputComponent from "./RadioInputComponent";
import InputFormPayment from "./InputFormPayment";
import SelectFormPayment from "./SelectFormPayment";
import Image from "next/image";
import Breadcrumb from "../Breadcrumb";
import { structurePageType } from "../../common.types";
import useFetchSelect from "../../hooks/useFetchSelect";
import { BsBox2 } from "react-icons/bs";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ToastNotify from "../../services/toast";
import OrdertDetailApi from "../../services/api-client/order";
import { ResetCart } from "../../redux/cart";
import { LogoutAccount } from "../../redux/user";
import { LogOutNotice } from "../../redux/notices";

interface provincesI {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  phone_code: number;
  districts?: string[];
}

interface districtI {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  province_code: number;
  wards?: string[];
}

interface wardI {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  district_code: number;
}

const structurePage: structurePageType[] = [
  { page: "Giỏ hàng", link: "/gio-hang" },
  { page: "Thông tin giao hàng", link: "/thanh-toan", last: true },
];

interface InfoComponentProps {
  setShipment;
  shipment: number;
}
const InfoComponent = ({ setShipment, shipment }: InfoComponentProps) => {
  const provinces: { data: provincesI[] } = useFetchSelect("p");
  const districts = useFetchSelect("d");
  const wards = useFetchSelect("w");
  const [selectedDistricts, setSelectedDistricts] = useState<districtI[]>();
  const [selectedWards, setSelectedWards] = useState<wardI[]>([]);
  const [showMethod, setShowMethod] = useState<number | string>(null);

  const account = useSelector((state: RootState) => state.user.account);
  const listCart = useSelector((state: RootState) => state.cart.cart);
  const formRef = useRef(null);
  const discount = useSelector((state: RootState) => state.cart.discount);
  const dispatch = useDispatch();
  // const schema = yup
  //   .object({
  //     fullName: yup.string().required("Họ và tên không được để trống"),
  //     phoneNumber: yup
  //       .number()
  //       .min(10, "Số điện thoại phải có ít nhất 10 chữ số")
  //       .required("Số điện thoại không được để trống"),
  //     address: yup.string().required("Địa chỉ không được để trống"),
  //     province: yup.string().required("Tỉnh / thành không được để trống"),
  //     district: yup.string().required("Quận / huyện không được để trống"),
  //     ward: yup.string().required("Phường / xã không được để trống"),
  //   })
  //   .required();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isSubmitting },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    typeS: string
  ) => {
    if (typeS === "city") {
      const filteredDistricts = districts?.data.filter(
        (district: districtI) =>
          district.province_code === Number(e.target.value)
      );
      setSelectedDistricts(filteredDistricts);
      setSelectedWards([]);
    }
    if (typeS === "district") {
      const filteredWards = wards?.data.filter(
        (ward: wardI) => ward.district_code === Number(e.target.value)
      );
      setSelectedWards(filteredWards);
    }
  };

  const handleOnSubmit1 = async (data: FormData) => {
    const fullName = data.get("fullName");
    const phoneNumber = data.get("phoneNumber");
    const address = data.get("address");
    const province = data.get("province");
    const district = data.get("district");
    const ward = data.get("ward");
    const shipMethod = data.get("shipMethod");
    const paymentMethod = data.get("paymentMethod");

    console.log(
      fullName,
      phoneNumber,
      address,
      province,
      district,
      ward,
      shipMethod,
      paymentMethod
    );
    const order = {
      fullname: fullName,
      phone: phoneNumber,
      address: `${address} ${province} ${district} ${ward}`,
      shipment: shipMethod,
      paymentMethod,
      email: account.email,
      discount_id: discount,
      user_id: account.id,
    };
    handleSubmitOrder(order);
  };
  const handleSubmitOrder = (order) => {
    if (!listCart.length) {
      ToastNotify("Bạn chưa có đơn hàng nào để thanh toán").error();
    }
    const data = {
      order,
      order_detail: listCart.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        price: item.price,
      })),
    };

    OrdertDetailApi.post(data)
      .then((res: any) => {
        formRef.current.reset();
        ToastNotify(res?.message || "Thanh toán đơn hàng thành công").success();
        dispatch(ResetCart());
      })
      .catch(({ message }) => {
        ToastNotify(message).error();
      });
  };
  const handlelogout = () => {
    dispatch(LogoutAccount());
    dispatch(LogOutNotice());
  };
  return (
    <div className="w-full order-2 md:order-1 md:w-1/2">
      <Link
        href="/"
        className="font-bold text-4xl text-primary hidden md:block"
      >
        Câu cá ốc đảo
      </Link>
      <Breadcrumb structurePage={structurePage} isHidden={true} />
      <h3 className="font-bold text-xl">Thông tin giao hàng</h3>
      <div className="my-5 flex items-center gap-3">
        <Image src={account.avatar} alt="user avatar" width={50} height={50} />
        {/* <AiOutlineUser className="text-5xl bg-gray-400 text-white opacity-80 p-2" /> */}
        <div>
          <div className="text-text opacity-80">
            {account.fullname || account.email}
          </div>
          <Link
            href={account.id ? "" : "/dang-nhap"}
            onClick={handlelogout}
            className="hover:text-primary text-sm"
          >
            {account.id ? "Đăng xuất" : "Đăng nhập ngay"}
          </Link>
        </div>
      </div>
      {/* <form onSubmit={handleSubmit(handleOnSubmit)}> */}
      <form ref={formRef} action={handleOnSubmit1}>
        <InputFormPayment
          defaultValue={account.fullname}
          id="fullName"
          label="Họ và tên"
          type="text"
        />
        <InputFormPayment
          defaultValue={account.phone}
          id="phoneNumber"
          label="Số điện thoại"
          type="text"
        />
        <InputFormPayment
          defaultValue={account.address}
          id="address"
          label="Địa chỉ"
          type="text"
        />
        <div className="flex flex-col md:flex-row justify-between gap-2 mb-5">
          <SelectFormPayment
            id="provinces"
            provinces={provinces?.data}
            districts={selectedDistricts}
            wards={selectedWards}
            handleSelectChange={handleSelectChange}
          />
        </div>
        {/* Ship Method */}
        <h3 className="font-bold text-xl mb-3">Phương thức vận chuyển</h3>
        {selectedWards?.length < 1 ? (
          <div className="w-full h-44 border bg-[#ffff] flex flex-col items-center justify-center mb-5">
            <BsBox2 className="text-7xl mb-4 opacity-70" />
            <p className="text-center">
              Vui lòng chọn tỉnh / thành để có danh sách phương thức vận chuyển.
            </p>
          </div>
        ) : (
          <div className="mb-5">
            <RadioInputComponent
              id="DirectPurchasing"
              value={0}
              name="shipMethod"
              isShipMethod={true}
              label="Nhận hàng trực tiếp"
              setShowMethod={setShipment}
            />
            <RadioInputComponent
              id="ship"
              value={25000}
              name="shipMethod"
              isShipMethod={true}
              label="Giao hàng tận nơi"
              setShowMethod={setShipment}
            />
          </div>
        )}
        {/* Payment Method */}
        <h3 className="font-bold text-xl mb-3">Phương thức thanh toán</h3>
        <RadioInputComponent
          id="paymentMethod1"
          value="Internet Banking"
          name="paymentMethod"
          label="Chuyển khoản"
          setShowMethod={setShowMethod}
        />
        {showMethod === "banking" && (
          <div
            className={`w-full bg-[#ffff] border p-4 text-center text-sm ${
              showMethod === "banking" ? "scale-100" : "scale-0"
            }`}
          >
            <p>Chủ TK: Nguyễn Văn xxxx</p>
            <p>
              Nội dung chuyển khoản: Mã Đơn Hàng của bạn. <br />
              Vd: Thanh toán cần câu xxxx
            </p>
            <ul className="mt-2 list-decimal flex flex-col items-center">
              <li className="mb-2 max-w-max">
                Techcombank Số TK: 37 38 48 xx xx Chi nhánh: xx xx
              </li>
              <li className="mb-2 max-w-max">
                VIB Số TK: 00518xxxx Chi nhánh VIB xx xx
              </li>
            </ul>
          </div>
        )}
        <RadioInputComponent
          id="paymentMethod2"
          value="ví điện tử"
          name="paymentMethod"
          label="Chuyển tiền đến ví điện tử"
          setShowMethod={setShowMethod}
        />
        {showMethod === "bankingToMomo" && (
          <div
            className={`w-full bg-[#ffff] border p-4 text-center text-sm ${
              showMethod === "bankingToMomo" ? "scale-100" : "scale-0"
            }`}
          >
            <p>Chủ TK: Nguyễn Văn xxxx</p>
            <p>
              Nội dung chuyển khoản: Mã Đơn Hàng của bạn. <br />
              Vd: Thanh toán cần câu xxxx
            </p>
            <ul className="mt-2 list-decimal flex flex-col items-center">
              <li className="mb-2 max-w-max">
                Techcombank Số TK: 37 38 48 xx xx Chi nhánh: xx
              </li>
              <li className="mb-2 max-w-max">
                VIB Số TK: 00518xxxx Chi nhánh VIB xx xx
              </li>
            </ul>
          </div>
        )}
        <RadioInputComponent
          id="paymentMethod3"
          value="Trả tiền khi nhận hàng"
          name="paymentMethod"
          label="COD - Trả tiền khi nhận hàng"
          setShowMethod={setShowMethod}
        />
        {showMethod === "COD" && (
          <div
            className={`w-full bg-[#ffff] border p-4 text-center text-sm ${
              showMethod === "COD" ? "scale-100" : "scale-0"
            }`}
          >
            <p>
              Thời gian ship từ 1-4 ngày tuỳ vào địa chỉ của bạn, bạn có thể
              thanh toán 100% cho shipper. Shipper sẽ gọi điện cho bạn trước khi
              đến.
            </p>
          </div>
        )}
        <div className="w-full flex justify-between items-center my-5">
          <Link
            href="/gio-hang"
            className="button_send  bg-white text-black border-2 border-primary hover:bg-primary/80 hover:text-white mb-4"
          >
            Giỏ hàng
          </Link>
          <button type="submit" className="button_send bg-primary -mt-4">
            Hoàn tất đơn hàng
          </button>
        </div>
      </form>
    </div>
  );
};

export default InfoComponent;
