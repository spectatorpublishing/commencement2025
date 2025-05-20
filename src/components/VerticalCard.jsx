import React from "react";
import "./CardStyles.css";
import ArrowIcon from "./ArrowIcon";

const VerticalCard = ({ number, title, subtitle, image, link }) => {
  return (
    <div className="card-vertical">
      <div className="card-badge">
        <div className="card-circle" />
        <div className="card-number">{number}</div>
      </div>
      <img
        className="card-image-vertical"
        src={image}
        alt="vertical"
        style={{ aspectRatio: "1.135" }}
      />
      <h1 className="card-title-vertical">{title}</h1>
      <p className="card-subtitle-vertical">By {subtitle}</p>
      <div className="card-arrow">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <ArrowIcon />
        </a>
      </div>
    </div>
  );
};

export default VerticalCard;