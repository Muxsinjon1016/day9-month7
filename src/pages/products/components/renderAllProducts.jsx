import React from "react";
import Button from "../../../components/ui/button";
import { useDeleteSingleProduct } from "../../../services/mutation/useDeleteSingleProduct";

export const RenderAllProducts = ({ title, url, description, price, id }) => {
  const { mutate } = useDeleteSingleProduct();

  const deleteSingleProduct = () => {
    mutate(id);
  };

  return (
    <div className="bg-gray-400 w-[250px] rounded-12 overflow-hidden text-center">
      <div className="w-full bg-white overflow-hidden rounded-b-12">
        <img
          className="block w-[220px] h-[220px] mx-auto mt-3"
          src={url}
          alt="img"
        />
      </div>
      <div className="p-5">
        <div className="text-left">
          <h3 className="text-white font-semibold text-xl mb-2">{title}</h3>
          <p className="text-white">{description}</p>
          <p className="mt-1 text-blue-700 ml-5 font-bold text-base">{price}</p>
        </div>
        <div className="flex mt-5 items-center justify-evenly">
          <Button
            onClick={deleteSingleProduct}
            variant={"delete"}
            children={"Delete"}
          />
          <Button variant={"edit"} children={"Edit"} />
        </div>
      </div>
    </div>
  );
};

export default RenderAllProducts;
