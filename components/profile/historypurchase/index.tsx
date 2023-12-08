"use client";
import React, { useEffect, useRef, useState } from "react";
import type { TableProps } from "antd";
import { Button, ConfigProvider, Space, Table } from "antd";
import type {
  ColumnsType,
  FilterValue,
  SorterResult,
} from "antd/es/table/interface";
import { formatDate, formatMoney } from "../../../utils";
import { Debounced, cn } from "react-swisskit";
import { useDispatch, useSelector } from "react-redux";
import { openModalPurchasedHistory } from "../../../redux/product";
import { initialData } from "../../../constants";
import OrdertDetailApi from "../../../services/api-client/order";
import { RootState } from "../../../redux/store";
enum ESTatus {
  "s1" = "Chờ xử lý",
  "s2" = "Đã kiểm duyệt",
  "s3" = "Đang giao hàng",
  "s4" = "Thành công",
  "s5" = "Thất bại",
}
interface DataType {
  id: string;
  phone: string;
  address: string;
  created_at: string;
  totalPrice: number;
  status: number;
}

const HistoryPurChase: React.FC = () => {
  const account = useSelector((state: RootState) => state.user.account);

  const [listOrder, setListOrder] = useState([]);

  const [pagesize] = useState(3);
  const [total, setTotal] = useState(1);
  const [pageCurrent, setPageCurrent] = useState(1);

  useEffect(() => {
    if (!account.id) {
      return;
    }
    OrdertDetailApi.get(
      account.id,
      pagesize,
      (pageCurrent - 1) * pagesize
    ).then((res) => {
      console.log(res.data.listOrder);
      setListOrder(() => res.data.listOrder);
      setTotal(() => res.data.total);
    });
  }, [account.id, pageCurrent]);
  const dispatch = useDispatch();

  const handleViewOrderDetail = (value) => {
    console.log(value);

    dispatch(
      openModalPurchasedHistory({
        info: value,
        idOrder: value.id,
      })
    );
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Mã đơn",
      dataIndex: "codebill",
      key: "codebill",
      render(value, record, index) {
        return <span className="font-semibold">#{value}</span>;
      },
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },

    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render(value, record, index) {
        return (
          <span
            className={cn(
              value == "s4" ? "text-green-500" : "",
              value == "s5" ? "text-red-500" : "",
              "font-semibold"
            )}
          >
            {ESTatus[value]}
          </span>
        );
      },
    },
    {
      title: "Ngày mua",
      dataIndex: "createdAt",
      key: "createdAt",
      render(value, record, index) {
        return formatDate(value);
      },
    },
    {
      title: "Xem chi tiết",
      key: "operation",
      width: 110,
      render: (value) => (
        <button
          className="bg-primary/90 hover:bg-primary text-white rounded-lg py-1 px-2"
          onClick={() => handleViewOrderDetail(value)}
        >
          Chi tiết
        </button>
      ),
    },
  ];

  const searchRef = useRef<HTMLInputElement>(null);
  const HandleSubmitSearch = () => {
    if (searchRef.current) {
      const valueSearch = searchRef.current.value;
      if (valueSearch) {
      }
      console.log("valueSearch", valueSearch);
      OrdertDetailApi.search(valueSearch).then((res) => {
        if (res.data.orders) {
          setListOrder(() => res.data.orders);
          setTotal(() => res.data.orders.length);
        }
      });
    }
  };
  return (
    <>
      {/* <Space style={{ marginBottom: 16 }}>
        <Button onClick={setAgeSort}>Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space> */}
      <ConfigProvider
        theme={{
          components: {
            Pagination: {
              colorBgTextActive: "#DB4444",

              colorPrimary: "#DB4444",
            },
            Table: {
              colorPrimary: "#DB4444",
              fontSize: 14,
            },
          },
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            HandleSubmitSearch();
          }}
          className="py-2"
        >
          <input
            ref={searchRef}
            onInput={Debounced(HandleSubmitSearch, 1000)}
            type="search"
            id="voice-search"
            className="w-full border py-3 outline-none pl-6 rounded-md text-sm"
            placeholder="Tìm kiếm sản phẩm..."
            required
            autoComplete="off"
          />
        </form>
        {listOrder.length ? (
          <Table
            pagination={{
              className: "hover:text-primary",
              onChange: (page) => setPageCurrent(page),
              total,
              current: pageCurrent,
              pageSize: pagesize,
            }}
            columns={columns}
            dataSource={listOrder}
            className="overflow-auto scroll_y"
          />
        ) : (
          <p className="px-2">Không tồn tại đơn hàng nào</p>
        )}
      </ConfigProvider>
    </>
  );
};

export default HistoryPurChase;
