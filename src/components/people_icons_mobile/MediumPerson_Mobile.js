import React from "react";

const MediumPerson = ({ width = "30%", height = "auto", fillColor = "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 421 473"
    fill="none"
    width={width}
    height={height}
    preserveAspectRatio="xMidYMid meet"
    style={{ maxWidth: "100%", height: "auto" ,  transform: "translateY(11px)"}}
  >
    <path
      d="M315.527 157.762C315.527 215.709 268.592 262.644 210.645 262.644C152.698 262.644 105.764 215.709 105.764 157.762L108.648 133.115L27.1031 92.2115L210.645 0.44043L394.188 92.2115V223.313H367.967V105.322L312.642 133.115L315.527 157.762ZM210.645 315.084C326.539 315.084 420.408 362.019 420.408 419.965V472.406H0.882812V419.965C0.882812 362.019 94.7515 315.084 210.645 315.084Z"
      fill={fillColor}
    />
  </svg>
);

export default MediumPerson;
