import React from "react";
import FoodCard from "../foodCard/FoodCard";

const Specials = () => {
  return (
    <article id="specials" className="highlights-section">
      <h2>Specials</h2>
      <section className="food-container">
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
      </section>
    </article>
  );
};

export default Specials;
