import { ChartLineData } from "@/types/dashboard";
import { statusKeyColorMap, statusKeyLabelMap } from "@/utils/dashboard";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ChartLine = (props: {
  width?: number;
  height?: number;
  data: ChartLineData[];
}) => {
  const { width = 800, height = 300, data } = props;

  return (
    <div className="mt-4">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={width}
          height={height}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          {Object.keys(statusKeyLabelMap)
            .filter((key) => key !== "interval")
            .map((key) => {
              return (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={statusKeyColorMap[key]}
                  activeDot={{ r: 8 }}
                />
              );
            })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartLine;
