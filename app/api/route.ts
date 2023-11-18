import nodemailer from "nodemailer";
export const initialData = [
  {
    id: "rKeOOVX-UCI",
    name: "Vivamus magna justo, lacinia eget",
    slug: "hello",
    price: 109900,
    imageUrl: "/assets/can-cau.jpg",
    description:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapienQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien1.",
    stock: "10",
    sell: 200,
    discount: 0,
    category: "fishingRod",
  },
  {
    id: "rKeOOVX-U2I",
    name: "Guava Leaves From Trees Grown in South...",
    slug: "ss-ss-kk",
    price: 199900,
    imageUrl: "/assets/can-cau.jpg",
    description:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapienQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien2.",
    stock: "10",
    sell: 200,
    discount: 0,
    category: "fishingRod",
  },
  {
    id: "rKOOVX-UCI",
    name: "Pure Irish Organic Beef Quarter Pounder Burgers",
    slug: "ss-ss-ww",
    price: 79900,
    imageUrl: "/assets/can-cau.jpg",
    description:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapienQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien3.",
    stock: "Out of stock",
    sell: 200,
    discount: 0,
    category: "fishingRod",
  },
  {
    id: "rKeaaaOOVX-UCI",
    name: "Mangosteen Organic From France",
    slug: "ss-ss-uu",
    price: 149900,
    imageUrl: "/assets/can-cau.jpg",
    description:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapienQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien4.",
    stock: "10",
    sell: 200,
    discount: 0,
    category: "fishingRod",
  },
  {
    id: "rKeObbbOVX-UCI",
    name: "Fresh Mangosteen 100% Organic From ThaiLan",
    slug: "ss-ss-mm",
    price: 59900,
    imageUrl: "/assets/can-cau.jpg",
    description:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapienQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien5.",
    stock: "Out of stock",
    sell: 200,
    discount: 0,
    category: "fishingRod",
  },
  {
    id: "rKeOOVX-UCIccc",
    name: "USDA Choice Angus Beef Stew Meat - 1Kg",
    slug: "ss-ss-aa",
    price: 89900,
    imageUrl: "/assets/can-cau.jpg",
    description:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapienQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien6.",
    stock: "10",
    sell: 200,
    discount: 0,
    category: "fishingRod",
  },
  {
    id: "rKeOOVX-UCIsss",
    name: "Fresh Mangosteen 100% Organic From VietNamese",
    slug: "ss-ss-ss",
    price: 129900,
    imageUrl: "/assets/can-cau.jpg",
    description:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapienQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien7.",
    stock: "10",
    sell: 200,
    discount: 0,
    category: "fishingRod",
  },
  {
    id: "rKeOOVX-UCI222",
    name: "Mangosteen Organic From Nepal",
    slug: "ss-ss2",
    price: 69900,
    imageUrl: "/assets/can-cau.jpg",
    description:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapienQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien8.",
    stock: "Out of stock",
    sell: 200,
    discount: 0,
    category: "fishingRod",
  },
  {
    id: "rKeOOVX-UCI3333",
    name: "Mồi Câu Cá DF",
    slug: "moi-cau-ca-df",
    price: 30000,
    imageUrl: "/assets/moi-cau.jpg",
    description:
      "Mồi câu cá DF ( Rô Phi Cụ ) chuyên tự nhiên, sông, hồ ( cá rô phi và diêu hồng ), Mọi thành phần và hướng dẫn sử dụng đã ghi trên bao bì Mồi câu hiệu quả khi sử dụng nguyên zin",
    stock: "Out of stock",
    sell: 200,
    discount: 0,
    category: "bait",
  },
  {
    id: "rKeOOVX-UCI4422",
    name: "Cám DF Tổng Hợp Chuyên Đài",
    slug: "cam-df-tong-hop-chuyen-dai",
    price: 20000,
    imageUrl: "/assets/moi-cau.jpg",
    description:
      "Cám DF Tổng Hợp Chuyên Đài chuyên tự nhiên, sông, hồ ( cá rô phi và diêu hồng ), Mọi thành phần và hướng dẫn sử dụng đã ghi trên bao bì Mồi câu hiệu quả khi sử dụng nguyên zin",
    stock: "Out of stock",
    sell: 200,
    discount: 0,
    category: "bait",
  },
  {
    id: "rKeOOVX-UCI5215",
    name: "BỘT CÂU CÁ - NGŨ VỊ HƯƠNG",
    slug: "bot-cau-ca-ngu-vi-huong",
    price: 55000,
    imageUrl: "/assets/moi-cau.jpg",
    description:
      "BỘT CÂU CÁ - NGŨ VỊ HƯƠNG, Mọi thành phần và hướng dẫn sử dụng đã ghi trên bao bì Mồi câu hiệu quả khi sử dụng nguyên zin",
    stock: "Out of stock",
    sell: 200,
    discount: 0,
    category: "bait",
  },
  {
    id: "rKeOOVX-UCI9547",
    name: "Cám DF Tổng Hợp Câu Sông",
    slug: "cam-df-tong-hop-cau-song",
    price: 56000,
    imageUrl: "/assets/moi-cau.jpg",
    description:
      "Cám DF Tổng Hợp Câu Sông chuyên tự nhiên, sông, hồ ( cá rô phi và diêu hồng ), Mọi thành phần và hướng dẫn sử dụng đã ghi trên bao bì Mồi câu hiệu quả khi sử dụng nguyên zin",
    stock: "Out of stock",
    sell: 200,
    discount: 0,
    category: "bait",
  },
  {
    id: "rKeOOVX-UCI954711",
    name: "Cá nướng pa pỉnh tộp bằng bếp than",
    slug: "ca-nuong-pa-pinh-top-bang-bep-than",
    price: 0,
    imageUrl: "/assets/mon-nhau-img-1.png",
    description:
      "Cá nướng pa pỉnh tộp bằng bếp than là một món nướng được chế biến theo hương vị đặc sản Tây Bắc và được rất nhiều người yêu thích.",
    stock: "Out of stock",
    sell: 0,
    discount: 0,
    category: "food",
  },
  {
    id: "rKeOOVX-UCI954722",
    name: "Cá lóc nướng mỡ hành",
    slug: "ca-loc-nuong-mo-hanh",
    price: 0,
    imageUrl: "/assets/mon-nhau-img-2.png",
    description:
      "Cá lóc nướng mỡ hành là một món nướng vô cùng thơm ngon và hấp dẫn được rất nhiều người ưa thích.",
    stock: "Out of stock",
    sell: 0,
    discount: 0,
    category: "food",
  },
  {
    id: "rKeOOVX-UCI954733",
    name: "Cá diêu hồng nướng giấy bạc",
    slug: "ca-dieu-hong-nuong-giay-bac",
    price: 0,
    imageUrl: "/assets/mon-nhau-img-3.jpg",
    description:
      "món cá diêu hồng nướng giấy bạc và nướng muối cay cay, thơm lừng và cực kỳ hấp dẫn, ăn một miếng là say đắm.",
    stock: "Out of stock",
    sell: 0,
    discount: 0,
    category: "food",
  },
  {
    id: "rKeOOVX-UCI954744",
    name: "Bia Sài Gòn",
    slug: "bia-sai-gon",
    price: 0,
    imageUrl: "/assets/bia-3.jpg",
    description:
      "Bia SAIGON LÀM TỪ 100% LÚA MẠCH MÙA XUÂN Chỉ những bông lúa mạch mạnh mẽ nhất, phong dưỡng vươn qua mùa đông khắc nghiệt, nở bùng vào mùa xuân mới đem tới một hương vị bia cực kỳ hảo hạng.",
    stock: "Out of stock",
    sell: 0,
    discount: 0,
    category: "drink",
  },
  {
    id: "rKeOOVX-UCI954755",
    name: "Bia Tiger",
    slug: "bia-tiger",
    price: 0,
    imageUrl: "/assets/bia-2.jpg",
    description:
      "Bia Tiger được lên men tự nhiên từ các thành phần chính nước, đại mạch, ngũ cốc và hoa bia. Tạo nên hương vị độc đáo và rất riêng của bia Tiger bằng vị đậm đà kết hợp với vị ngọt tự nhiên của lúa mạch. Thùng 24 lon bia Tiger nâu 330ml chính hãng chất lượng thơm ngon.",
    stock: "Out of stock",
    sell: 0,
    discount: 0,
    category: "drink",
  },
  {
    id: "rKeOOVX-UCI954766",
    name: "Bia 333",
    slug: "bia-333",
    price: 0,
    imageUrl: "/assets/bia-1.jpg",
    description:
      "Bia 333 Là 1 trong những thương hiệu bia dẫn đầu tại thị trường Việt, bia 333 là sản phẩm truyền thống, lâu đời và thành công rực rỡ nhất của thương hiệu bia Sài Gòn Sabeco.Không chỉ được người tiêu dùng trong nước ưa chuộng mà đẳng cấp và vị thế của bia 333 còn được khẳng định cả trên thị trường quốc tế. Bia 333 đã được xuất khẩu và tin dùng trên hơn 17 quốc gia và thị trường khó tính như Nhật Bản, Đức, Hà Lan, Mỹ…",
    stock: "Out of stock",
    sell: 0,
    discount: 0,
    category: "drink",
  },
];
import { NextResponse } from "next/server";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sortType = searchParams.get("sort") || "all";
  const filterPrice = searchParams.get("price") || "all";
  switch (sortType) {
    case "asc":
      initialData.sort((a, b) => a.price - b.price);
      break;
    case "desc":
      initialData.sort((a, b) => b.price - a.price);
      break;
    case "az":
      initialData.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      });
      break;
    case "za":
      initialData.sort((a, b) => {
        if (b.name.toLowerCase() < a.name.toLowerCase()) return -1;
      });
      break;
    default:
      break;
  }

  return Response.json({ data: initialData });
}
export async function POST(req) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.NODEMAILER_USERNAME || "namph2102@gmail.com",
      pass: process.env.NODEMAILER_PASSWORD || "tatvcdfftwrtwzwb",
    },
  });
  const data = await req.json();
  const { email, code } = data;
  if (!email || !code)
    return NextResponse.json({
      status: false,
      message: "Email không tồn tại",
      code,
    });
  const info = await transporter
    .sendMail({
      from: `"Ốc đảo kỳ đà 👻"<namph2102@gmail.com>`, //Địa chỉ gửi
      to: `${email}`, //  danh sách người nhận
      subject: "Xác nhận quên mật khẩu ✔", // Tiêu đề
      text: "Hello world?", // plain text body
      html: ` <div>
  <h1>Mã xác nhận của bạn</h1>
  <br />
  <div style="display: flex">
  <div
    style="
      background-color: aquamarine;
      border-radius: 8px;
      margin: auto;
      padding: 8px 16px;
      font-weight: 800;
      font-size: 24px;
      letter-spacing: 3px;
    "
  >
    ${code}
  </div>
</div>
<br />
  <p>Lưu ý:</p>
  <ul>
    <li>Không chia sẻ  mã code  bất kỳ ai:</li>
    <li>Chỉ tồn tại trong: <strong> 2 phút</strong></li>
  </ul>
  <br />
 
  <div>
    <p>Trân trọng,</p>
    <p>Nguyễn Quốc Trường</p>
    <p>Hồ câu cá Ốc đảo kỳ đà</p>
    <p>Địa chỉ email liên hệ: adminocdao@gmail.com</p>
    <p>Số điện thoại liên hệ: 0347.088.538</p>
  </div>
</div>`, // Nội dung trong Email Dạng inline style
    })
    .catch((err) => {
      throw new Error(err);
    });

  console.log("Message sent: %s", info.messageId);
  return NextResponse.json({
    status: true,
    code,
    message: "Gửi mail thành công",
  });
}
nodemailer;
