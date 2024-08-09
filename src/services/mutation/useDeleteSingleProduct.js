import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useDeleteSingleProduct = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: (id) =>
      request.delete(`/products/${id}`).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries(["getProducts"]);
    },
  });
};

export default useDeleteSingleProduct;
