/*  eslint-disable @typescript-eslint/no-misused-promises */
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import "react-toastify/dist/ReactToastify.css";
// import { API_KEY, SERVER_API_URL } from "./constants";
// import { logout } from "../shared/components/authentication";

const axiosInstance = axios.create({
  // baseURL: `${SERVER_API_URL}`,
  headers: {
    "Content-Type": "application/json",
    // "X-Api-Key": API_KEY,
  },
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      axios.defaults.headers.common = {
        ...axios.defaults.headers.common,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // logout(); // Call the logout function
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
