import React from "react";

interface provincesI {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  phone_code: number;
  districts?: string[];
}

interface districtI {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  province_code: number;
  wards?: string[];
}

interface wardsI {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  district_code: number;
}

type SelectFormType = {
  id: string;
  provinces?: provincesI[];
  districts?: districtI[];
  wards?: wardsI[];
  handleSelectChange?: (e: any, typeS: string) => void;
};

const SelectFormPayment = ({
  id,
  provinces,
  districts,
  wards,
  handleSelectChange,
}: SelectFormType) => {
  return (
    <>
      <select
        id={id}
        name="province"
        className="p-4 border-2 mb-3 rounded-lg w-full md:w-1/3 text-sm outline-none"
        defaultValue="default"
        onChange={(e) => {
          handleSelectChange(e, "city");
        }}
      >
        <option value="default">Chọn tỉnh / thành</option>
        {provinces?.map((province) => (
          <option value={province.code} key={province.code}>
            {province.name}
          </option>
        ))}
      </select>
      <select
        id={id}
        name="district"
        className="p-4 border-2 mb-3 rounded-lg w-full md:w-1/3 text-sm outline-none"
        defaultValue="default"
        onChange={(e) => {
          handleSelectChange(e, "district");
        }}
      >
        <option value="default">Chọn quận / huyện</option>
        {districts &&
          districts.map((district) => (
            <option value={district.code} key={district.code}>
              {district.name}
            </option>
          ))}
      </select>
      <select
        id={id}
        name="ward"
        className="p-4 border-2 mb-3 rounded-lg w-full md:w-1/3 text-sm outline-none"
        defaultValue="default"
        onChange={(e) => {
          handleSelectChange(e, "ward");
        }}
      >
        <option value="default">Chọn phường / xã</option>
        {wards &&
          wards?.map((ward) => (
            <option value={ward.code} key={ward.code}>
              {ward.name}
            </option>
          ))}
      </select>
    </>
  );
};

export default SelectFormPayment;
