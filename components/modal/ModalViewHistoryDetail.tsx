import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModalPurchasedHistory } from "../../redux/product";
import { RootState } from "../../redux/store";
import Image from "next/image";
import { Pagination } from "antd";
import { formatMoney } from "../../utils";

const ModalViewHistoryDetail = () => {
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const listOrders = useSelector(
    (state: RootState) => state.productDetail.productModalHistoryDetail
  );

  const itemPerPage = 3;
  const [pageCurrent, setPageCurrent] = useState(1);
  console.log(listOrders);

  const handleClose = () => {
    dispatch(closeModalPurchasedHistory());
  };

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
              Thông tin đơn hàng #{listOrders?.info.id}
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
                      Mô tả
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Giá
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listOrders?.listOrder
                    ?.slice(
                      (pageCurrent - 1) * itemPerPage,
                      pageCurrent * itemPerPage
                    )
                    .map((order) => (
                      <tr className="bg-white border-b" key={order.id}>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-text"
                        >
                          {order.name}
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
                              src={order.imageUrl}
                              alt={order.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 line-clamp-2">
                          {order.description}
                        </td>
                        <td className="px-6 py-4">
                          {formatMoney(order.price)}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {listOrders?.listOrder.length > 0 && (
                <div
                  className={`flex justify-center py-5 md:py-4 S${
                    itemPerPage >= listOrders?.listOrder.length ? "hidden" : ""
                  }`}
                >
                  <Pagination
                    defaultCurrent={4}
                    total={listOrders?.listOrder.length}
                    pageSize={itemPerPage}
                    current={pageCurrent}
                    onChange={(page) => setPageCurrent(page)}
                  />
                </div>
              )}
            </div>
          </div>
          {/* Modal footer */}
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
            <span className="font-semibold">Địa chỉ nhận hàng:</span>
            {listOrders?.info.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalViewHistoryDetail;
