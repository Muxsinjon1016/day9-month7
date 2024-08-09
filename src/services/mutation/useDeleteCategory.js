import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useDeleteCategory = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: (id) =>
      request.delete(`/categories/${id}`).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries(["getCategories"]);
    },
  });
};

export default useDeleteCategory;
