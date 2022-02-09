import React from "react";
import PropTypes from "prop-types";

const Logo = (props) => {
  return (
    <div className="logo">
      <img src={props.img} alt="logo" />
    </div>
  );
};

export default Logo;

Logo.propTypes = {
  img: PropTypes.string.isRequired,
};
