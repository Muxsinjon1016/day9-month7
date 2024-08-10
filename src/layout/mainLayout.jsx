import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { loadState } from "../config/storage";

export const MainLayout = () => {
  const user = loadState("user");

  if (!user) {
    return <Navigate replace to={"/login"} />;
  }

  return (
    <div className="flex bg-gray-200 min-h-screen">
      <div className="h-screen fixed w-[20%] bg-blue-700 p-10 rounded-r-2xl">
        <Link
          className="block text-white font-semibold text-xl mt-2 transition duration-500 border-r-4 border-transparent hover:border-white"
          to={"/"}
        >
          Categories
        </Link>
        <Link
          className="block text-white font-semibold text-xl mt-2 transition duration-500 border-r-4 border-transparent hover:border-white"
          to={"/all-products"}
        >
          All products
        </Link>
        <Link
          className="block text-white font-semibold text-xl mt-2 transition duration-500 border-r-4 border-transparent hover:border-white"
          to={"/new-category-form"}
        >
          Create category
        </Link>{" "}
        <Link
          className="block text-white font-semibold text-xl mt-2 transition duration-500 border-r-4 border-transparent hover:border-white"
          to={"/add-new-product"}
        >
          Create product
        </Link>
      </div>
      <div className="w-[80%] ml-auto p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
