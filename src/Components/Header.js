import React from "react";
import Logo from "../images/logoNetflix.png";

const Header = () => {
  return (
    <div className="header-container">
      <img className="header-img" src={Logo} alt="Logo Netflix" />
    </div>
  );
};

export default Header;
