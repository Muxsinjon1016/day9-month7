import clsx from "clsx";
import React from "react";

export const Button = ({
  children,
  startIcon,
  endIcon,
  type,
  className,
  variant,
  onClick,
}) => {
  const variants = {
    submit:
      "bg-blue-700 rounded-12 py-2 px-4 block mx-auto text-xl font-semibold w-[80%] text-white hover:bg-blue-600",
    delete:
      "bg-red-600 hover:bg-red-500 py-2 px-5 rounded-12 font-medium text-lg text-white",
    edit: "bg-yellow-400 hover:bg-yellow-300 py-2 px-5 rounded-12 font-medium text-lg text-white",
    show: "bg-green-600 hover:bg-green-500 py-2 px-5 rounded-12 font-medium text-lg text-white",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        "block transition-all duration-300",
        variants[variant],
        className
      )}
      type={type}
    >
      <span>{startIcon}</span>
      <span>{children}</span>
      <span>{endIcon}</span>
    </button>
  );
};

export default Button;
