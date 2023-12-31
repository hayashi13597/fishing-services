import { ConfigProvider, Tabs } from "antd";
import type { TabsProps } from "antd";
import FacebookComment from "../../../supports/FacebookComment";
import CommentContainer from "../../comments";
import ReviewProduct from "../../ReviewProduct";
import { IProduct } from "../../../home/ProductContainer";
interface FootidProducterProductDetailProps {
  product: IProduct;
}
const FooterProductDetail = ({
  product,
}: FootidProducterProductDetailProps) => {
  const handleChangeTabs = (key: string) => {};

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Đánh giá",
      children: <ReviewProduct product={product} />,
    },
    {
      key: "2",
      label: "Bình luận Facebook",
      children: <FacebookComment id={product.slug} />,
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
      <Tabs defaultActiveKey="1" items={items} onChange={handleChangeTabs} />
    </ConfigProvider>
  );
};

export default FooterProductDetail;
