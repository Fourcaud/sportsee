import React from "react";
/**
 * [GoalToolTip description]
 *
 * @param   {[type]}  payload
 * @param   {[type]}  active
 *
 * @return  {[type]}           [return object]
 */
const GoalToolTip = ({ payload, active }) => {
  if (active && payload && payload.length) {
    return (
      <p className="tooltip__chartAverageSession">{`${payload[0].value}`}min</p>
    );
  } else {
    return null;
  }
};

export default GoalToolTip;
