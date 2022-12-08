import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8002/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
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