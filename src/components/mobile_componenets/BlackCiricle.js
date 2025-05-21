// BlackCircleIcon.jsx
import React from "react";

const BlackCircleIcon = ({
  width = 20,          // number → interpreted as “px”, or pass a string like "3rem"
  height = 40,
  fill = "black",
  stroke = "black",
  strokeWidth = 1.95388,
  ...rest              // className, style, onClick, etc.
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 75 74"
    fill="none"
    {...rest}
  >
    <circle
      cx="37.364"
      cy="36.9445"
      r="35.848"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export default BlackCircleIcon;
