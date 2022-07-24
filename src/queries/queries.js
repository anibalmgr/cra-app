import { useMutation, useQuery } from "react-query";
import { client } from "../api/api";

export function useLoginMutation() {
  return useMutation(
    (payload) => {
      return client.post("login", payload);
    },
    {
      onSuccess: (res) => {
        return res.data;
      },
      onError: (err) => {
        return err.data;
      },
    }
  );
}

export function useRegisterMutation() {
  return useMutation((payload) => {
    return client.post("register", payload);
  });
}

export function useProducts() {
  return useQuery(
    "products",
    () => {
      return client.get("products");
    },
    {
      select: (res) => {
        return res.data;
      },
    }
  );
}

export function useProduct(id) {
  return useQuery(
    "product",
    () => {
      return client.get(`products/${id}`);
    },
    {
      select: (res) => {
        return res.data;
      },
    }
  );
}
