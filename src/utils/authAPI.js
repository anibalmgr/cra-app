import { request } from "./api";

export async function fetchRegister(user) {
  const res = await request("register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return res;
}

export async function fetchLogin() {
  const res = await request("login");
  window.localStorage.setItem("AUTH_TOKEN", res.token);
  return res;
}

export async function validateLogin() {
  const res = await request("login");
  return res.token;
}

// References
//
// export async function sendLogin(payload: LoginRequest): Promise<User> {
//   try {
//     const response = await request("/auth/login", {
//       method: "POST",
//       body: JSON.stringify(payload),
//       headers: { "Content-type": "application/json" },
//       credentials: "include",
//     });
//     if (!response.ok) {
//       const errorResponse = (await response.json()) as APIError;
//       const error = { code: response.status, errors: errorResponse.errors };
//       throw error;
//     }
//     const data = await response.json();

//     return data;
//   } catch (err: any) {
//     const error = { code: err.code, errors: err.errors };
//     throw error;
//   }
// }
