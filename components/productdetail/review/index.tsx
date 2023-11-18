import { ConfigProvider, Tabs } from "antd";
import type { TabsProps } from "antd";
import FacebookComment from "../../supports/FacebookComment";
import CommentContainer from "../comments";

const FooterProductDetail = () => {
  const handleChangeTabs = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "2",
      label: "Bình luận Facebook",
      children: <FacebookComment />,
    },
    {
      key: "1",
      label: "Đánh giá",
      children: <CommentContainer />,
    },
  ];
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            titleFontSize: 18,
            itemSelectedColor: "#DB4444",
            itemHoverColor: "#C0034E",
            itemActiveColor: "#C0034E",
            inkBarColor: "#DB4444",
          },
        },
      }}
    >
      <Tabs defaultActiveKey="2" items={items} onChange={handleChangeTabs} />
    </ConfigProvider>
  );
};

export default FooterProductDetail;
