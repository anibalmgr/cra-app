import { useQuery } from "react-query";
import { getToken } from "../utils/api";
import { validateLogin } from "../utils/authAPI";

export function useValidateAuth() {
  // This logic should happen in the backend, that has to be replaced for an API call

  const { data: APItoken } = useQuery("isAuth", validateLogin);
  const isAuth = getToken() === APItoken;
  return isAuth;
}
