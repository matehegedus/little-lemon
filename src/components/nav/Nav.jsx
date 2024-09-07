import React from "react";

import "./Nav.css";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  const location = useLocation();

  console.log("location :>> ", location);
  return (
    <>
      <nav>
        <Link
          className={`${
            location.pathname === "/home" && location.hash.length === 0
              ? "selected"
              : ""
          }`}
          to="/home"
        >
          Home
        </Link>
        <HashLink
          className={`${
            location.pathname === "/home" && location.hash === "#chicago"
              ? "selected"
              : ""
          }`}
          smooth
          to="/home#chicago"
        >
          About Us
        </HashLink>
        <HashLink
          className={`${
            location.pathname === "/home" && location.hash === "#specials"
              ? "selected"
              : ""
          }`}
          smooth
          to="/home#specials"
        >
          Menu
        </HashLink>
        <Link
          className={`${location.pathname === "/booking" ? "selected" : ""}`}
          to="/booking"
        >
          Reservations
        </Link>
      </nav>
    </>
  );
};

export default Nav;
