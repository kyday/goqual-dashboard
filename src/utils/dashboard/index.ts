import {
  ChartLineData,
  DeviceDataResponse,
  StatusKey,
} from "@/types/dashboard";
import dayjs from "dayjs";

export const statusKeyLabelMap = {
  wh40batt: "wh40batt",
  baromrelin: "baromrelin",
  soilad1: "soilad1",
  rainratein: "rainratein",
  interval: "interval",
};

export const statusKeyColorMap: { [key: string]: string } = {
  wh40batt: "#8884d8",
  baromrelin: "#82ca9d",
  soilad1: "#ffc658",
  rainratein: "#00bcd4",
  interval: "#ff7300",
};

export const getStatusKeyLabel = (key: StatusKey): string => {
  return statusKeyLabelMap[key];
};

/*
 * 상태 키는 wh40batt, baromrelin, soilad1, rainratein만 사용
 */
export const getFilteredKeys = (deviceList: string[]) => {
  const targetKeys = [
    "wh40batt",
    "baromrelin",
    "soilad1",
    "rainratein",
    "interval",
  ];
  return deviceList.filter((key) => targetKeys.includes(key)).join(",");
};

export const formatQueryParams = (params: object): string => {
  const queryParams = Object.entries(params)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return queryParams ? `?${queryParams}` : "";
};

export const formatDate = (timestamp: number) => {
  return dayjs(timestamp).format("YYYY-MM-DD HH:mm:ss");
};

//10분전
export const get10MinutesAgo = () => {
  return dayjs().subtract(10, "minute").valueOf();
};

//현재 시간
export const getCurrentTime = () => {
  return dayjs().valueOf();
};

export const convertToChartData = (
  deviceValueData: DeviceDataResponse
): ChartLineData[] => {
  if (!deviceValueData) return [];

  const allTsSet = new Set<number>();
  Object.values(deviceValueData).forEach((arr) => {
    arr.forEach((item) => allTsSet.add(item.ts));
  });

  const allTs = Array.from(allTsSet).sort((a, b) => a - b);

  return allTs.map((ts) => {
    const entry: ChartLineData = {
      name: dayjs(ts as number).format("HH:mm:ss"),
    };
    for (const key in deviceValueData) {
      const found = deviceValueData[key].find((item) => item.ts === ts);
      entry[key] = found ? Number(found.value) : null;
    }
    return entry;
  });
};
