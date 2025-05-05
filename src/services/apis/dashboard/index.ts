import { axiosInstance } from "@/services";
import axios from "axios";

export const dashboardService = {
  getDeviceKeyData: async (deviceId: string) => {
    try {
      const response = await axiosInstance.get(
        `/api/plugins/telemetry/DEVICE/${deviceId}/keys/timeseries`
      );
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data?.message);
      }
      throw error;
    }
  },
  getDeviceValueData: async (deviceId: string, params: string) => {
    try {
      const response = await axiosInstance.get(
        `/api/plugins/telemetry/DEVICE/${deviceId}/values/timeseries${params}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data?.message || "Login failed");
      }
      throw error;
    }
  },
};

export default dashboardService;
