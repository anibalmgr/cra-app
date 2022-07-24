import axios from "axios";

export function deleteToken(name) {
  window.localStorage.removeItem(name);
}

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  xsrfCookieName: "access-token",
});

export function getUrl(request) {
  return `${process.env.REACT_APP_API_URL}/${request}`;
}
