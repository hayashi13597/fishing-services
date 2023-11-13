import React from "react";
import Image from "next/image";
import Link from "next/link";
const Appreciate = () => {
  return (
    <section className="my-8">
      <div className="grid md:grid-cols-2 grid-cols-1 p-2 lg:gap-4 gap-2">
        {/* Appreciate-item */}
        <figure className="flex gap-2 border-l-4 border-gray-200 pl-4">
          <figcaption>
            <blockquote className="text-sm">
              Tôi là
              <Link
                target="_blank"
                href="https://www.youtube.com/watch?v=Sw_5Up2YrsU"
                className="cursor-pointer"
              >
                <strong> Youtube </strong>
              </Link>
              hơn 220k người đăng ký, tôi chưa thấy hồ câu nào ở Hồ Chí Minh mà
              rộng như của ốc đảo Kỳ Đà, hàng chục tấn cá đa đạng rất thích.
              thiên nhiên thì hoang sơ nên phong cảnh đẹp và gần gũi tạo cảm
              giác bức phá và khao khát chính phục
            </blockquote>
            <p className="italic mt-2 text-sm">__ Chung Nguyen Fishing</p>
          </figcaption>
          <Image
            alt="appreciate-1"
            src="https://www.fishfishme.com/images/design2015/p_icon.jpg"
            width={100}
            height={100}
            className="object-cover rounded-full lg:w-[100px] lg:h-[100px] w-20 h-20"
          />
        </figure>
        {/*end- appreciate-item */}
        <figure className="flex gap-2 border-l-4 border-gray-200 pl-4">
          <figcaption>
            <blockquote className="text-sm">
              Tôi là
              <Link
                target="_blank"
                href="https://www.youtube.com/watch?v=sfEK3MhyByY"
                className="cursor-pointer"
              >
                <strong> Youtube </strong>
              </Link>
              hơn 7k người đăng ký, Tại đây tôi rất thích vì không giang trong
              lành và sạch sẽ của thiên nhiên hoang sơ cũng như đội ngũ nhân
              viên nhiệt tình. Đồ ăn, giải trí đều rất tốt và cơ cấu giải thưởng
              cao, nơi này quả thực là 1 trong 5 địa điểm tốt nhất để câu cá ở
              HCM cho cần thủ.
            </blockquote>

            <p className="italic mt-2 text-sm">__ Hưng Năm Căn</p>
          </figcaption>
          <Image
            alt="appreciate-1"
            src="/assets/hungnamcan.jpg"
            width={100}
            height={100}
            className="object-cover rounded-full lg:w-[100px] lg:h-[100px] w-20 h-20"
          />
        </figure>
      </div>
    </section>
  );
};

export default Appreciate;
