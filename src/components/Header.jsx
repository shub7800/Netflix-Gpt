import React from "react";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div>
      <div
        className="absolute px-8 py-4 bg-gradient-to-b from-black to-transparent z-10"
      >
        <img className="w-45" src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Header;
