import React from "react";

/**
 * ArrowIcon
 * ----------
 * A simple arrow/chevron SVG turned into a reusable React component.
 *
 * Props
 *  • width  – pixel width of the SVG (default 125)
 *  • height – pixel height of the SVG (default 95)
 *  • stroke – stroke color (default "white")
 *  • className – any extra CSS classes to attach
 */
const ArrowIconMobile = ({
  width = 125,
  height = 95,
  stroke = "white",
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 125 95"
    fill="none"
    className={className}
  >
    <path
      d="M0.273438 44.8131H114.072M114.072 44.8131L67.1306 5.93457M114.072 44.8131L67.1306 90.0467"
      stroke={stroke}
      strokeWidth="13.3218"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowIconMobile;
