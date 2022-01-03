import React from "react";
import IconsNav from "./IconsNav";

const NavigatorVertical = () => {
  return (
    <div className="navigatorVertical">
      <div className="containerIconsNav">
        <IconsNav img="../img/icons/yoga.png" name="Yoga" />
        <IconsNav img="../img/icons/natation.png" name="Natation" />
        <IconsNav img="../img/icons/velo.png" name="Velo" />
        <IconsNav img="../img/icons/altere.png" name="Altere" />
      </div>
      <h2>Copiryght, SportSee 2020</h2>
    </div>
  );
};

export default NavigatorVertical;
