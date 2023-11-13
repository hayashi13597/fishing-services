import React from "react";
import { TFormFieldProps } from "../common.types";
interface FormFieldProps extends React.ComponentPropsWithoutRef<"input"> {
  type?: string;
  label?: string;
  id: string;
  placeholder?: string;
  register?: any;
  error?: any;
}
const FormField = ({
  label,
  type,
  placeholder,
  id,
  register,
  error,
  ...props
}: FormFieldProps) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        {...props}
        {...register(id)}
        className={`bg-gray-50 border ${
          error ? "border-red-500" : "border-gray-300"
        } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        placeholder={placeholder}
      />
      {error && <p className="text-red-600 text-sm mt-2">{error.message}</p>}
    </div>
  );
};

export default FormField;
