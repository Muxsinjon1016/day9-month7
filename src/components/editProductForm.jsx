import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { useEditCategory } from "../services/mutation/useEditCategory";

export const EditProductForm = ({ editProductSubmit, categoryData }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { mutate } = useEditCategory(id);
  const { register, handleSubmit, reset } = useForm();

  const editProductSubmit = (data) => {
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
        <form className="mt-32" onSubmit={handleSubmit(editProductSubmit)}>
          <select
            className="rounded-12 py-2 outline-none px-4 w-full mt-5 font-semibold mx-auto block"
            {...register("categoryId")}
          >
            {categoryData?.map((category) => (
              <option value={category.id} key={category.id}>
                {category.title}
              </option>
            ))}
          </select>
          <Input
            register={register}
            className={"mt-5 w-[60%] mx-auto block"}
            type={"text"}
            name={"title"}
            placeholder={"Product name"}
          />
          <Input
            register={register}
            className={"mt-5 w-[60%] mx-auto block"}
            type={"url"}
            name={"url"}
            placeholder={"Product image (must be url!)"}
          />
          <Input
            register={register}
            className={"mt-5 w-[60%] mx-auto block"}
            type={"text"}
            name={"description"}
            placeholder={"Product description"}
          />
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
    </>
  );
};

export default EditProductForm;
