import React, { useEffect, useState } from "react";
import { BiBell, BiCartAlt, BiUserCircle } from "react-icons/bi";
import { Badge, Button, Dropdown } from "antd";
import Link from "next/link";
import Cart from "../cart";
import NoticeContainer from "../notice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import cookieClient from "../../services/cookie";
import { LogOutNotice, UploadIsViewNotice } from "../../redux/notices";
import NoticeApi from "../../services/api-client/notice";
import { LogoutAccount } from "../../redux/user";
const AccountMenu = () => {
  const account = useSelector((state: RootState) => state.user.account);
  const { numberView, notice } = useSelector(
    (state: RootState) => state.notice
  );
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenNotice, setIsOpenNotice] = useState(false);
  const router = useRouter();
  const disPatch = useDispatch();
  const TotalCart =
    useSelector((state: RootState) => state.cart.cart).length || 0;
  const [items, setItems] = useState([
    {
      key: "1",
      label: <Link href="/dang-nhap">Đăng nhập</Link>,
    },
    {
      key: "2",
      label: <Link href="/dang-ky">Đăng ký</Link>,
    },
  ]);
  const handleLogout = () => {
    cookieClient.remove("accessToken");
    disPatch(LogOutNotice());
    disPatch(LogoutAccount());

    if (typeof window) {
      window.location.reload();
    }
  };
  useEffect(() => {
    if (!account.id) return;
    setItems(() => {
      return [
        {
          key: "1",
          label: <Link href="/tai-khoan">Trang cá nhân</Link>,
        },
        {
          key: "2",
          label: <Link href="/tai-khoan?page=don-mua">Đơn mua</Link>,
        },
        {
          key: "3",
          label: <button onClick={handleLogout}>Đăng xuất</button>,
        },
      ];
    });
  }, [account.id]);
  const hanldeOpenNotice = () => {
    setIsOpenNotice(() => true);
    disPatch(UploadIsViewNotice());
    NoticeApi.updateStatusView({ id: account.id });
  };
  return (
    <div className="cart-container order-3 flex items-center gap-4 text-text ">
      <Badge size="small" count={numberView}>
        <span
          onClick={hanldeOpenNotice}
          className=" hover:text-second cursor-pointer text-2xl"
        >
          <BiBell />
        </span>
      </Badge>
      <Badge size="small" count={TotalCart}>
        <span
          onClick={() => setIsOpenCart(true)}
          className=" hover:text-second cursor-pointer text-2xl"
        >
          <BiCartAlt />
        </span>
      </Badge>
      <Dropdown menu={{ items }} placement="bottomRight">
        <div className=" hover:text-second cursor-pointer text-2xl">
          {/* <BiUserCircle /> */}
          <Image
            alt="avata"
            src={account.avatar}
            width={30}
            height={30}
            className="object-cover rounded-full"
          />
        </div>
      </Dropdown>
      <Cart isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart} />
      <NoticeContainer
        isOpenNotice={isOpenNotice}
        setIsOpenNotice={setIsOpenNotice}
        listnotices={notice}
      />
    </div>
  );
};

export default AccountMenu;
