import React, { useEffect, useState } from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { getUserPerformance } from "../../services/useApi";

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

  if (userPerformance.length !== 0 && !loading) {
    const uppercaseFormatter = (str) => {
      return (str + "").charAt(0).toLocaleUpperCase() + str.substr(1);
    };

    const formatKindOfData = (tickIndex) => {
      if (userPerformance.kind) {
        return uppercaseFormatter(userPerformance.kind[tickIndex]);
      }
    };
    return (
      <div className="radar cubeRadar">
        <RadarChart
          outerRadius={70}
          width={258}
          height={263}
          data={userPerformance.data}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tickLine={false}
            tick={{
              fontSize: 9,
              fontWeight: 500,
            }}
            tickFormatter={formatKindOfData}
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
  } else {
    return <div className="radar cube">hello</div>;
  }
};

export default RadarModule;
