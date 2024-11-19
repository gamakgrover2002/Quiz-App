import React from "react";
import Logo from "../assets/logo.jpg";

const Header: React.FC = () => {
  return (
    <header>
      <img src={Logo} alt="logo" />
    </header>
  );
};

export default Header;
