import React from "react";

const IconsNav = ({ img, name }) => {
  return (
    <div className="iconNav">
      <img src={img} alt={name}></img>
    </div>
  );
};

export default IconsNav;
