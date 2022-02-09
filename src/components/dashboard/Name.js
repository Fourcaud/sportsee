import React from "react";
import PropTypes from "prop-types";
const Name = (props) => {
  return (
    <>
      <h1>
        Bonjour <p> {props.name}</p>
      </h1>
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
    </>
  );
};

export default Name;

Name.propTypes = {
  name: PropTypes.string.isRequired,
};
