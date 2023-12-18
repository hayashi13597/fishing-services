"use client";
import React, { useEffect, useState } from "react";
import { IProduct } from "../home/ProductContainer";
import SearchProduct from "../SearchPage/SearchProduct";
import { Pagination, Select } from "antd";
import CateApi from "../../services/api-client/cate";
import ProductsApi from "../../services/api-client/product";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

interface IProductScreen {
  listProductDefault: IProduct[];
  total: number;
  cate?: string;
  search?: string;
  isPageProduct?: boolean;
}

const ProductScreen = ({
  listProductDefault = [],
  total,
  cate,
  search,
  isPageProduct,
}: IProductScreen) => {
  const itemPerPage = 12;
  const [listProduct, setListProduct] =
    useState<IProduct[]>(listProductDefault);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [totalPage, setTotalPage] = useState(total);
  const [filter, setfilter] = useState({ idCate: "", filter: "az" });
  const listCateGory = useSelector(
    (state: RootState) => state.productDetail.listCate
  );

  //  const params = useSearchParams();
  //  const router = useRouter();
  //  const pathname = usePathname();
  //  const starFilter = params.get("filter") || "all";

  //  const handleFilter = (star: number | string) => {
  //    router.push(`${pathname}?filter=${star}`, { scroll: false });
  //  };

  useEffect(() => {
    if (!listProductDefault.length || isPageProduct) return;
    // if (cate) {
    //   CateApi.GetOneCate(
    //     cate,
    //     itemPerPage,
    //     itemPerPage * (pageCurrent - 1)
    //   ).then((res) => {
    //     setListProduct(() => res.listProducts);
    //     setTotalPage(() => res.total);
    //   });
    // }

    if (search) {
      ProductsApi.search(
        search,
        itemPerPage,
        itemPerPage * (pageCurrent - 1)
      ).then((res) => {
        const listProductSearch = res.data.products;
        if (listProductSearch) {
          setListProduct(() => listProductSearch);
          setTotalPage(() => res.data?.total || 1);
        }
      });
    }
  }, [listProductDefault.length, pageCurrent]);

  // danh cho trang san pham
  useEffect(() => {
    if (cate) {
      const findCate = listCateGory.find((item) => item.slug == cate);
      if (findCate) {
        handleUpdateViewSelect(findCate.id, filter.filter, itemPerPage);
      }
    } else if (isPageProduct) {
      handleUpdateViewSelect(filter.idCate, filter.filter, itemPerPage);
    }
  }, [
    pageCurrent,
    listProductDefault.length,
    filter.filter,
    filter.idCate,
    cate,
    listCateGory.length,
  ]);

  const handleChangeCate = (value: string) => {
    setfilter((prev) => ({ ...prev, idCate: value }));
    setPageCurrent(() => 1);
  };
  const handleChangeFilter = (value: string) => {
    setfilter((prev) => ({ ...prev, filter: value }));
    setPageCurrent(() => 1);
  };
  const listOrders = listCateGory.map((cate) => ({
    value: cate.id,
    label: cate.name,
  }));

  listOrders.unshift({ value: "", label: "Tất cả" });
  const handleUpdateViewSelect = (
    idCate: string,
    filter: string,
    itemPerPage: number
  ) => {
    ProductsApi.Filter(
      idCate,
      filter,
      itemPerPage,
      itemPerPage * (pageCurrent - 1)
    ).then((res: any) => {
      setListProduct(() => res.data.products);
      setTotalPage(() => res.data.total);
    });
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <div className="text-sm">
          {!isPageProduct ? (
            search ? (
              <p>
                Kết quả tìm kiếm cho <span className="font-bold">{search}</span>{" "}
                là:
              </p>
            ) : (
              ""
            )
          ) : (
            <Select
              defaultValue="Danh mục"
              className="capitalize"
              style={{ width: 200 }}
              onChange={handleChangeCate}
              options={listOrders}
            />
          )}
        </div>
        {search ? (
          ""
        ) : (
          <Select
            defaultValue="Sắp xếp"
            style={{ width: 200 }}
            onChange={handleChangeFilter}
            options={[
              { value: "", label: "Tất cả" },
              { value: "lowest", label: "Giá: thấp đến cao" },
              { value: "hightest", label: "Giá: Cao đến thấp" },
              { value: "az", label: "Tên: từ a - z" },
              { value: "za", label: "Tên: từ z - a" },
            ]}
          />
        )}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 mb-10 mt-4">
        {listProduct.length ? (
          listProduct.map((product) => (
            <SearchProduct product={product} key={`san-pam-${product.id}`} />
          ))
        ) : (
          <div className="h-[40vh] text-primary">Không có sản phẩm nào?</div>
        )}
      </div>

      <div
        className={`flex justify-center ${
          itemPerPage >= totalPage ? "!hidden" : "mb-10"
        }`}
      >
        <Pagination
          total={totalPage}
          pageSize={itemPerPage}
          showSizeChanger={false}
          current={pageCurrent}
          onChange={(page) => setPageCurrent(page)}
        />
      </div>
    </div>
  );
};

export default ProductScreen;
