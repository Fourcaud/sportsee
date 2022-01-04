import React from "react";

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
