import { axiosInstance } from "@/services";
import axios from "axios";

export const authService = {
  login: async (formData: FormData) => {
    try {
      const response = await axiosInstance.post("/api/auth/login", formData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data?.message || "Login failed");
      }
      throw error;
    }
  },
  refresh: async (refreshToken: string) => {
    const response = await axiosInstance.post("/api/auth/token", {
      refreshToken,
    });
    return response.data;
  },
};

export default authService;
