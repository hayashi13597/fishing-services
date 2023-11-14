import React from "react";
import { formatMoney } from "../../utils";

type RadioInputComponentType = {
  id: string;
  value: number | string;
  name: string;
  label: string;
  isShipMethod?: boolean;
  setShowMethod: (value: number | string) => void;
};

const RadioInputComponent = ({
  id,
  value,
  name,
  label,
  isShipMethod,
  setShowMethod,
}: RadioInputComponentType) => {
  return (
    <div className="flex items-center pl-4 bg-[#ffff] border">
      <input
        id={id}
        type="radio"
        value={value}
        name={name}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 accent-primary"
        onChange={() => setShowMethod(value)}
      />
      <label
        htmlFor={id}
        className={`w-full py-4 ml-2 text-sm font-medium text-gray-900 cursor-pointer ${
          isShipMethod ? "" : "flex items-center gap-2"
        }`}
      >
        {isShipMethod ? "" : <img src="/assets/debit-card.png" />}
        {label}
      </label>
      {isShipMethod && (
        <span className="mr-4 text-sm opacity-70">
          {formatMoney(Number(value))}
        </span>
      )}
    </div>
  );
};

export default RadioInputComponent;
