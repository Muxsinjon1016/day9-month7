import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCategoryProducts } from "../../../services/query/useCategoryProducts";
import { CategoryProductsCard } from "./categoryProductsCard";
import { Button } from "../../../components/ui/button";

export const CategoryProducts = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useCategoryProducts(id);

  return (
    <>
      <Button
        onClick={() => navigate("/add-new-product")}
        className={"mb-5 w-full py-3 text-2xl"}
        variant={"show"}
        children={"Add a new product"}
      />
      {data?.length > 0 ? (
        data.map((product) => (
          <CategoryProductsCard key={product.id} {...product} />
        ))
      ) : (
        <>
          <p className="text-red-600 mt-24 text-5xl text-center font-bold">
            You have not any product!
          </p>
        </>
      )}
    </>
  );
};

export default CategoryProducts;
