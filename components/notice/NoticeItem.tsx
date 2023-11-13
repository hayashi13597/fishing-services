import Image from "next/image";
import React from "react";

const NoticeItem = () => {
  return (
    <div className="flex gap-3 items-center py-2">
      <Image
        width={32}
        height={32}
        alt="Notice"
        src="/assets/notice.png"
        className="object-cover"
      />
      <div>
        <h6 className="font-bold ">Sự kiện bình mình nơi anh</h6>
        <p className="text-sm line-clamp-3 min-h-[48px]">
          Thông báo chúng tôi sẽ tổ chức giải câu cá nhằm vào ngày 20/12 Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Error dolores enim
          dolor aperiam ab dolore quidem nobis amet repudiandae officiis,
          quaerat non laboriosam iste atque dolorum aspernatur. Iusto, nisi nam.
          Aliquam a accusantium eum, odit neque alias, voluptate, perferendis
          veniam fugiat voluptatem tempore quas voluptates repellat!
          Reprehenderit officiis eius quam ex, voluptas nostrum voluptatem
          labore ut. Commodi quod et rerum? Maxime non dolore voluptates officia
          tenetur quo repellendus, consequuntur, nulla harum, quidem repudiandae
          eveniet facilis? Aspernatur quaerat praesentium iusto. Enim dolorum
          sint vero magni esse aliquid officiis molestias placeat veritatis!
          Magnam adipisci eaque voluptates alias tenetur qui, eligendi repellat
          dolorem architecto eum aliquam incidunt? Dolorem, molestiae earum.
          Esse ratione recusandae pariatur! Voluptatibus minus aliquam ipsa at
          minima ab odit eligendi. Nam, veritatis dolores! Ex animi adipisci
          nulla! Molestiae sequi unde dolorem sit delectus repellat ipsam nemo
          sint fugiat rerum accusantium asperiores quis at doloribus, magnam
          sunt cum eum, illo ipsa! Suscipit quis quos ipsam eaque sunt laborum
          explicabo dolorem voluptates odit ratione, laudantium excepturi, iusto
          temporibus consequuntur quidem dolore earum quia cupiditate. Ad
          nesciunt asperiores atque quo.
        </p>
      </div>
    </div>
  );
};

export default NoticeItem;
