import { useMutation } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useAddProduct = () => {
  return useMutation({
    mutationFn: (data) =>
      request.post("/products", data).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries(["getProducts"]);
    },
  });
};

export default useAddProduct;
