import React from "react";

const IconsNav = (props) => {
  return (
    <div className="iconNav">
      <img src={props.img} alt={props.name}></img>
    </div>
  );
};

export default IconsNav;
