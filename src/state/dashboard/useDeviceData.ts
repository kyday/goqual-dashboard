import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { DeviceDataResponse, DeviceKeyList } from "@/types/dashboard";
import { formatQueryParams } from "@/utils/dashboard";
import queryKeys from "@/state/queryKeys";
import dashboardService from "@/services/apis/dashboard";

export interface UseDeviceValueDataParams {
  keys?: string;
  startTs?: number;
  endTs?: number;
}

export const useDeviceKeyData = (deviceId: string) => {
  return useQuery({
    select: (data: DeviceKeyList) => data.data,
    queryKey: [...queryKeys.deviceKeyData(deviceId)],
    queryFn: () => {
      return dashboardService.getDeviceKeyData(deviceId);
    },
  });
};

export const useDeviceValueData = (
  deviceId: string,
  params: UseDeviceValueDataParams,
  options?: Omit<UseQueryOptions<DeviceDataResponse>, "queryKey" | "queryFn">
) => {
  const queryParams = formatQueryParams(params);

  return useQuery({
    queryKey: [...queryKeys.deviceValueData(deviceId), deviceId],
    queryFn: () => {
      return dashboardService.getDeviceValueData(deviceId, queryParams);
    },

    ...options,
  });
};
