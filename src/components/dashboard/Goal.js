import React from "react";
import { LineChart, Line, XAxis, LabelList, Tooltip } from "recharts";

const data = [
  {
    name: "A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: " B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const CustomizedLabel = (props) => {
  const { x, y, stroke, value } = props;

  return (
    <text x={x} y={y} dy={-8} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
};

const CustomizedAxisTick = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="middle" fill="#666">
        {payload.value}
      </text>
    </g>
  );
};

export default function Goal() {
  return (
    <LineChart
      width={253}
      height={268}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 10,
      }}
    >
      <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
      <Tooltip
        content={<CustomTooltip />}
        cursor={{ stroke: "rgba(255,255,255, 0.6)" }}
      />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        strokeWidth={2}
        dot={false}
        activeDot={{
          stroke: "rgba(255,255,255, 0.6)",
          strokeWidth: 10,
          r: 5,
        }}
      >
        <LabelList content={<CustomizedLabel />} />
      </Line>
    </LineChart>
  );
}
function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <span className="custom-tooltip--min">{`${payload[0].value} min`}</span>
    );
  }
  return null;
}
