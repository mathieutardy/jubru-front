import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PositiveAndNegativeBarChart = ({ data }) => {
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
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="ticker" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value_change" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PositiveAndNegativeBarChart;
