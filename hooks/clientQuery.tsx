import { useQuery } from "@tanstack/react-query";
import client from "./client";

// get data profile user
const GetProfileUserQuery = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => await client.get(`/client/profile`),
  });
};

export {
  GetProfileUserQuery,
};
