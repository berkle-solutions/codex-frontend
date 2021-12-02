import axios from "axios";
import { retriveToken } from "./auth";

const apiService = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

apiService.interceptors.request.use(async (config) => {
  const token = retriveToken();

  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default apiService;
