import React from "react";

import "./FoodCard.css";

const FoodCard = ({ imgSrc, title, price, description }) => {
  return (
    <section className="food-card">
      <img alt="image-food" width={"100%"} height={150} src={imgSrc}></img>
      <section>
        <summary className="header">
          <h3 className="title">{title}</h3> <p className="price">${price}</p>
        </summary>
        <p>{description}</p>

        <section className="order-container">
          <h3>Order a delivery</h3>
          <img alt="icon-order" src="icon_order.svg"></img>
        </section>
      </section>
    </section>
  );
};

export default FoodCard;
