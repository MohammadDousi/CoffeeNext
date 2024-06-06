import { useQuery } from "@tanstack/react-query";
import api from "./configApi";

const GetProductsQuery = () => {
  const fetch = async () => await api.get(`/products`);

  return useQuery({ queryKey: ["products"], queryFn: fetch });
};

export { GetProductsQuery };
