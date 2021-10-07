import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="container1">
      <img src={props.image} className="cardimages"></img>
      <h3>{props.name}</h3>
      <p>{props.content}</p>
      <a href="https://www.computerhope.com/jargon/h/html.htm">Learn more</a>
    </div>
  );
};

export default Card;
