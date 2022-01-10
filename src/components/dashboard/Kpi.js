import React from "react";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";
const data = [
  {
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
];

const Kpi = () => {
  return (
    <div className="Kpi cube">
      <RadialBarChart
        width={258}
        height={263}
        innerRadius="80%"
        outerRadius="85%"
        data={data}
        startAngle={200}
        endAngle={100}
      >
        <RadialBar
          minAngle={15}
          label={{ fill: "#666", position: "insideStart" }}
          background
          clockWise={true}
          dataKey="uv"
        />

        <Tooltip />
      </RadialBarChart>
    </div>
  );
};

export default Kpi;
