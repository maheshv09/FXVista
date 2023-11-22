// CurrencyChart.js
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CurrencyChart = ({ data, currencyName }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip
          formatter={(value) => [
            value,
            `Conversion Rate for 1 USD to ${currencyName}`,
          ]}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke="rgb(102,195,172)"
          strokeWidth={2}
          name={`Conversion Rate for 1 USD to ${currencyName}`}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CurrencyChart;
