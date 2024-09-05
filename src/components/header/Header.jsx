import React from "react";
import Nav from "../nav/Nav";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src="/logo.svg"></img>
      <Nav />
    </header>
  );
};

export default Header;
