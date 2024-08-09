import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useCategoryProducts = (id) => {
  return useQuery({
    queryKey: ["categoryProducts", id],
    queryFn: () =>
      request
        .get("/products", {
          params: {
            categoryId: id,
          },
        })
        .then((res) => res.data),
  });
};

export default useCategoryProducts;
