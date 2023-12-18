"use client";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModalPurchasedHistory } from "../../redux/product";
import { RootState } from "../../redux/store";
import Image from "next/image";
import { Pagination } from "antd";
import { formatMoney, formatQuantity } from "../../utils";
import OrdertDetailApi from "../../services/api-client/order";

const ModalViewHistoryDetail = () => {
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const { idOrder, info } = useSelector(
    (state: RootState) => state.productDetail.productModalHistoryDetail
  );
  const [listOrderDetail, setListOrderDetail] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  const itemPerPage = 2;

  const handleClose = () => {
    dispatch(closeModalPurchasedHistory());
  };
  useEffect(() => {
    if (!idOrder) return;
    OrdertDetailApi.GetDetail(idOrder).then((res) => {
      const listData = res.data.orderdetails || [];
      setListOrderDetail(() => listData);

      setTotalPrice(() =>
        listData.reduce(
          (total, item) => total + item.quantity * item.price,
          info.shipping_fee
        )
      );
    });
  }, [idOrder]);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed  top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full flex items-center justify-center bg-[#00000080]">
      <div className="relative w-full md:max-w-5xl max-h-full" ref={modalRef}>
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold text-gray-900">
              Thông tin đơn hàng # {info?.codebill}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              onClick={handleClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 md:p-5 space-y-4">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-3 md:w-1/4">
                      Tên sản phẩm
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Hình ảnh
                    </th>

                    <th scope="col" className="px-6 py-3">
                      Số lượng
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Giá
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Tạm tính
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listOrderDetail
                    .slice(
                      (currentPage - 1) * itemPerPage,
                      currentPage * itemPerPage
                    )
                    .map((order) => (
                      <tr
                        className="bg-white border-b"
                        key={`order-${order.id}`}
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-text min-w-[120px]"
                        >
                          {order.Product.name}
                        </th>
                        <td className="px-6 py-4">
                          <div
                            style={{
                              width: "100px",
                              height: "100px",
                              position: "relative",
                            }}
                          >
                            <Image
                              src={order.Product.imageUrl}
                              alt={order.Product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </td>

                        <td className="px-6 py-4">
                          {formatQuantity(order.quantity)}
                        </td>
                        <td className="px-6 py-4">
                          {formatMoney(order.price)}
                        </td>
                        <td className="px-6 py-4">
                          {formatMoney(order.quantity * order.price)}
                        </td>
                      </tr>
                    ))}
                </tbody>
                <tfoot>
                  <td colSpan={4}>
                    <span className="block font-bold text-lg ml-4 mt-4">
                      Tổng thanh toán
                    </span>
                  </td>
                  <td>
                    <span className="block font-bold text-lg mr-4 mt-4">
                      {!info.discount
                        ? formatMoney(totalPrice)
                        : formatMoney(
                            (1 - info.discount / 100) *
                              (totalPrice - info.shipping_fee) +
                              info.shipping_fee
                          )}{" "}
                      {info.discount ? <sub>-{info.discount}%</sub> : ""}
                    </span>
                  </td>
                </tfoot>
              </table>
            </div>
            {listOrderDetail.length > 0 && (
              <div
                className={`flex justify-center py-5 md:py-4 ${
                  itemPerPage >= listOrderDetail.length ? "!hidden" : ""
                }`}
              >
                <Pagination
                  total={listOrderDetail.length}
                  pageSize={itemPerPage}
                  onChange={(page) => setcurrentPage(page)}
                  current={currentPage}
                  showSizeChanger={false}
                />
              </div>
            )}
          </div>
          {/* Modal footer */}
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
            <p>
              <span className="font-semibold mr-1">Địa chỉ nhận hàng: </span>
              {info?.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalViewHistoryDetail;
