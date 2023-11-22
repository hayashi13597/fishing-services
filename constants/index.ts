import {
  BiMapPin,
  BiMailSend,
  BiPhoneCall,
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import { initChat } from "../components/productdetail/comments/comment.type";

export const footerAddress = {
  description:
    "Hãy đến với Hồ câu cá giải trí Ốc Đảo Kỳ Đà để sử dụng một số dịch vụ ngon bổ rẻ nhé",
  contact: [
    {
      title: "Address",
      content:
        "Đ. Bờ Bao Htx Phong Phú, Phong Phú, Bình Chánh, Thành phố Hồ Chí Minh, Vietnam ",
      icon: BiMapPin,
    },
    {
      title: "Email",
      content: "adminocdao@gmail.com",
      icon: BiMailSend,
    },
    {
      title: "Phone",
      content: "0347.088.538",
      icon: BiPhoneCall,
    },
  ],
  social: [
    {
      title: "Facebook",
      ref: "https://www.facebook.com/namhoai",
      icon: BiLogoFacebook,
    },
    {
      title: "Twitter",
      ref: "https://www.facebook.com/namhoai",
      icon: BiLogoTwitter,
    },
    {
      title: "Youtube",
      ref: "https://www.facebook.com/namhoai",
      icon: BiLogoYoutube,
    },
  ],
};

export const menuDropdown = [
  {
    title: "Cần câu",
    des: "Chuyên cung cấp cần câu xịn nhất thị trường, giá rẻ cạnh tranh và đầy hấp dẫn",
    link: "/san-pham",
  },
  {
    title: "Mồi câu",
    des: "Cung cấp thức ăn thơm ngon, cũng như mồi câu chất lượng nhất cho cần thủ",
    link: "/moi-cau",
  },
  {
    title: "Dây cước",
    des: "Dây cước là linh hồn người câu cá chuyên nghiệp,  ",
    link: "/san-pham",
  },
  {
    title: "Lưỡi câu",
    des: "Lưỡi câu đa dạng về hình dạng và kích thước để phù hợp với loại cá cụ thể.",
    link: "/san-pham",
  },
  {
    title: "Món nhậu",
    des: "Nhưng món nhậu ngon, kèm thêm các thức uống sau khi câu cá.",
    link: "/mon-nhau",
  },
  {
    title: "Dù che nắng, ghế ngồi câu cá",
    des: "Đi câu bất chấp ngày đêm, hãy nghé ngay để tậu cho mình bọ combo sang xịn mịn nhé",
    link: "/san-pham",
  },
];

export const listVideo = [
  {
    img: "/assets/video0.jpg",
    videoId: "-faVVXNeO-Y",
  },
  {
    img: "/assets/video1.jpg",
    videoId: "sfEK3MhyByY",
  },
  {
    img: "/assets/video2.jpg",
    videoId: "Sw_5Up2YrsU",
  },
  {
    img: "/assets/video3.jpg",
    videoId: "9syCuc93OV0",
  },
  {
    img: "/assets/video4.jpg",
    videoId: "gmNU2gXw_50",
  },
  {
    img: "/assets/video5.jpg",
    videoId: "QFgQzNkY5kQ",
  },
  {
    img: "/assets/video6.jpg",
    videoId: "rKeOOVX-UCI",
  },
];

export const initialData = [
  {
    id: 3,
    name: "Bột Thơm DF Chuyên Câu Cá Dịch Vụ",
    slug: "bot-thom-df-chuyen-cau-ca-dich-vu",
    price: 300000,
    description:
      "Bột Thơm DF chuyên câu cá dịch vụ ( Cá bể, cá nhát )\nHDSD : 1 mồi + 0,8 nước ( Nước suối tinh khiết )\nBột thơm hiệu quả nhất khi trộn với trứng kiến ( Trứng kiến mới + khô ). \nLưu ý : Trứng kiến hư, không ngon auto Móm\nBột có thể câu zin : Trộn 1 mồi + 0.8 nước trộn bột dẻo rồi câu\nBột có thể kết hợp với cám DF : Nữa bịch cám + 1 nắp Bột Thơm câu rất hiệu quả .\nLưu Ý : Nên trộn liều lượng ít khi câu, câu hết trộn tiếp để cục mồi phát huy hiệu quả tốt nhất",
    imageUrl:
      "http://res.cloudinary.com/dcsfwpkiq/image/upload/v1700284928/ae6y0tjmssjez314mboh.jpg",
    idPath: "ae6y0tjmssjez314mboh",
    listSubimages:
      '[{"idPath":"ae6y0tjmssjez314mboh","imageUrl":"http://res.cloudinary.com/dcsfwpkiq/image/upload/v1700284928/ae6y0tjmssjez314mboh.jpg"}]',
    visiable: true,
    view: 0,
    sales: 0,
    stars: 5,
    sale_off: 0,
    user_id: 1,
    category_id: 2,
    createdAt: "2023-11-18T05:22:12.000Z",
    updatedAt: "2023-11-18T05:22:12.000Z",
    Category: {
      id: 2,
      name: "Mồi câu",
      slug: "moi-cau",
    },
    User: {
      avatar: "https://i.imgur.com/iOTWGLo.png",
      fullname: "Phạm Hoài Nam ",
    },
  },
  {
    id: 2,
    name: "Cần Tay Toro HOZIZON 5.5H",
    slug: "can-tay-toro-hozizon-5-5h",
    price: 350000,
    description:
      "Cần Câu Tay TORO HOZIZON TRÂU ĐEN\n- Siêu Cứng Chuyên Săn Hàng Tốc Độ Nhanh 5H5\n- Thương Hiệu : TORO\n- Phân Bố Lực : 19\ncác góc 45 độ, 60 độ, 90 độ bao quanh lõi carbon tạo\n- Chất Liệu : Sử dụng Carbon nhập khẩu xếp chéo 9 lớp cho chiếc cần có ep cứng và đàn hồi cao giúp kiểm soát và khống chế cá nhanh chóng.",
    imageUrl:
      "http://res.cloudinary.com/dcsfwpkiq/image/upload/v1700284791/kpggkdcranu1xwhv0igh.jpg",
    idPath: "kpggkdcranu1xwhv0igh",
    listSubimages:
      '[{"idPath":"kpggkdcranu1xwhv0igh","imageUrl":"http://res.cloudinary.com/dcsfwpkiq/image/upload/v1700284791/kpggkdcranu1xwhv0igh.jpg"},{"idPath":"f77ptjiu9g6pufc0bl0v","imageUrl":"http://res.cloudinary.com/dcsfwpkiq/image/upload/v1700284791/f77ptjiu9g6pufc0bl0v.jpg"},{"idPath":"qjt4aw3djeigkkt1nifa","imageUrl":"http://res.cloudinary.com/dcsfwpkiq/image/upload/v1700284791/qjt4aw3djeigkkt1nifa.jpg"},{"idPath":"fx3rnban25tnv9btu9gk","imageUrl":"http://res.cloudinary.com/dcsfwpkiq/image/upload/v1700284791/fx3rnban25tnv9btu9gk.jpg"}]',
    visiable: true,
    view: 0,
    sales: 0,
    stars: 5,
    sale_off: 0,
    user_id: 1,
    category_id: 1,
    createdAt: "2023-11-18T05:19:55.000Z",
    updatedAt: "2023-11-18T05:19:55.000Z",
    Category: {
      id: 1,
      name: "Cần câu",
      slug: "can-cau",
    },
    User: {
      avatar: "https://i.imgur.com/iOTWGLo.png",
      fullname: "Phạm Hoài Nam ",
    },
  },
  {
    id: 1,
    name: "CẦN CÂU GAMA 8H",
    slug: "can-cau-gama-8h",
    price: 250000,
    description: "Cần câu siêu đẹp",
    imageUrl:
      "http://res.cloudinary.com/dcsfwpkiq/image/upload/v1700284053/ftdvtocwzchqyygv6pdq.jpg",
    idPath: "ftdvtocwzchqyygv6pdq",
    listSubimages:
      '[{"idPath":"ftdvtocwzchqyygv6pdq","imageUrl":"http://res.cloudinary.com/dcsfwpkiq/image/upload/v1700284053/ftdvtocwzchqyygv6pdq.jpg"},{"idPath":"huzhaiqmn2ag3act7dza","imageUrl":"http://res.cloudinary.com/dcsfwpkiq/image/upload/v1700284057/huzhaiqmn2ag3act7dza.jpg"},{"idPath":"vs11tddxhazmipja9vkh","imageUrl":"http://res.cloudinary.com/dcsfwpkiq/image/upload/v1700284062/vs11tddxhazmipja9vkh.jpg"},{"idPath":"gyx4cywfusg8o4g9ggxy","imageUrl":"http://res.cloudinary.com/dcsfwpkiq/image/upload/v1700284064/gyx4cywfusg8o4g9ggxy.jpg"}]',
    visiable: true,
    view: 1,
    sales: 0,
    stars: 5,
    sale_off: 0,
    user_id: 1,
    category_id: 1,
    createdAt: "2023-11-18T05:07:51.000Z",
    updatedAt: "2023-11-18T05:11:00.000Z",
    Category: {
      id: 1,
      name: "Cần câu",
      slug: "can-cau",
    },
    User: {
      avatar: "https://i.imgur.com/iOTWGLo.png",
      fullname: "Phạm Hoài Nam ",
    },
  },
];
export type TProductDetail = typeof ProductDetail.product;
// api sản phẩm chi tiết
export const ProductDetail = {
  product: {
    id: "rKeOOVX-UCI",
    name: "Vivamus magna justo, lacinia eget",
    slug: "ss-kk",
    price: 109900,
    imageUrl: "/assets/can-cau.jpg",
    description:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapienQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien1.",
    stock: "10",
    sell: 200,
    discount: 0,
    totalReview: 200,

    listSubImage: [
      "./assets/cancau2.webp",
      "./assets/cancau1.jpg",
      "./assets/cancau2.webp",
      "./assets/cancau1.jpg",
    ],
    keywords: ["can cau xin", "sdsa", "dsadsa"],
    star: 4.5, //avg
    rate: [60, 40, 120, 30, 50],
    totalRate: 300,
  },
  comments: initChat,
};
export const countriesOptions = [
  {
    key: "defaultSort",
    value: "Sắp xếp",
  },
  {
    key: "asc",
    value: "Giá: Tăng dần",
  },
  {
    key: "desc",
    value: "Giá: Giảm dần",
  },
  {
    key: "az",
    value: "Tên: a-z",
  },
  {
    key: "za",
    value: "Tên: z-a",
  },
  {
    key: "newest",
    value: "Mới nhất",
  },
  {
    key: "oldest",
    value: "Cũ nhất",
  },
];
export const listIconsSeo = {
  icon: "/favicon.ico",
  apple: [
    { url: "/favicon.ico" },
    { url: "/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
    { url: "/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
    { url: "/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
    { url: "/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
    { url: "/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
    { url: "/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
    { url: "/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
    { url: "/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
    { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
  ],
  other: [
    {
      rel: "apple-icon-precomposed",
      url: "/apple-icon-precomposed.png",
    },
  ],
};

export const goToUSList = [
  {
    title: "Giải thưởng hấp dẫn",
    des: "Sự kiện diễn ra hàng tuần với hàng trăm cần thủ từ mọi miền tổ quốc cùng với giải thưởng đáng giá",
    image: "/assets/money.png",
  },
  {
    title: "Đi tay không  về có cá",
    des: "Chỉ cần bạn đặt chân đến, chúng tôi sẽ lo cùng nhiều dịch vụ cho thuê cần câu mua thức cám cá",
    image: "/assets/ca.png",
  },
  {
    title: "Hoàn vốn siêu nhanh",
    des: "Chúng tôi thu mua cá với mức giá cao nhất thị trường tính theo kg,  đây cũng là nghề thu nhập mới ",
    image: "/assets/family.png",
  },
  {
    title: "Mở cửa xuyên đêm",
    des: "Cung cấp dịch vụ 24/24 để thỏa mãn niềm đam mê của cần thủ khắp mọi miền đất nước ",
    image: "/assets/clock.png",
  },
];
