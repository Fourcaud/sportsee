import React from "react";
import { NavLink } from "react-router-dom";

const Navigator = () => {
  return (
    <div className="navigation">
      <NavLink to="/" exact>
        Accueil
      </NavLink>
      <NavLink to="/profile" exact>
        Profil
      </NavLink>
      <NavLink to="/setting" exact>
        Réglage
      </NavLink>
      <NavLink to="/community" exact>
        Communauté
      </NavLink>
    </div>
  );
};

export default Navigator;
