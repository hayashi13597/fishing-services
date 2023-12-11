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

export const aboutUs = [
  {
    title: "Giải thưởng hấp dẫn",
    content:
      "Sự kiện diễn ra hàng tuần với hàng trăm cần thủ từ mọi miền tổ quốc cùng với giải thưởng đáng giá",
  },
  {
    title: "Đi tay không về có cá",
    content:
      "Chỉ cần bạn đặt chân đến, chúng tôi sẽ lo cùng nhiều dịch vụ cho thuê cần câu mua thức cám cá",
  },
  {
    title: "Hoàn vốn siêu nhanh",
    content:
      "Chúng tôi thu mua cá với mức giá cao nhất thị trường tính theo kg, đây cũng là nghề thu nhập mới",
  },
  {
    title: "Mở cửa xuyên đêm",
    content:
      "Cung cấp dịch vụ 24/24 để thỏa mãn niềm đam mê của cần thủ khắp mọi miền đất nước",
  },
];

export const termsOfUseConstants = [
  {
    title: "Giới thiệu chung",
    content:
      "Khi khách hàng truy cập vào website fishing-services.store của Câu Cá Ốc Đảo có nghĩa là khách hàng đã đồng ý với các điều khoản này. Câu Cá Ốc Đảo có quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ bất kỳ phần nào trong Điều khoản sử dụng này vào bất cứ lúc nào. Các thay đổi có hiệu lực ngay khi được đăng trên trang web mà không cần thông báo trước. Khi khách hàng tiếp tục sử dụng dịch vụ giao hàng của Câu Cá Ốc Đảo, sau khi các thay đổi về Điều khoản này được đăng tải, có nghĩa là khách hàng chấp nhận với những thay đổi đó. Khách hàng vui lòng kiểm tra thường xuyên các quy định và điều khoản dưới đây để cập nhật những thay đổi của chúng tôi.",
  },
  {
    title: "Chính sách Tài khoản Người dùng",
    content:
      "Khách hàng cam kết và cung cấp thông tin chính xác nhằm mục đích nhận được phục vụ tốt nhất từ Câu Cá Ốc Đảo. Mỗi email chỉ tạo được một (01) tài khoản cho mục đích sử dụng cá nhân. Để đảm bảo quyền lợi, khách hàng không chia sẻ thông tin tài khoản (email và mật khẩu) cho người khác sử dụng tài khoản Câu Cá Ốc Đảo, hoặc chuyển nhượng tài khoản cho bất kỳ ai khác mà chưa thông qua Câu Cá Ốc Đảo. Câu Cá Ốc Đảo có quyền khóa tài khoản hoặc khóa một phần tính năng của tài khoản (như tính năng Đặt hàng...) của khách hàng khi Câu Cá Ốc Đảo phát hiện khách hàng vi phạm điều khoản hoặc chính sách hoặc có hành vi mua hàng không trung thực điển hình như: Tạo các đơn hàng ảo, hoặc đánh giá ảo. Không nhận đơn hàng đã đặt mà không cung cấp lý do chính đáng. Có dấu hiệu lừa đảo hoặc lạm dụng các mã giảm giá và chương trình khuyến mãi để trục lợi Các trường hợp khác mà hệ thống của Câu Cá Ốc Đảo phát hiện được. Tùy từng trường hợp, Câu Cá Ốc Đảo sẽ có biện pháp xử lý thích hợp, bao gồm khóa tài khoản mà không cần thông báo trước. Tài khoản bị khóa hoặc khóa một phần tính năng sẽ được cấp lại sau khi hoàn thành quá trình xác minh qua các chứng từ/thông tin khách hàng cung cấp chứng minh việc mua hàng (hóa đơn, hình ảnh sản phẩm đã mua,..) và có sự đồng thuận giữa khách hàng và Câu Cá Ốc Đảo.",
  },
  {
    title: "Giới thiệu về các loại dịch vụ",
    content:
      "Dịch vụ “Giao hàng”: là dịch vụ mà khách hàng đặt sản phẩm ngay tại nhà và được Câu Cá Ốc Đảo giao hàng tận nơi. Sau khi khách hàng đặt hàng thành công, Câu Cá Ốc Đảo sẽ thực hiện đơn hàng và giao hàng đến địa chỉ mà khách hàng đã chọn.",
  },
  {
    title: "Chấp nhận đơn hàng và giá cả",
    content: `Tất cả các đơn hàng sau khi được Xác nhận đặt hàng sẽ được Câu Cá Ốc Đảo xử lý tự động và thực hiện đơn hàng. Trong một số trường hợp, Câu Cá Ốc Đảo sẽ chủ động liên hệ khách hàng để xác nhận lại thông tin đơn hàng qua cuộc gọi nếu các thông tin trên đơn hàng của khách hàng cung cấp chưa đầy đủ. 
    Câu Cá Ốc Đảo có quyền từ chối hoặc hủy bỏ đơn hàng của khách hàng vì bất kỳ lý do gì liên quan đến lỗi kỹ thuật, hệ thống một cách khách quan sau khi đã liên hệ thông báo với khách hàng. Trường hợp liên hệ 3 lần liên tục không thành công trong vòng 30 phút, chúng tôi sẽ tự động hủy đơn hàng của quý khách. Câu Cá Ốc Đảo rất tiếc vì chưa thể hoàn thành đơn hàng của quý khách trong trường hợp này.
    Câu Cá Ốc Đảo cam kết sẽ cung cấp thông tin giá cả chính xác nhất cho khách hàng. Tuy nhiên, đôi lúc vẫn có sai sót xảy ra, ví dụ như trường hợp giá sản phẩm không hiển thị chính xác trên trang web hoặc sai giá, tùy theo từng trường hợp chúng tôi sẽ liên hệ hướng dẫn xử lý hoặc thông báo hủy đơn hàng đó cho khách hàng.`,
  },
  {
    title: "Thay đổi thông tin đặt hàng",
    content: `Khách hàng vui lòng cung cấp thông tin đầy đủ và chính xác ngay khi hoàn tất đặt hàng tại Câu Cá Ốc Đảo.
    Câu Cá Ốc Đảo chỉ chấp nhận thay đổi thông tin trên đơn hàng bao gồm: địa chỉ giao hàng, thông tin người nhận. Tùy thuộc từng trường hợp có thể hỗ trợ khách hàng sau khi kiểm tra với cửa hàng thực hiện đơn hàng và đơn vị vận chuyển, Câu Cá Ốc Đảo sẽ liên hệ thông tin cho khách hàng hoặc có quyền từ chối hỗ trợ.`,
  },
  {
    title: "Hủy bỏ Đặt hàng",
    content: `Khách hàng được quyền chủ động hủy đơn hàng trên website đối với trường hợp đơn hàng chưa có shipper nhận giao hàng.
    Nếu khách hàng không thể thao tác hủy đơn hàng trên website, vui lòng liên hệ hotline 0347.088.538 để được nhân viên xử lý đơn hàng hỗ trợ kiểm tra tình trạng đơn hàng muốn hủy. Tùy từng trường hợp, nếu cửa hàng đã bắt đầu giao hàng, Câu Cá Ốc Đảo rất tiếc chưa thể hỗ trợ hủy đơn hàng.
    Đơn hàng sẽ được trả về cửa hàng nếu nhân viên giao hàng không liên lạc được với Khách hàng tại thời điểm giao hàng (tối đa 3 cuộc gọi).
    Với trường hợp Đã giao đơn hàng đến địa chỉ yêu cầu, tuy nhiên không liên hệ được người nhận trong vòng 30 phút kể từ khi shipper trả hàng về cửa hàng.
    Câu Cá Ốc Đảo sẽ có toàn quyền không thực hiện đặt hàng của khách hàng trong các trường hợp sau:
    Không liên lạc được với khách hàng qua điện thoại vào thời điểm xác nhận đặt hàng (Câu Cá Ốc Đảo chỉ liên hệ xác nhận đơn hàng qua cuộc gọi đối với các đơn hàng chưa đầy đủ thông tin).
    Không thực hiện được đơn hàng của khách hàng do thiếu thông tin, chỉ dẫn hoặc ủy quyền từ khách hàng tại thời điểm giao hàng
    Không có sẵn tất cả các mặt hàng khách hàng đặt mua tại thời điểm đặt hàng.
    Câu Cá Ốc Đảo phát hiện rằng số điện thoại đặt hàng vi phạm điều khoản hoặc chính sách của công ty hoặc có hành vi mua hàng không trung thực.
    `,
  },
  {
    title: "Phương thức thanh toán",
    content: `Khách hàng được quyền lựa chọn hình thức thanh toán phù hợp với nhu cầu, Câu Cá Ốc Đảo cung cấp các phương thức thanh toán cho đơn hàng như sau: Thanh toán tiền mặt (COD): khách hàng thanh toán khi nhận hàng. Thanh toán trực tuyến bằng các ví điện tử như Momo.`,
  },
  {
    title: "Chính sách hoàn trả hàng",
    content: `Ngay tại thời điểm tài xế bàn giao sản phẩm cho khách hàng, khách hàng vui lòng tiến hành đồng kiểm tra sản phẩm với tài xế.
    Trường hợp đơn hàng không đúng hoặc sản phẩm bị hư hại, khách hàng có quyền từ chối nhận sản phẩm.
    Nếu tài xế không đồng ý nhận lại sản phẩm, khách hàng vui lòng liên hệ hotline XXXXXXX để được hỗ trợ ngay.
    Vậy, tất cả sản phẩm bán trên Câu Cá Ốc Đảo sẽ không được hoàn lại khi khách hàng đã nhận và đã đồng ý nhận sản phẩm từ phía shipper.`,
  },
  {
    title: "Phí giao hàng",
    content: `Với dịch vụ Giao hàng tận nơi, Phí giao hàng được áp dụng và hiển thị chi tiết trên mỗi đơn hàng. Với đơn hàng thanh toán tiền mặt, Khách hàng chỉ thanh toán tổng giá trị đơn hàng được thể hiện trên hóa đơn thanh toán. Với đơn hàng đã được thanh toán trực tuyến, Khách hàng không thanh toán thêm bất kỳ khoản phí nào cho shipper.`,
  },
];

