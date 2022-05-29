import { request } from "./api";

export async function fetchLogin() {
  const res = await request("login");
  window.localStorage.setItem("AUTH_TOKEN", res.token);
  return res;
}

export async function validateLogin() {
  const res = await request("login");
  return res.token;
}
