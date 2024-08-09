import React from "react";
import Button from "../../../components/ui/button";
import { useDeleteCategory } from "../../../services/mutation/useDeleteCategory";
import { useNavigate } from "react-router-dom";

export const Categories = ({ categoryImg, title, id }) => {
  const navigate = useNavigate();
  const { mutate } = useDeleteCategory();
  const deleteCategory = () => {
    mutate(id);
  };
  const editCategory = () => {
    navigate(`/edit-category-form/${id}`);
  };

  return (
    <>
      <div className="flex items-center hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl justify-between mx-auto border-2 border-white mb-5 rounded-12 py-3 px-5">
        <div className="text-center">
          <img className="w-[95px] mx-auto h-auto" src={categoryImg} alt="img" />
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <div className="flex items-center gap-40">
          <Button
            onClick={() => navigate(`/category-products/${id}`)}
            type={"button"}
            variant={"show"}
            children={"Show products"}
          />
          <div>
            <Button
              onClick={deleteCategory}
              type={"button"}
              variant={"delete"}
              children={"Delete"}
            />
            <Button
              onClick={editCategory}
              className={"mt-2"}
              type={"button"}
              variant={"edit"}
              children={"Edit"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
