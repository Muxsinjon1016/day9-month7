import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { useEditCategory } from "../services/mutation/useEditCategory";

const schema = z.object({
  title: z.string().min(3, "At least 4 characters"),
  categoryImg: z.string().min(5, "At least 5 characters"),
});

export const EditCategoryForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { mutate } = useEditCategory(id);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const newCategorySubmit = (data) => {
    mutate(
      { id, ...data },
      {
        onSuccess: () => {
          navigate("/");
        },
      }
    );
    reset();
  };

  return (
    <>
      <div>
        <form className="mt-10" onSubmit={handleSubmit(newCategorySubmit)}>
          <Input
            register={register}
            className={"mt-5 w-[60%] mx-auto block"}
            type={"text"}
            name={"title"}
            placeholder={"Enter new category name"}
          />
          {errors.title && (
            <p className="text-red-600 font-medium text-lg">
              {errors.title.message}
            </p>
          )}
          <Input
            register={register}
            className={"mt-5 w-[60%] mx-auto block"}
            type={"url"}
            name={"categoryImg"}
            placeholder={"Enter new category image (must be URL!)"}
          />
          {errors.categoryImg && (
            <p className="text-red-600 font-medium text-lg">
              {errors.categoryImg.message}
            </p>
          )}
          <Button
            className={"mt-10 block w-[35%]"}
            type={"submit"}
            variant={"submit"}
            children={"Edited"}
          />
        </form>
      </div>
    </>
  );
};

export default EditCategoryForm;
