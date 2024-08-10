import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAddProduct } from "../services/mutation/useAddProduct";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  title: z.string().min(3, "At least 4 charecters"),
  url: z.string().min(5, "At least 5 charecters"),
  description: z.string().min(7, "At least 7 charecters"),
});

export const ProductForm = () => {
  const navigate = useNavigate();
  const { mutate } = useAddProduct();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const newProductSubmit = (data) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/");
      },
    });
    reset();
  };

  return (
    <div>
      <form className="mt-32" onSubmit={handleSubmit(newProductSubmit)}>
        <select {...register("categoryId")}></select>
        <Input
          register={register}
          className={"mt-5 w-[60%] mx-auto block"}
          type={"text"}
          name={"title"}
          placeholder={"Product name"}
        />
        {errors.name && (
          <p className="text-red-600 font-medium text-lg">
            {errors.title.message}
          </p>
        )}
        <Input
          register={register}
          className={"mt-5 w-[60%] mx-auto block"}
          type={"url"}
          name={"url"}
          placeholder={"Product image (must be url!)"}
        />
        {errors.name && (
          <p className="text-red-600 font-medium text-lg">
            {errors.url.message}
          </p>
        )}
        <Input
          register={register}
          className={"mt-5 w-[60%] mx-auto block"}
          type={"text"}
          name={"description"}
          placeholder={"Product description"}
        />
        {errors.name && (
          <p className="text-red-600 font-medium text-lg">
            {errors.description.message}
          </p>
        )}
        <Input
          register={register}
          className={"mt-5 w-[60%] mx-auto block"}
          type={"number"}
          name={"price"}
          placeholder={"Product price"}
        />
        <Button
          className={"mt-10 block w-[35%]"}
          type={"submit"}
          variant={"submit"}
          children={"Send"}
        />
      </form>
    </div>
  );
};

export default ProductForm;
