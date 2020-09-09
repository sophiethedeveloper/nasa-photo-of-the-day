import React from "react";
import "./card.css";

const NasaCard = (props) => {

    const { title, photo, date, description, credit } = props
  return (
    <div className="container">
      <div className="nasa-card">
        <h2 className="title">{title}</h2>
        <img
          className="nasa-image"
          alt="The Universe"
          src={photo}
        />
        <p>{description}</p>
        <p className="date">{date}</p>
        <p className="credit">{credit}</p>
      </div>
    </div>
  );
};

export default NasaCard;
