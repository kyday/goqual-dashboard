import controlService from "@/services/apis/control";
import { formatQueryParams } from "@/utils/dashboard";
import { useMutation } from "@tanstack/react-query";

export const useMutationBulb = (deviceId: string) => {
  return useMutation({
    mutationFn: (brightness: number) => {
      const queryParams = formatQueryParams({ brightness });
      return controlService.controlBulb(deviceId, queryParams);
    },
  });
};
