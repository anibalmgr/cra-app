import { useMutation } from "react-query";
import { client } from "../api/api";

export function useLoginMutation(user) {
  return useMutation(
    (payload) => {
      return client.post("login", payload);
    },
    { onSuccess: ({ data }) => console.log(data) }
  );
}
