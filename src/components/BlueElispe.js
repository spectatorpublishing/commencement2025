import React from "react";

const BlueCirlceIcon = ({ letter, size = "clamp(75px, 5vw, 70px)" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 94 94"
    width={size}
    height={size}
    preserveAspectRatio="xMidYMid meet"
    style={{ maxWidth: "100%", height: "auto" }}
  >
    <circle cx="47" cy="47" r="47" fill="#0039A6" />
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="central"
      fill="#FFF"
      fontFamily="Arial"
      fontSize="67.873px"
      fontStyle="normal"
      fontWeight="700"
    >
      {letter}
    </text>
  </svg>
);

export default BlueCirlceIcon;

