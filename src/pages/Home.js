import React, { useState, useEffect } from "react";

import Name from "../components/dashboard/Name";
import Success from "../components/dashboard/Success";
import Weight from "../components/dashboard/Weight";
import Goal from "../components/dashboard/Goal";
import RadarModule from "../components/dashboard/RadarModule";
import Kpi from "../components/dashboard/Kpi";
import Category from "../components/dashboard/Category";
import { getUserInformation } from "../services/user";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUserInformation().then((res) => setData(res.data.data));
  }, []);

  return data.userInfos ? (
    <div className="dashboard">
      <div className="dashboard__header">
        <Name name={data?.userInfos?.firstName} />
        <Success data={data.todayScore} />
      </div>
      <div className="dashboard__container">
        <div className="dashboard__container__graph">
          <Weight />
          <Goal />
          <RadarModule />
          <Kpi />
        </div>
        <div className="dashboard__container__category">
          <Category
            value={data.keyData.calorieCount}
            unit="kCal"
            name="Calories"
            img="../img/icons/calories.png"
          />
          <Category
            value={data.keyData.proteinCount}
            unit="g"
            name="Proteines"
            img="../img/icons/proteines.png"
          />
          <Category
            value={data.keyData.carbohydrateCount}
            unit="g"
            name="Glucides"
            img="../img/icons/glucides.png"
          />
          <Category
            value={data.keyData.lipidCount}
            unit="g"
            name="Lipides"
            img="../img/icons/lipides.png"
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default Home;
