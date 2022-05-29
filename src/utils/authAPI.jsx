// import { request } from "utils/api";

import { request } from "./api";

export async function sendLogin(payload) {
  try {
    const response = await request("mockUsers.json", {
      // method: "POST",
      // headers: { "Content-type": "application/json" },
    });
    if (!response.ok) {
      console.log(response);
      const errorResponse = await response.json();
      // throw errorResponse;
    }
    const token = response.JSON().body;
    console.log(token);
    // window.localStorage.setItem("userToken", JSON.stringify(token);
  } catch (err) {
    const error = err;
    throw error;
  }
}

export async function sendLogout() {
  try {
    const response = await request("auth/logout", {
      method: "POST",
    });
    if (!response.ok) {
      const errorResponse = await response.JSON();
      throw errorResponse;
    }
    const data = await response.json();
  } catch (err) {
    const error = err;
    throw error;
  }
}

export async function validateLogin() {
  try {
    const response = await request("mockUser", {
      method: "GET",
    });
    if (!response.ok) {
      const errorResponse = await response.JSON();
      throw errorResponse;
    }
    const data = await response.json();
  } catch (err) {
    const error = err;
    throw error;
  }
}
