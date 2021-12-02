import axios from "axios";
import { getToken } from "./auth";

const apiService = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

apiService.interceptors.request.use(async (config) => {
  const token = getToken();

  // if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default apiService;
