import React, { useState, useEffect } from "react";
import axios from "axios";
import Name from "../components/dashboard/Name";
import Success from "../components/dashboard/Success";
import Weight from "../components/dashboard/Weight";
import Goal from "../components/dashboard/Goal";
import Radar from "../components/dashboard/Radar";
import Kpi from "../components/dashboard/Kpi";
import Category from "../components/dashboard/Category";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/user/12")
      .then((res) => setData(res.data.data));
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <Name name={data.userInfos.firstName} />
        <Success data={data.todayScore} />
      </div>
      <div className="dashboard__container">
        <div className="dashboard__container__graph">
          <Weight />
          <Goal />
          <Radar />
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
  );
};

export default Home;
