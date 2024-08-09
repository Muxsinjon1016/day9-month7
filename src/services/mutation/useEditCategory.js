import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useEditCategory = (id) => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: (data) =>
      request.put(`/categories/${id}`, data).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries(["getCategories"]);
    },
  });
};

export default useEditCategory;
