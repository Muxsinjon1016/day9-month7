import { React } from "react";
import { useGetCategories } from "../../services/query/useGetCategories";
import { Categories } from "./components/categories";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { data } = useGetCategories();
  const navigate = useNavigate();

  const addCategory = () => {
    navigate("/new-category-form");
  };

  return (
    <>
      <Button
        onClick={addCategory}
        className={"mb-5 w-full py-3 text-2xl"}
        variant={"show"}
        children={"Create a new category"}
      />
      {data && data.length > 0 ? (
        data.map((category) => <Categories key={category.id} {...category} />)
      ) : (
        <>
          <p className="text-red-600 mt-24 text-5xl text-center font-bold">
            You have not any category!
          </p>
          <div>
            <Button
              className={
                "text-3xl font-semibold py-3 px-24 mt-32 mx-auto transition-all duration-500"
              }
              variant={"show"}
              children={"Add category"}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
