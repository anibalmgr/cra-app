import { useQuery } from "react-query";
import { getToken } from "../utils/api";
import { validateLogin } from "../utils/authAPI";

export function useValidateAuth() {
  // This logic should happen in the backend, that has to be replaced for an API call

  const apiToken = useQuery("isAuth", validateLogin).data;
  const isAuth = getToken() === apiToken;
  console.log(getToken());
  console.log(apiToken);
  return isAuth;
}
