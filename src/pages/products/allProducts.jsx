import React from "react";
import { useGetAllProducts } from "../../services/query/useGetAllProducts";
import { RenderAllProducts } from "./components/renderAllProducts";
import Button from "../../components/ui/button";

export const AllProducts = () => {
  const { data } = useGetAllProducts();
  return (
    <>
      <div className="flex items-center gap-5 justify-evenly flex-wrap">
        {data && data.length > 0 ? (
          data.map((product) => (
            <RenderAllProducts key={product.id} {...product} />
          ))
        ) : (
          <div className="flex-col">
            <p className="text-red-600 mt-24 text-5xl text-center font-bold">
              You have not any product!
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default AllProducts;
