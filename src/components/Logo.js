import React from "react";

const Logo = (props) => {
  return (
    <div className="logo">
      <img src={props.img} alt="logo" />
    </div>
  );
};

export default Logo;
