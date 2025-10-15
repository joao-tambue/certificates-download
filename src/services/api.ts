import axios from "axios";

export const api = axios.create({
  baseURL: "https://certificate-tx4s.onrender.com",
});