import { useQuery } from "@tanstack/react-query";
import client from "./client";

const GetProductsQuery = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => await client.get(`/products`),
  });
};

const GetProductQuery = (productId: string) => {
  const fetch = async () => await client.get(`/products/${productId}`);

  return useQuery({
    queryKey: ["product", { product: productId }],
    queryFn: fetch,
  });
};

export { GetProductsQuery, GetProductQuery };
