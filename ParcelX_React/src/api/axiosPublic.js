import axios from "axios";

// Create a new instance of axios without interceptors
const axiosPublic = axios.create({
  baseURL: "https://system.ParcelX.com/api",
  withCredentials: true,
});
export const axiosOnly = axios.create({
  baseURL: "https://localhost:8000",
  withCredentials: true,
});
export default axiosPublic;
