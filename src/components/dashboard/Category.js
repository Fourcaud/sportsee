import React from "react";
import PropTypes from "prop-types";
const Category = (props) => {
  return (
    <div>
      <>
        <img src={props.img} alt={props.name}></img>
      </>

      <span className="dashboard__container__category__div">
        <h3>
          {props.value}
          {props.unit}
        </h3>
        <p>{props.name}</p>
      </span>
    </div>
  );
};

export default Category;

Category.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
