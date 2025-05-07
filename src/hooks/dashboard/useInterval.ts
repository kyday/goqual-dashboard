import { get10MinutesAgo, getCurrentTime } from "@/utils/dashboard";
import { useEffect, useState } from "react";

export const useTimeRangeInterval = (interval: number = 8000) => {
  const [timeRange, setTimeRange] = useState({
    startTs: get10MinutesAgo(),
    endTs: getCurrentTime(),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRange({
        startTs: get10MinutesAgo(),
        endTs: getCurrentTime(),
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval]);

  return { timeRange };
};
