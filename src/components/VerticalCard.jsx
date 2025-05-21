import React from "react";
import "./CardStyles.css";
import ArrowIcon from "./ArrowIcon";

const VerticalCard = ({ number, title, subtitle, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="card-link-wrapper"
      style={{ textDecoration: "none", color: "inherit" }}
    >
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
          <ArrowIcon />
        </div>
      </div>
    </a>
  );
};

export default VerticalCard;
