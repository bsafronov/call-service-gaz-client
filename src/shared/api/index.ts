import axios from "axios";

export const BASE_URL = "http://localhost:3000/api";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});
