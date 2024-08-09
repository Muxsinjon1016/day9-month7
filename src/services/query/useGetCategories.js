import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["getCategories"],
    queryFn: () => request.get("/categories").then((res) => res.data),
  });
};

export default useGetCategories;
