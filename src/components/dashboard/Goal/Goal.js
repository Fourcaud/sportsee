import React, { useEffect, useState } from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getUserAverage } from "../../../services/useApi";
import GoalToolTip from "./ToolTip/GoalToolTip";

const Goal = () => {
  const [userAverage, setUserAverage] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    getUserAverage()
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          return setUserAverage(res.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (userAverage.length !== 0 && !loading) {
    const sessions = userAverage.sessions.map((session) => {
      let day;

      switch (session.day) {
        case "1":
          day = "L";
          break;
        case "2":
          day = "M";
          break;
        case "3":
          day = "M";
          break;
        case "4":
          day = "J";
          break;
        case "5":
          day = "V";
          break;
        case "6":
          day = "S";
          break;
        default:
          day = "D";
      }
      return {
        ...session,
        day,
      };
    });

    return (
      <div className="chart__averageSession cubeGoal">
        <h2 className="chart__averageSession__title">
          Durée moyenne des
          <br />
          sessions
        </h2>
        <ResponsiveContainer height="100%" width="100%">
          <LineChart
            data={sessions}
            outerRadius="75%"
            margin={{ top: 0, right: 12, bottom: 24, left: 12 }}
          >
            <XAxis
              dataKey="day"
              stroke="rgba(255, 255, 255, 0.6)"
              axisLine={false}
              dy={10}
              tickLine={false}
              tickMargin={0}
            />
            <YAxis
              dataKey="sessionLength"
              domain={[0, "dataMax + 60"]}
              hide={true}
            />
            <Tooltip content={<GoalToolTip />} />
            <Line
              activeDot={{
                stroke: "rgba(255,255,255, 0.6)",
                strokeWidth: 2,
                r: 5,
              }}
              dataKey="sessionLength"
              dot={false}
              stroke="rgba(255, 255, 255, 0.6)"
              strokeWidth={1.5}
              type={"monotone"}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  } else {
    return <div className="chart__averageSession"></div>;
  }
};

export default Goal;
