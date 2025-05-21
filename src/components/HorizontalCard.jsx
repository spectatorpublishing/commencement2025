import React from "react";
import "./CardStyles.css";
import ArrowIcon from "./ArrowIcon";

const HorizontalCard = ({ number, title, subtitle, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="card-link-wrapper"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="card-horizontal">
        <div className="card-badge">
          <div className="card-circle" />
          <div className="card-number">{number}</div>
        </div>

        <img
          className="card-image-horizontal"
          src={image}
          alt={title}
          style={{ aspectRatio: "1.741", objectFit: "cover" }}
        />

        <div className="card-content-horizontal">
          <h1 className="card-title-horizontal">{title}</h1>
          <p className="card-subtitle-horizontal">By {subtitle}</p>
        </div>

        <div className="card-arrow">
          <ArrowIcon />
        </div>
      </div>
    </a>
  );
};

export default HorizontalCard;
