import { Card } from "@/components/common/Card/Card";
import {
  useDeviceKeyData,
  useDeviceValueData,
} from "@/state/dashboard/useDeviceData";
import {
  convertToChartData,
  formatDate,
  getFilteredKeys,
  getStatusKeyLabel,
  statusKeyLabelMap,
} from "@/utils/dashboard";
import { StatusKey } from "@/types/dashboard";

import React from "react";
import { useAuthStore } from "@/store/authStore";
import { CCardText } from "@coreui/react";
import ChartLine from "@/components/dashboard/Chart/LineChart/LineChart";
import { useTimeRangeInterval } from "@/hooks/dashboard/useInterval";

const Dashboard: React.FC = () => {
  const store = useAuthStore((state) => state.accessToken);

  const { timeRange } = useTimeRangeInterval();

  const { data: deviceKeyData } = useDeviceKeyData(
    import.meta.env.VITE_DEVICE_ID
  );

  const filteredKeys = getFilteredKeys(deviceKeyData ?? []);

  const { data: deviceValueData } = useDeviceValueData(
    import.meta.env.VITE_DEVICE_ID,
    {
      keys: filteredKeys,
      startTs: timeRange.startTs,
      endTs: timeRange.endTs,
    },
    {
      enabled: !!deviceKeyData,
      refetchInterval: 8000,
    }
  );

  return (
    <div className="flex flex-col gap-4">
      <h5 className="text-2xl font-bold">기기 상태 조회 대시보드</h5>

      <div className="flex flex-nowrap gap-4">
        {Object.entries(deviceValueData ?? {}).map(([key, value]) => {
          const lastValue = value[value.length - 1];
          return (
            <Card
              key={key}
              className="w-1/4"
              header={
                getStatusKeyLabel(key as StatusKey) +
                (key.includes(statusKeyLabelMap.interval) && "(변경 간격)")
              }
              title={lastValue?.value}
            >
              <CCardText className="text-nowrap">
                {lastValue ? (
                  <span>{formatDate(lastValue.ts)}</span>
                ) : (
                  "정보 없음"
                )}
              </CCardText>
            </Card>
          );
        })}
      </div>

      <ChartLine data={convertToChartData(deviceValueData ?? {})} />
    </div>
  );
};

export default Dashboard;
