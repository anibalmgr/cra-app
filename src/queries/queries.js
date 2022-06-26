import { useMutation } from "react-query";
import { client } from "../api/api";

export function useLoginMutation() {
  return useMutation(
    (payload) => {
      return client.post("login", payload);
    },
    { onSuccess: ({ data }) => console.log(data) }
  );
}
