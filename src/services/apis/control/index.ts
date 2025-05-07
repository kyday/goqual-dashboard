import { axiosInstance } from "@/services";
import axios from "axios";

export const controlService = {
  controlBulb: async (deviceId: string, params: string) => {
    const [key, value] = params.replace("?", "").split("=");
    try {
      const response = await axiosInstance.post(
        `/api/plugins/telemetry/DEVICE/${deviceId}/SERVER_SCOPE${params}`,
        { [key]: Number(value) }
      );
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data?.message);
      }
      throw error;
    }
  },
};

export default controlService;
