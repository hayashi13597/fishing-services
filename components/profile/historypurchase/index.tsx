import React, { useState } from "react";
import type { TableProps } from "antd";
import { Button, ConfigProvider, Space, Table } from "antd";
import type {
  ColumnsType,
  FilterValue,
  SorterResult,
} from "antd/es/table/interface";
import { formatMoney } from "../../../utils";
import { cn } from "react-swisskit";
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

const data: DataType[] = [
  {
    id: "132655",
    phone: "087766990",
    address: "New York No. 1 Lake Park",
    totalPrice: 380,
    created_at: " 2023-08-13T02:05:30.934+00:00",
    status: 1,
  },
  {
    id: "132655",
    phone: "087766990",
    address: "New York No. 1 Lake Park",
    totalPrice: 380,
    created_at: " 2023-08-13T02:05:30.934+00:00",
    status: 2,
  },
  {
    id: "132655",
    phone: "087766990",
    address: "New York No. 1 Lake Park",
    totalPrice: 380,
    created_at: " 2023-08-13T02:05:30.934+00:00",
    status: 3,
  },
  {
    id: "132655",
    phone: "087766990",
    address: "New York No. 1 Lake Park",
    totalPrice: 380,
    created_at: " 2023-08-13T02:05:30.934+00:00",
    status: 4,
  },
  {
    id: "132655",
    phone: "087766990",
    address: "New York No. 1 Lake Park",
    totalPrice: 380,
    created_at: " 2023-08-13T02:05:30.934+00:00",
    status: 4,
  },
  {
    id: "132655",
    phone: "087766990",
    address: "New York No. 1 Lake Park",
    totalPrice: 380,
    created_at: " 2023-08-13T02:05:30.934+00:00",
    status: 4,
  },
  {
    id: "132655",
    phone: "087766990",
    address: "New York No. 1 Lake Park",
    totalPrice: 380,
    created_at: " 2023-08-13T02:05:30.934+00:00",
    status: 4,
  },
  {
    id: "132655",
    phone: "087766990",
    address: "New York No. 1 Lake Park",
    totalPrice: 380,
    created_at: " 2023-08-13T02:05:30.934+00:00",
    status: 4,
  },
  {
    id: "132655",
    phone: "087766990",
    address: "New York No. 1 Lake Park",
    totalPrice: 380,
    created_at: " 2023-08-13T02:05:30.934+00:00",
    status: 4,
  },
  {
    id: "132655",
    phone: "087766990",
    address: "New York No. 1 Lake Park",
    totalPrice: 380,
    created_at: " 2023-08-13T02:05:30.934+00:00",
    status: 4,
  },
];

const HistoryPurChase: React.FC = () => {
  const [filteredInfo, setFilteredInfo] = useState<
    Record<string, FilterValue | null>
  >({});
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});

  const handleChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter
  ) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter as SorterResult<DataType>);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  const setAgeSort = () => {
    setSortedInfo({
      order: "descend",
      columnKey: "age",
    });
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Mã đơn",
      dataIndex: "id",
      key: "id",
      render(value, record, index) {
        return <span className="font-semibold">#{value}</span>;
      },
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    // {
    //   title: "Địa chỉ",
    //   dataIndex: "address",
    //   key: "address",
    // },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render(value, record, index) {
        return (
          <span
            className={cn(
              value == 4 ? "text-green-500" : "",
              value == 5 ? "text-red-500" : "",
              "font-semibold"
            )}
          >
            {ESTatus[`s${value}`]}
          </span>
        );
      },
    },
    {
      title: "Tổng tiền",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render(value, record, index) {
        return formatMoney(value * 1000);
      },
    },
    {
      title: "Xem chi tiết",
      key: "operation",
      width: 110,
      render: () => (
        <button className="bg-primary/90 hover:bg-primary text-white rounded-lg py-1 px-2">
          Chi tiết
        </button>
      ),
    },
  ];

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
        <Table
          pagination={{
            defaultPageSize: 3,
            className: "hover:text-primary",
          }}
          columns={columns}
          dataSource={data}
          onChange={handleChange}
          className="overflow-auto scroll_y"
        />
      </ConfigProvider>
    </>
  );
};

export default HistoryPurChase;
