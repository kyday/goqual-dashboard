export type StatusKey = "wh40batt" | "baromrelin" | "soilad1" | "rainratein";

export interface DeviceDataType {
  ts: number;
  value: string;
}

export interface DeviceKeyList {
  data: string[];
}

export interface DeviceDataResponse {
  [key: string]: DeviceDataType[];
}

export interface ChartLineData {
  [key: string]: number | string | null;
  name: string | null;
}
