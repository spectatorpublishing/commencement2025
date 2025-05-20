import React from "react";

const MobileCircleIcon = ({ number = 1, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 155 155"
    fill="none"
    className={className}
  >
    <circle cx="77.5108" cy="77.421" r="76.6905" fill="#EE352E" />
    <text
      x="50%"
      y="50%"
      dy="0.35em"
      textAnchor="middle"
      fill="#FFF"
      fontFamily="Arial"
      fontSize="120px"
      fontStyle="normal"
      fontWeight="700"
    >
      {number}
    </text>
  </svg>
);

export default MobileCircleIcon;
