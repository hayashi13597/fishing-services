import React from "react";
import { TFormFieldProps } from "../../common.types";
interface InputFormPaymentProps
  extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  ref?: any;
}
const InputFormPayment = (props: InputFormPaymentProps) => {
  return (
    <div className="w-full px-4 border-2 bg-[#ffff] rounded-lg relative mb-5 group">
      <input
        id={props.id}
        type={props.type}
        name={props.id}
        placeholder=" "
        className="w-full block placeholder-transparent bg-transparent outline-0 py-4 peer text-sm translate-y-2 focus:translate-y-2 focus:bg-transparent"
        autoComplete="off"
        {...props}
        ref={props.ref || null}
        required
      />
      <label
        htmlFor={props.id}
        className="absolute top-3.5 opacity-70 -translate-y-1/2 pointer-events-none text-xs transition-all rounded-full
              peer-focus:top-3.5 peer-focus:font-medium peer-focus:text-xs peer-focus:opacity-70 peer-placeholder-shown:top-1/2 peer-placeholder-shown:opacity-70 peer-placeholder-shown:text-sm"
      >
        {props.label}
      </label>
    </div>
  );
};

export default InputFormPayment;
