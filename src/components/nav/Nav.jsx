import React from "react";

import "./Nav.css";
import Specials from "../Specials/Specials";
import { Routes, Route, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  return (
    <>
      <nav>
        <Link to="/home">Home</Link>
        <HashLink smooth to="/home#chicago">
          About
        </HashLink>
        <HashLink smooth to="/home#specials">
          Menu
        </HashLink>
        <Link to="/booking">Reservations</Link>
        <Link to="/">Order Online</Link>
        <Link to="/">Login</Link>
      </nav>
    </>
  );
};

export default Nav;
