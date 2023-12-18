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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ToastNotify from "../../services/toast";
import OrdertDetailApi from "../../services/api-client/order";
import { ResetCart } from "../../redux/cart";
import { LogoutAccount } from "../../redux/user";
import { AddNewNotice, LogOutNotice } from "../../redux/notices";
import { Validator } from "react-swisskit";
import LoadingContent from "../screen/LoadingContent";

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
const listShipment = [
  {
    id: "method1",
    des: ` <p>Chủ TK: Phạm Hoài Nam</p>
            <p>
              Nội dung chuyển khoản: Tên - SĐT. <br />
              Vd: Nguyen Huu Duy - 0877669990
            </p>
            <ul className="mt-2 list-decimal flex flex-col items-center">
              <li className="mb-2 max-w-max">
                Agribank Số TK: 068202001445 => Chi nhánh: Sài gòn, Quận 12
              </li>
              <li className="mb-2 max-w-max">
               Vietcombank Số TK: 0325024277 => Chi nhánh:Sài gòn, Quận 12
              </li>
            </ul>
  `,
    label: "Chuyển khoản",
    method: "Internet Banking",
  },
  {
    id: "method2",
    des: ` <p>Chủ TK: Phạm Hoài Nam</p>
            <p>
               Nội dung chuyển khoản: Tên - SĐT. <br />
           Vd: Nguyen Huu Duy - 0877669990
            </p>
            <ul className="mt-2 list-decimal flex flex-col items-center">
              <li className="mb-2 max-w-max">
             Ví Momo: 0325024277
              </li>
              <li className="mb-2 max-w-max">
               Ví ZaloPay: 0325024277
              </li>
            </ul>
  `,
    label: "Chuyển tiền đến ví điện tử",
    method: "Chuyển ví điện tử",
  },
  {
    id: "method3",
    des: `<p>
        Thời gian ship từ 1-4 ngày tuỳ vào địa chỉ của bạn, bạn có thể
         thanh toán 100% cho shipper. Shipper sẽ gọi điện cho bạn trước khi
         đến.
    </p>
  `,
    label: "COD - Trả tiền khi nhận hàng",
    method: "Trả tiền khi nhận hàng",
  },
];

