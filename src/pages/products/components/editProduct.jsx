import { Input } from "postcss";
import React from "react";
import ProductForm from "../../../components/productForm";
import useGetCategories from "../../../services/query/useGetCategories";
import useEditProduct from "../../../services/mutation/useEditProduct";
import { useNavigate } from "react-router-dom";

export const EditProduct = () => {
  const { data, isLoading } = useGetCategories();
  const { mutate } = useEditProduct();
  const navigate = useNavigate();

  const editProductSubmit = (data) => {
    mutate(data);
    navigate(-1);
  };

  return (
    <>
      <div>
        {!isLoading && (
          <ProductForm
            categoryData={data}
            editProductSubmit={editProductSubmit}
          />
        )}
      </div>
    </>
  );
};

export default EditProduct;
