import axios from "axios";
import { getToken } from "./auth";

const apiService = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://127.0.0.1:8000/api"
      : "https://codex-backend-tcc.herokuapp.com/api",
});

apiService.interceptors.request.use(async (config) => {
  const token = getToken();

  // if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default apiService;
