import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNewCategory } from "../services/mutation/useNewCategory";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const schema = z.object({
  title: z.string().min(3, "At least 4 charecters"),
  categoryImg: z.string().min(5, "At least 5 charecters"),
});

export const NewCategoryForm = () => {
  const navigate = useNavigate();
  const { mutate } = useNewCategory();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const newCategorySubmit = (data) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Category successfully added", {
          position: "top-center",
          theme: "colored",
        });
        navigate("/");
      },
    });
    reset();
  };

  return (
    <>
      <div>
        <form className="mt-32" onSubmit={handleSubmit(newCategorySubmit)}>
          <Input
            register={register}
            className={"mt-5 w-[60%] mx-auto block"}
            type={"text"}
            name={"title"}
            placeholder={"Category name"}
          />
          {errors.name && (
            <p className="text-red-600 font-medium text-lg">
              {errors.name.message}
            </p>
          )}
          <Input
            register={register}
            className={"mt-5 w-[60%] mx-auto block"}
            type={"url"}
            name={"categoryImg"}
            placeholder={"Category image (must be url!)"}
          />
          {errors.name && (
            <p className="text-red-600 font-medium text-lg">
              {errors.name.message}
            </p>
          )}
          <Button
            className={"mt-10 block w-[35%]"}
            type={"submit"}
            variant={"submit"}
            children={"Send"}
          />
        </form>
      </div>
    </>
  );
};

export default NewCategoryForm;
