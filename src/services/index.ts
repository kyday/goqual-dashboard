import authService from "@/services/apis/auth";
import { useAuthStore } from "@/store/authStore";
import { getCookie } from "@/utils/cookie";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,

  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401) {
      originalRequest._retry = true;

      try {
        const refreshToken = getCookie("refreshToken");
        if (!refreshToken) {
          throw new Error("No refresh token");
        }

        const res = await authService.refresh(refreshToken);
        const newAccessToken = res.data.token;
        useAuthStore.getState().setAccessToken(newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("토큰 갱신 실패", refreshError);
        useAuthStore.getState().setAccessToken(null);
      }
    }

    return Promise.reject(error);
  }
);
