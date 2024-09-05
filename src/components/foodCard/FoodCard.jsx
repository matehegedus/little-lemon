import React from "react";

import "./FoodCard.css";

const FoodCard = ({ imgSrc, title, price, description }) => {
  return (
    <div className="food-card">
      <img width={"100%"} height={150} src={imgSrc}></img>
      <section>
        <div className="header">
          <h3 className="title">{title}</h3> <p className="price">${price}</p>
        </div>
        <p>{description}</p>

        <div className="order-container">
          <h3>Order a delivery</h3>
          <img src="icon_order.svg"></img>
        </div>
      </section>
    </div>
  );
};

export default FoodCard;
