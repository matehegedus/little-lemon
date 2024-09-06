import React from "react";

import "./Main.css";
import Specials from "../Specials/Specials";
import Chicago from "../chicago/Chicago";
import Testimonials from "../testimonials/Testimonials";

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
          <div className="button" aria-label="On Click">
            Reserve a Table
          </div>
        </section>

        <section className="section-img">
          <img src="restauranfood.jpg" width={372}></img>
        </section>
      </section>
      <Specials />
      <Testimonials />
      <Chicago></Chicago>
    </main>
  );
};

export default Main;
