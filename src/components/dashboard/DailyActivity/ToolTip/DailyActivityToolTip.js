import React from "react";
/**
 * [DailyActivityToolTip description]
 *
 * @param   {[type]}  payload
 * @param   {[type]}  active
 *
 * @return  {[type]}           [return object]
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
