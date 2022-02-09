import React, { useEffect, useState } from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { getUserPerformance } from "../../services/useApi";
import Loader from "../Loader";

const RadarModule = () => {
  const [userPerformance, setUserPerformance] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    getUserPerformance()
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          return setUserPerformance(res.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (userPerformance.length === 0 || loading) {
    return <Loader src="cubeEmpty" />;
  }

  const newUserPerformance = userPerformance.data.map((session) => {
    let kind;

    switch (session.kind) {
      case 1:
        kind = "Cardio";
        break;
      case 2:
        kind = "Energie";
        break;
      case 3:
        kind = "Endurance";
        break;
      case 4:
        kind = "Force";
        break;
      case 5:
        kind = "Vitesse";
        break;
      default:
        kind = "Intensité";
    }
    return {
      ...session,
      kind,
    };
  });

  return (
    <div className="radar cubeRadar">
      <RadarChart
        outerRadius={70}
        width={258}
        height={263}
        data={newUserPerformance}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          stroke="white"
          tickLine={false}
          tick={{
            fontSize: 12,
            fontWeight: 500,
          }}
        />

        <Radar
          dataKey="value"
          stroke="#FF0101B2"
          fill="#FF0101B2"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
};

export default RadarModule;
