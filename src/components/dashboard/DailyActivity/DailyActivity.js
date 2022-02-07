import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { getUserActivity } from "../../../services/useApi";
import { ReactComponent as Dot } from "./dot.svg";
import DailyActivityToolTip from "./ToolTip/DailyActivityToolTip";

const DailyActivity = () => {
  const [userActivity, setUserActivity] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    getUserActivity()
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          return setUserActivity(res.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(userActivity);
  if (userActivity.length !== 0 && !loading) {
    const sessions = userActivity.sessions.map((session) => {
      const date = new Date(session.day);

      return {
        ...session,
        day: date.getDate(),
      };
    });

    return (
      <div className="chart__dailyActivity cubeDailyActivity">
        <header className="chart__header">
          <h3 className="chart__header__title">Activité quotidienne</h3>
          <section className="chart__header__section">
            <span className="chart__header__section__item">
              <Dot style={{ padding: "0px 1px" }} fill="#282D30" />
              Poids (kg)
            </span>
            <span className="chart__header__section__item">
              <Dot style={{ padding: "0px 1px" }} fill="#E60000" />
              Calories brûlées (kCal)
            </span>
          </section>
        </header>

        <ResponsiveContainer width="100%" height="80%">
          <BarChart
            data={sessions}
            margin={{ top: 0, right: 48, bottom: 32, left: 48 }}
            barGap={8}
            barCategoryGap="35%"
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#DEDEDE"
            />
            <XAxis
              dataKey="day"
              dy={16}
              padding={{ left: -48, right: -48 }}
              stroke="#9B9EAC"
              tick={{ fontSize: 12, fontWeight: 400 }}
              tickLine={false}
              className="labelXAxis"
            />
            <YAxis
              allowDecimals={false}
              axisLine={false}
              dataKey="kilogram"
              domain={["dataMin - 1", "dataMax + 2"]}
              dx={48}
              orientation="right"
              stroke="#9B9EAC"
              tickLine={false}
              yAxisId="kg"
            />
            <YAxis
              dataKey="calories"
              domain={[0, "dataMax + 50"]}
              hide={true}
              yAxisId="cal"
            />
            <Tooltip
              content={<DailyActivityToolTip />}
              cursor={{
                fill: "rgba(0, 0, 0, 0.1)",
              }}
            />
            <Bar
              dataKey="kilogram"
              fill="#282D30"
              yAxisId="kg"
              radius={[50, 50, 0, 0]}
              maxBarSize={8}
            />
            <Bar
              dataKey="calories"
              fill="#E60000"
              yAxisId="cal"
              radius={[50, 50, 0, 0]}
              maxBarSize={8}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  } else {
    return <div className="chart__dailyActivity cubeDailyActivity"></div>;
  }
};
export default DailyActivity;
