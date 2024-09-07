import React from "react";

import "./Main.css";
import Specials from "../Specials/Specials";
import Chicago from "../chicago/Chicago";
import Testimonials from "../testimonials/Testimonials";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <section className="main-section">
        <section className="section-description">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link className="button" aria-label="On Click" to="/booking">
            Reserve a Table
          </Link>
        </section>

        <section className="section-img">
          <img alt="restaurantFood" src="restauranfood.jpg" width={372}></img>
        </section>
      </section>
      <Specials />
      <Testimonials />
      <Chicago></Chicago>
    </main>
  );
};

export default Main;
