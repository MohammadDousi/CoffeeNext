import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";

const SetInCartQuery = () => {
  return useMutation({
    mutationFn: (productId: string) => {
      return client.post(`/cart`, {
        productId: productId,
        // defult counter is 1
      });
    },
  });
};

const GetCartQuery = () => {
  const fetch = async () => await client.get(`/cart`);

  return useQuery({
    queryKey: ["cart"],
    queryFn: fetch,
    staleTime: 0,
    gcTime: 0,
  });
};

const UpdateCartQuery = () => {
  return useMutation({
    mutationFn: (data: { cartId: string; counter: number }) => {
      return client.put(`/cart/update/${data.cartId}`, {
        counter: data.counter,
      });
    },
  });
};

const DeleteCartQuery = () => {
  return useMutation({
    mutationFn: (cartId: string) => {
      return client.delete(`/cart/${cartId}`);
    },
  });
};

export { SetInCartQuery, GetCartQuery, UpdateCartQuery, DeleteCartQuery };
