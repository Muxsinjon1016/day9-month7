import clsx from "clsx";
import React from "react";

export const Input = ({
  type,
  placeholder,
  variant,
  className,
  name,
  register,
}) => {
  const variants = {
    default: "bg-gray-500 font-semibold",
  };

  return (
    <>
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={clsx(
          "rounded-12 py-2 outline-none px-4 w-full",
          variants[variant],
          className
        )}
      />
    </>
  );
};

export default Input;
