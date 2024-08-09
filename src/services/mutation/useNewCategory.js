import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useNewCategory = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: (data) =>
      request.post("/categories", data).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries(["getCategories"]);
    },
  });
};

export default useNewCategory;
