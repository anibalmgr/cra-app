import { request, getUrl } from "./api";
import axios from "axios";

export async function fetchRegister(user) {
  try {
    const res = await axios.post(getUrl("register"), user);
    return res.status;
  } catch (err) {
    throw err;
  }
}
