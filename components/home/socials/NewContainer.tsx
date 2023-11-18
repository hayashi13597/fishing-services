import React from "react";
import NewItem from "../../news/NewItem";
import HeaderTitle from "../../HeaderTitle";
import PopularItem, {
  IPopularItemProps,
} from "../../NewsPage/Popular/PopularItem";
import Link from "next/link";
interface NewContainerPros {
  listNews: IPopularItemProps[];
}
const NewContainer = ({ listNews }: NewContainerPros) => {
  return (
    <section>
      <HeaderTitle title="Tin tức mới" />
      <div className="lg:grid-cols-2 grid-cols-1 grid gap-4">
        {listNews.map((news) => (
          <PopularItem key={news.id} {...news} />
        ))}
      </div>
      <div className="flex">
        <Link
          className="m-auto text-sm mt-8 sm:mb-0 mb-4 bg-primary/90 hover:bg-primary py-1 px-4 inline-block text-white   rounded-full"
          href="/tin-tuc"
        >
          Xem tất cả
        </Link>
      </div>
    </section>
  );
};

export default NewContainer;
