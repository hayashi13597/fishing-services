"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import CateApi from "../../../services/api-client/cate";

const ListCategories = () => {
  const [listCateGory, setListCategory] = useState([]);

  useEffect(() => {
    CateApi.GetAllCate().then((res: any) => {
      setListCategory(() => res.data.categories);
    });
  }, []);

  return (
    <div className="container mx-auto mt-10 md:mt-20">
      <h1 className="text-4xl text-center text-text/80">Danh mục</h1>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-5 overflow-hidden">
        {listCateGory.map((category) => (
          <div className="relative group p-2" key={`danhmuc-${category.id}`}>
            <Link href={`/${category.slug}`} title={category.name}>
              <div className="w-full rounded-full overflow-hidden group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>

              <p className="font-medium text-center line-clamp-2 mt-2 border-b-2 border-[#ffff] group-hover:border-b-2 group-hover:border-text pb-1 transition-all duration-300">
                {category.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListCategories;
