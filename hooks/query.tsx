import { useQuery } from "@tanstack/react-query";
import client from "./client";

const GetProductsQuery = () => {
  const fetch = async () => await client.get(`/products`);

  return useQuery({ queryKey: ["products"], queryFn: fetch });
};

export { GetProductsQuery };
