// components/BarGraph.js
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const BarGraph = ({ data }) => {
  return (
    <div>
      <h3>Bar Graph</h3>
      <BarChart width={400} height={300} data={data}>
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" barGap={0.3} />
        {/* Adjust the barGap value to increase or decrease the gap between bars */}
      </BarChart>
    </div>
  );
};

export default BarGraph;
