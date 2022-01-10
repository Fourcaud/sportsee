import React from "react";
import { PolarGrid, PolarAngleAxis, Radar, RadarChart } from "recharts";
const data = [
  {
    subject: "Intensité",
    A: 120,

    fullMark: 150,
  },
  {
    subject: "Vitesse",
    A: 98,

    fullMark: 150,
  },
  {
    subject: "Force",
    A: 86,

    fullMark: 150,
  },
  {
    subject: "Endurance",
    A: 99,

    fullMark: 150,
  },
  {
    subject: "Energie",
    A: 85,

    fullMark: 150,
  },
  {
    subject: "Cardio",
    A: 65,
    fullMark: 150,
  },
];

const RadarModule = () => {
  return (
    <div className="radar cube">
      <RadarChart outerRadius={70} width={258} height={263} data={data}>
        <PolarGrid radialLines={false} />

        <PolarAngleAxis
          dataKey="subject"
          domain={[0, 250]}
          dy={5}
          tickLine={false}
          stroke="white"
        />
        <Radar dataKey="A" fill="#FF0101B2" fillOpacity={0.7} />
      </RadarChart>
    </div>
  );
};

export default RadarModule;
