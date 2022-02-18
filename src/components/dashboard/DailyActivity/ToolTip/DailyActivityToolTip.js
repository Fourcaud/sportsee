import React from "react";
/**
 * [DailyActivityToolTip description]
 *
 * @param   {[type]}  payload  [payload description]
 * @param   {[type]}  active   [active description]
 *
 * @return  {[type]}           [return description]
 */
const DailyActivityToolTip = ({ payload, active }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip__dailyActivity">
        <p>{`${payload[0].value}`}kg</p>
        <p>{`${payload[1].value}`}Kcal</p>
      </div>
    );
  } else {
    return null;
  }
};

export default DailyActivityToolTip;
