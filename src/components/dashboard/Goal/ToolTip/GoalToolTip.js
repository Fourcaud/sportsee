import React from "react";

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
