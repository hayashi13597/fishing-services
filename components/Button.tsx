import { MouseEventHandler } from "react";

type Props = {
  title: string;
  handleClick?: MouseEventHandler;
  submitting?: boolean | false;
  type?: "button" | "submit";
  bgColor?: string;
  textColor?: string;
};

const Button = ({
  title,
  handleClick,
  submitting,
  type,
  bgColor,
  textColor,
}: Props) => (
  <button
    type={type || "button"}
    disabled={submitting || false}
    className={`w-full ${textColor ? textColor : "text-white"} ${
      submitting ? "bg-blue-300" : bgColor ? bgColor : "bg-blue-600"
    } focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:opacity-80 transition-all`}
    onClick={handleClick}
  >
    {submitting ? title + "..." : title}
  </button>
);

export default Button;
