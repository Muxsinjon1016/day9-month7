import { Input } from "postcss";
import React from "react";
import ProductForm from "../../../components/productForm";
import useGetCategories from "../../../services/query/useGetCategories";
import useAddProduct from "../../../services/mutation/useAddProduct";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
  const { data, isLoading } = useGetCategories();
  const { mutate } = useAddProduct();
  const navigate = useNavigate();

  const newProductSubmit = (data) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/");
      },
    });
  };

  return (
    <>
      <div>
        {!isLoading && (
          <ProductForm
            categoryData={data}
            newProductSubmit={newProductSubmit}
          />
        )}
      </div>
    </>
  );
};

export default AddProduct;
