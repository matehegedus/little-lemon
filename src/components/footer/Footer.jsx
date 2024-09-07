import React from "react";

import "./Footer.css";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const location = useLocation();
  return (
    <footer>
      <img src="logo.svg"></img>
      <section>
        <h3>Doormat Navigation</h3>
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
      </section>
      <section>
        <h3>Contact</h3>
        <nav>
          <Link smooth to="">
            Chicago, Downtown street 67.
          </Link>
          <Link smooth to="">
            +44 885 655 999 77
          </Link>
          <Link to="">little-lemon@restaurant.com</Link>
        </nav>
      </section>
      <section>
        <h3> Social Media Links</h3>
        <nav>
          <Link smooth to="">
            Facebook
          </Link>
          <Link smooth to="">
            Instagram
          </Link>
          <Link to="">E-mail</Link>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
