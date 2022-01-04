import React from "react";

const Category = (props) => {
  return (
    <div>
      <>
        <img src={props.img} alt={props.name}></img>
      </>

      <span className="dashboard__container__category__div">
        <h3>{props.value}</h3>
        <p>{props.name}</p>
      </span>
    </div>
  );
};

export default Category;