export const privacyPolicy = [
  {
    title: "BẢO MẬT THÔNG TIN",
    content: `Chính sách bảo mật thông tin (“Chính sách bảo mật” hoặc “Chính sách”) này bao gồm các quy định liên quan đến việc thu thập, sử dụng, tiết lộ và/hoặc xử lý Thông Tin Khách Hàng (như được định nghĩa bên dưới) mà Quý khách đã cung cấp cho Câu Cá Ốc Đảo, trong quá trình Quý khách đăng ký tài khoản, mua hàng, sử dụng các sản phẩm và dịch vụ của Câu Cá Ốc Đảo (“Sản Phẩm - Dịch Vụ”), hoặc khi Quý khách giao dịch với Câu Cá Ốc Đảo thông qua https://fishing-servies.store (“WEBSITE”). Chính sách này cũng quy định về nghĩa vụ của Câu Cá Ốc Đảo đối với Thông Tin Khách Hàng cũng như sự chấp thuận của Quý khách đối với việc thu thập, sử dụng, tiết lộ và/hoặc xử lý Thông Tin Khách Hàng của Công ty.`,
  },
  {
    title: "THÔNG TIN KHÁCH HÀNG",
    content: `Thông tin khách hàng (“Thông Tin Khách Hàng”) bao gồm nhưng không giới hạn ở họ và tên, địa chỉ email, số điện thoại, địa chỉ giao hàng, thông tin thanh toán, thông tin trên biểu mẫu, các thông tin được gửi bởi hoặc cung cấp thông qua các thiết bị được sử dụng để truy cập vào WEBSITE, hoặc các thông tin mà Quý khách chủ động gửi đến cho Câu Cá Ốc Đảo. Thông tin có được do sự tương tác của Quý khách với Câu Cá Ốc Đảo qua bất kỳ phương tiện nào (điện thoại, thư từ, fax, email, mạng xã hội), đăng nhập và sử dụng Sản Phẩm - Dịch Vụ hoặc tương tác thông qua WEBSITE, kể cả việc Quý khách đã sử dụng như thế nào.`,
  },
  {
    title: "SỰ CHẤP THUẬN CỦA KHÁCH HÀNG",
    content: `Khi sử dụng Sản Phẩm - Dịch Vụ và/hoặc tương tác với Câu Cá Ốc Đảo, Quý khách xác nhận và đồng ý rằng Quý khách chấp nhận các quy định của Chính sách bảo mật này, và Quý khách đồng ý cho Câu Cá Ốc Đảo thu thập, sử dụng, tiết lộ và/hoặc xử lý Thông Tin Khách Hàng theo quy định mô tả trong đây. TRONG TRƯỜNG HỢP QUÝ KHÁCH KHÔNG ĐỒNG Ý VỚI CHÍNH SÁCH BẢO MẬT NÀY, QUÝ KHÁCH CÓ THỂ CÂN NHẮC DỪNG CUNG CẤP THÔNG TIN KHÁCH HÀNG CHO Câu Cá Ốc Đảo; TỰ ĐĂNG NHẬP TÀI KHOẢN ĐỂ KIỂM TRA, CẬP NHẬT, ĐIỀU CHỈNH THÔNG TIN KHÁCH HÀNG HOẶC YÊU CẦU Câu Cá Ốc Đảo THỰC HIỆN VIỆC NÀY. Chính sách bảo mật này có thể được sửa đổi, bổ sung nhằm hoàn thiện vào từng thời điểm, Câu Cá Ốc Đảo khuyến khích Quý khách thường xuyên xem lại để được cập nhật và bảo vệ quyền lợi của mình.`,
  },
  {
    title: "MỤC ĐÍCH SỬ DỤNG THÔNG TIN",
    content: `Thông Tin Khách Hàng chỉ được Câu Cá Ốc Đảo sử dụng cho một hoặc tất cả các mục đích (“Mục Đích”) Xử lý đơn đặt hàng và cung cấp Sản Phẩm - Dịch Vụ cho Quý khách.
    Cung cấp thông tin, chính sách, tiến độ mua bán liên quan đến Sản Phẩm - Dịch Vụ, hỗ trợ khi Quý khách có yêu cầu
    Xác nhận và thực hiện các giao dịch tài chính liên quan đến các khoản thanh toán trực tuyến của Quý khách khi Quý khách sử dụng Sản Phẩm - Dịch Vụ.
    Gửi thông tin sản phẩm, dịch vụ mới, các ưu đãi dành riêng cho Quý khách.
    Cập nhật về các sự kiện sắp tới, chương trình ưu đãi hoặc thông tin tuyển dụng nếu Quý khách đăng ký nhận email thông báo.
    Cải thiện trải nghiệm của người dùng trên WEBSITE hoặc đối với Sản Phẩm - Dịch Vụ.
    Giải quyết các tranh chấp, khiếu nại liên quan.
    Ngăn ngừa các hoạt động phá hủy tài khoản của Quý khách hoặc giả mạo Quý khách.`,
  },
  {
    title: "THỜI GIAN LƯU TRỮ",
    content: `Thông Tin Khách Hàng được lưu trữ cho đến khi Quý khách có yêu cầu Câu Cá Ốc Đảo hủy bỏ. Trong mọi trường hợp, Thông Tin Khách Hàng được lưu trữ và bảo mật trên máy chủ của Câu Cá Ốc Đảo.`,
  },
  {
    title: "THÔNG TIN LIÊN HỆ CỦA Câu Cá Ốc Đảo",
    content: `Trong trường hợp Quý khách có bất kỳ thắc mắc nào liên quan đến Chính sách bảo mật này, Quý khách có thể liên hệ Công ty theo thông tin: Câu Cá Ốc Đảo. Địa chỉ: Đ. Bờ Bao Htx Phong Phú, Phong Phú, Bình Chánh, Thành phố Hồ Chí Minh, Việt nam. Email: adminocdao@gmail.com. Hotline: 0347.088.538`,
  },
  {
    title: "HIỆU LỰC",
    content: `Chính sách bảo mật này có hiệu lực kể từ ngày 20/10/2023.`,
  },
];
