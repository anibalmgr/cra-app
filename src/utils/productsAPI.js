import { request } from "./api";

export async function fetchProducts() {
  const res = await request("products");
  return res;
}

export async function fetchProduct(id) {
  // The api returns always the same data, but it should return the product info based on the serial number
  const res = await request(`products/${id}`);
  return res;
}
