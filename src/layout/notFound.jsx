import React from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-7xl font-bold text-center mt-10">Not found</div>
      <button
        onClick={() => navigate("/")}
        className="mt-4 mx-auto block py-4 px-7 rounded-12 bg-blue-800 hover:bg-blue-700 text-white text-2xl font-semibold"
      >
        To categories
      </button>
    </>
  );
};

export default NotFound;
