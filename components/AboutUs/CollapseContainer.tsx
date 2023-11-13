"use client";
import React from "react";
import { Collapse, CollapseProps, ConfigProvider } from "antd";
import { listPrice, listPriceSell } from "./contant";

const { Panel } = Collapse;
const CollapseContainer = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Collapse: {
            fontSize: 16,
          },
        },
      }}
    >
      <h1 className="text-2xl mb-4">
        Hãy đến với Ốc đảo kỳ đà, để thoải mãn niềm đam mê câu cá mãnh liệt của
        bạn
      </h1>
      <Collapse defaultActiveKey={["1"]} accordion>
        <Panel header="Về chúng tôi" key="1">
          <div>
            <p>
              <strong> Ốc đảo kỳ đà </strong> là sân chơi lành mạnh cho anh em
              câu cá giải trí mỗi ngày được thành lập vào năm 2021. từ diện tích
              200 m<sup>2</sup> đến 2023 hồ đã có diện tích hơn 1 hécta, có rất
              nhiều chòi để anh em có thể câu cá dưới bóng mát của thiên nhiên,
              khác xa sự ồn ào của chốn đô thị tấp nập.
            </p>
            <p className="py-2">
              <strong> Ốc đảo kỳ đà </strong>có đa dạng cá với số lượng tấn cá
              lên hàng chục tấn bao gồm cá tra, cá hô, cá phi, cá diêu hồng, cá
              chép đủ loại kích cỡ từ 200g đến 80kg.
            </p>
            <p>
              <strong> Ốc đảo kỳ đà </strong> có rất nhiều sự kiện hằng năm để
              cần thủ có thể tham gia để giành giải với các giải hấp dẫn từ 500k
              đến 500tr. Ngoài ra còn thu mua lại cá của anh em với giá hấp dẫn,
              nếu cá dưới 3kg có thể mang về để chế biến tùy thích.
            </p>
          </div>
        </Panel>

        <Panel header="Giá câu" key="3">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Khu vực
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Loại cần
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Giá
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Thời gian
                  </th>
                </tr>
              </thead>
              <tbody>
                {listPrice.map((item, index) => (
                  <tr
                    key={`price-${index}`}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.place}
                    </th>
                    <td className="px-6 py-4"> {item.kind}</td>
                    <td className="px-6 py-4"> {item.price}</td>
                    <td className="px-6 py-4"> {item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
        <Panel header="Giá thu mua" key="2">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Cá
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Số ký tối thiểu
                </th>
                <th scope="col" className="px-6 py-3">
                  Giá thu
                </th>
              </tr>
            </thead>
            <tbody>
              {listPriceSell.map((item, index) => (
                <tr
                  key={`ca-price-${index}`}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.kind}
                  </th>
                  <td className="px-6 py-4 "> {item.weigth}</td>
                  <td className="px-6 py-4 ">
                    {" "}
                    {item.isKg ? `${item.price}/kg` : `${item.price} / 1 con`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
      </Collapse>
    </ConfigProvider>
  );
};

export default CollapseContainer;
