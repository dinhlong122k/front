import axios from "axios";
import { api_login } from "../api/client";

const axiosClient = axios.create({
  baseURL: api_login,
  headers: {
    "Content-Type": "application/json",
  },
});
axiosClient.interceptors.request.use((request) => {
  const accessToken = localStorage.getItem('accessToken');
  const accessHeader = `Bearer ${accessToken}`;
  if (request.headers) {
    request.headers["Authorization"] = accessHeader;
  }
  return request;
});
export default axiosClient;