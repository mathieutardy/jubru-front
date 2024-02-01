import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useTheme } from "@mui/material/styles";

const PositiveAndNegativeBarChart = ({ data }) => {
  const theme = useTheme();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="ticker" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value_change">
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                entry.value_change > 0
                  ? theme.palette.icon.green
                  : theme.palette.icon.red
              }
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PositiveAndNegativeBarChart;
