import React from "react";

import "./Main.css";
import FoodCard from "../foodCard/FoodCard";

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
          <div className="button">Reserve a Table</div>
        </section>

        <section className="section-img">
          <img src="restauranfood.jpg" width={372}></img>
        </section>
      </section>
      <section className="highlights-section">
        <h2>Specials</h2>
        <div className="food-container">
          <FoodCard
            title={"Greek salad"}
            price={12.99}
            imgSrc={"greek salad.jpg"}
            description={`
        The famous greek salad of crispy lettuce, peppers, olives and our
        chicago style feta cheese, garnished with crunchy garlic and rosemary
        croutons`}
          ></FoodCard>
          <FoodCard
            title={"Bruchetta"}
            price={5.99}
            imgSrc={"bruchetta.svg"}
            description={`
        Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.`}
          ></FoodCard>
          <FoodCard
            title={"Lemon Dessert"}
            price={5.0}
            imgSrc={"lemon dessert.jpg"}
            description={`
        This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined`}
          ></FoodCard>
        </div>
      </section>
    </main>
  );
};

export default Main;