const InfoComponent = ({ setShipment, shipment = 0 }: InfoComponentProps) => {
  const [isLoading, setLoading] = useState(false);
  const provinces: { data: provincesI[] } = useFetchSelect("p");
  const districts = useFetchSelect("d");
  const wards = useFetchSelect("w");
  const [selectedDistricts, setSelectedDistricts] = useState<districtI[]>();
  const [selectedWards, setSelectedWards] = useState<wardI[]>([]);
  const [showMethod, setShowMethod] = useState<string>("");
  const [province, setProvince] = useState("default");
  const [district, setDistrict] = useState("default");
  const [ward, setWard] = useState("default");

  const account = useSelector((state: RootState) => state.user.account);
  const listCart = useSelector((state: RootState) => state.cart.cart);
  const { value: discountFee } = useSelector((state: RootState) => state.cart);
  const formRef = useRef(null);
  const discount = useSelector((state: RootState) => state.cart.discount);
  const dispatch = useDispatch();

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    typeS: string
  ) => {
    if (typeS === "city") {
      const filteredDistricts = districts?.data.filter(
        (district: districtI) =>
          district.province_code === Number(e.target.value)
      );
      setProvince(e.target.options[e.target.selectedIndex].text);
      setSelectedDistricts(filteredDistricts);
      setSelectedWards([]);
    }
    if (typeS === "district") {
      const filteredWards = wards?.data.filter(
        (ward: wardI) => ward.district_code === Number(e.target.value)
      );
      setDistrict(e.target.options[e.target.selectedIndex].text);
      setSelectedWards(filteredWards);
    }
    if (typeS === "ward") {
      setWard(e.target.options[e.target.selectedIndex].text);
    }
  };

  const handleOnSubmit1 = async (data: FormData) => {
    const fullName = data.get("fullName");
    const phoneNumber: any = data.get("phoneNumber") || "";
    const address = data.get("address");
    const shipMethod = data.get("shipMethod");
    const paymentMethod = data.get("paymentMethod");

    if (!account.fullname) {
      ToastNotify("Vui lòng đăng nhập để mua hàng?").error();
      return;
    } else if (listCart.length < 1) {
      ToastNotify("Giỏ hàng của bạn rỗng?").error();
      return;
    } else if (province === "default") {
      ToastNotify("Vui lòng chọn tỉnh / thành").error();
      return;
    } else if (district === "default") {
      ToastNotify("Vui lòng chọn quận / huyện").error();
      return;
    } else if (ward === "default") {
      ToastNotify("Vui lòng chọn phường / xã").error();
      return;
    } else if (!showMethod) {
      ToastNotify("Vui lòng Chọn phương thức thanh toán?").error();
      return;
    }

    if (!Validator.isPhone(phoneNumber)) {
      ToastNotify("Số điện thoại không đúng").error();
      return;
    } else if (!account.id) {
      ToastNotify("Bạn chưa đăng nhập?").error();
      return;
    }
    let total = listCart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    total = (discountFee ? (1 - discountFee / 100) * total : total) + shipment;
    const order = {
      fullname: fullName,
      phone: phoneNumber,
      address: `${address}, ${ward}, ${district}, ${province}`,
      shipping_fee: shipMethod || 0,
      payment_method: paymentMethod,
      email: account.email,
      discount_id: discount,
      user_id: account.id,
      total,
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
        name: item.name,
        imageUrl: item.imageUrl,
      })),
    };
    setLoading(() => true);
    OrdertDetailApi.post(data)
      .then((res: any) => {
        formRef.current.reset();
        ToastNotify(res?.message || "Thanh toán đơn hàng thành công").success();
        dispatch(ResetCart());
        dispatch(AddNewNotice(res.data.notice));
        setShowMethod("");
      })
      .catch((res) => {
        ToastNotify(res?.message || "Thanh toán thất bại").error();
      })
      .finally(() => {
        setLoading(() => false);
      });
  };
  const handlelogout = () => {
    dispatch(LogoutAccount());
    dispatch(LogOutNotice());
  };

  return (
    <div className="w-full order-2 md:order-1 md:w-1/2">
      {isLoading ? (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/80">
          <LoadingContent />
        </div>
      ) : (
        ""
      )}
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
            {account.id ? (
              <Link href="/tai-khoan">{account.fullname || account.email}</Link>
            ) : (
              ""
            )}
          </div>
          <Link
            href={account.id ? "" : "/dang-nhap"}
            onClick={handlelogout}
            className="hover:text-primary text-sm"
          >
            {account.id ? "Đăng xuất" : "Đăng nhập ngay"}
          </Link>
          {!account.id ? (
            <div>
              <span className="font-semibold">Lưu ý:</span>{" "}
              <span className=" text-sm">
                Phải{" "}
                <Link
                  href="/dang-nhap"
                  className="hover:text-blue-600 hover:underline"
                >
                  đăng nhập
                </Link>{" "}
                để mua hàng
              </span>
            </div>
          ) : (
            ""
          )}
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
              label="Nhận tại cửa hàng"
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

        {listShipment.map((item) => (
          <div key={item.id}>
            <RadioInputComponent
              id={item.id}
              value={item.label}
              name={"paymentMethod"}
              label={item.label}
              setShowMethod={setShowMethod}
            />
            {showMethod == item.label && (
              <div
                dangerouslySetInnerHTML={{ __html: item.des }}
                className={`w-full bg-[#ffff] border p-4 text-center text-sm ${
                  showMethod == item.label ? "scale-100" : "scale-0"
                }`}
              ></div>
            )}
          </div>
        ))}

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
