import axios from "axios";
import { retriveToken } from "./auth";

const apiService = axios.create({
  baseURL: "http://localhost:3000",
});

apiService.interceptors.request.use(async (config) => {
  const token = retriveToken();

  if (token) config.headers.Authorization = `Bearer ${token}`;
});

export default apiService;
