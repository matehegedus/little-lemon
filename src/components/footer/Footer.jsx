import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <img src="logo.svg"></img>
      <section>
        <h3>Doormat Navigation</h3>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Menu</a>
          </li>
          <li>
            <a>Reservations</a>
          </li>
          <li>
            <a>Order Online</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </section>
      <section>
        <h3>Contact</h3>
        <ul>
          <li>
            <a>Address</a>
          </li>
          <li>
            <a>Phone Number</a>
          </li>
          <li>
            <a>E-mail</a>
          </li>
        </ul>
      </section>
      <section>
        <h3> Social Media Links</h3>
        <ul>
          <li>
            <a>Facebook</a>
          </li>
          <li>
            <a>Instagram</a>
          </li>
          <li>
            <a>LinkedIn</a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
