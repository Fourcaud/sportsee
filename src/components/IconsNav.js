import React from "react";
import PropTypes from "prop-types";
const IconsNav = ({ img, name }) => {
  return (
    <div className="iconNav">
      <img src={img} alt={name}></img>
    </div>
  );
};

export default IconsNav;

IconsNav.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
