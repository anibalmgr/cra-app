import { request } from "./api";

export async function fetchProducts() {
  const res = await request("products");
  return res;
}

export async function fetchProduct() {
  const res = await request("login");
  return res.JSON;
}

// export async function fetchProductImg(type) {
//   const imgTag = type.replace(/\s+/g, "").toLowerCase();
//   const res = await request(`images/${imgTag}`);
//   console.log(res);
//   return res.JSON;
// }
