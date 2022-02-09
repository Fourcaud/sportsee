import React, { useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { getUserInformation } from "../../services/useApi";
import Loader from "../Loader";

const Kpi = () => {
  const [userInformation, setUserInformation] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    getUserInformation()
      .then((res) => {
        setLoading(false);
        setUserInformation(res.data.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  if (userInformation.length === 0 || loading) {
    return <Loader src="cubeEmpty" />;
  }

  let dailyScore = userInformation.score;
  const dailyData = [
    { name: "finished", value: dailyScore, fillColor: "#ff0101" },
    { name: "inProgress", value: 1 - dailyScore, fillColor: "transparent" },
  ];
  return (
    <div className="chart__scorePie cubeEmpty">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={160} height={160}>
          <Pie
            data={dailyData}
            dataKey="value"
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
            paddingAngle={5}
          >
            {dailyData.map((entry, index) => (
              <Cell
                key={`${index}`}
                fill={entry.fillColor}
                cornerRadius="50%"
                className="chart__pie"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <section className="chart__scorePie__legend">
        <span className="chart__scorePie__legend__percent">
          {dailyScore * 100}%
        </span>
        <span className="chart__scorePie__legend__details">
          de votre
          <br /> objectif
        </span>
      </section>
    </div>
  );
};

export default Kpi;
