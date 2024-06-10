import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { typeCart } from "@/app/type.";

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

// const DeleteInCart = () => {
//   return useMutation({
//     mutationFn: (productId) => {
//       return client.delete(`/cart/${productId}`);
//     },
//   });
// };

export { SetInCartQuery, GetCartQuery, UpdateCartQuery };
