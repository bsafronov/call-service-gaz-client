import axios from "axios";

export const BASE_URL =
  import.meta.env.VITE_SERVER_URL || "http://localhost:3000/api";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});
