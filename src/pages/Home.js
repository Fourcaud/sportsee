import React from "react";
import Name from "../components/dashboard/Name";
import Success from "../components/dashboard/Success";
import Weight from "../components/dashboard/Weight";
import Goal from "../components/dashboard/Goal";
import Radar from "../components/dashboard/Radar";
import Kpi from "../components/dashboard/Kpi";
import Category from "../components/dashboard/Category";

const Home = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <Name name="Thomas" />
        <Success data="woaow" />
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
            value="1930kCal"
            name="Calories"
            img="../img/icons/calories.png"
          />
          <Category
            value="155g"
            name="Proteines"
            img="../img/icons/proteines.png"
          />
          <Category
            value="290g"
            name="Glucides"
            img="../img/icons/glucides.png"
          />
          <Category value="50g" name="Lipides" img="../img/icons/lipides.png" />
        </div>
      </div>
    </div>
  );
};

export default Home;
