import React from "react";
import PropTypes from "prop-types";
const Loader = (props) => {
  return <div className={`loader ${props.src}`}></div>;
};

export default Loader;

Loader.propTypes = {
  src: PropTypes.string.isRequired,
};
