import React, { useState, useEffect } from "react";
import Name from "../components/dashboard/Name";
import Goal from "../components/dashboard/Goal/Goal";
import RadarModule from "../components/dashboard/RadarModule";
import Kpi from "../components/dashboard/Kpi";
import Category from "../components/dashboard/Category";
import Loader from "../components/Loader";
import { getUserInformation } from "../services/useApi";
import DailyActivity from "../components/dashboard/DailyActivity/DailyActivity";

const Home = () => {
  const [userInformation, setUserInformation] = useState([]);
  const [loading, setLoading] = useState();
  useEffect(() => {
    setLoading(true);
    getUserInformation()
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          return setUserInformation(res.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!userInformation.userInfos || loading) {
    return <Loader src="main" />;
  }
  return userInformation.userInfos ? (
    <div className="dashboard">
      <div className="dashboard__header">
        <Name name={userInformation.userInfos.firstName} />
      </div>
      <div className="dashboard__container">
        <div className="dashboard__container__graph">
          <DailyActivity />
          <Goal />
          <RadarModule />
          <Kpi />
        </div>
        <div className="dashboard__container__category">
          <Category
            value={userInformation.keyData.calorieCount}
            unit="kCal"
            name="Calories"
            img="../img/icons/calories.png"
          />
          <Category
            value={userInformation.keyData.proteinCount}
            unit="g"
            name="Proteines"
            img="../img/icons/proteines.png"
          />
          <Category
            value={userInformation.keyData.carbohydrateCount}
            unit="g"
            name="Glucides"
            img="../img/icons/glucides.png"
          />
          <Category
            value={userInformation.keyData.lipidCount}
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
