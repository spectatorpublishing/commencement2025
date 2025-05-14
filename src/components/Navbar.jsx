import React, { useRef, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./navbar.css";

const sections = [
  { name: "Home", x: 510.37, path: "/" },
  { name: "University", x: 728, path: "/university" },
  { name: "A&C", x: 861.69, path: "/arts" },
  { name: "Audio", x: 984.7, path: "/audio" },
  { name: "Sports", x: 1131.76, path: "/sports" },
  { name: "Opinion", x: 1308.86, path: "/opinion" },
  { name: "Spectrum", x: 1520.84, path: "/spectrum" }
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathRef = useRef(null);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      const maxX = 1726;
      const calculated = sections.map((s) => {
        const clampedX = Math.min(Math.max(s.x, 0), maxX);
        let bestPoint = null;
        let bestDist = Infinity;
        for (let i = 0; i <= pathLength; i++) {
          const point = pathRef.current.getPointAtLength(i);
          const dist = Math.abs(point.x - clampedX);
          if (dist < bestDist) {
            bestDist = dist;
            bestPoint = point;
          }
        }
        return { ...s, cx: bestPoint.x, cy: bestPoint.y };
      });
      setPositions(calculated);
    }
  }, []);

  return (
    <div className="nav-container">
      <svg
        className="nav-svg"
        viewBox="0 0 1726 184"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d="M1734.03 96.5071C1734.03 96.5071 1668.45 159.613 1566.51 175.288C1371.79 205.229 1409.16 35.3108 1195.57 38.8842C1058.75 41.1732 1035.74 99.1299 899.083 102.359C740.131 106.116 -10.0002 5.82861 -10.0002 5.82861"
          stroke="white"
          strokeWidth="10"
        />

        {positions.map((section, i) => (
          <g
            key={i}
            onClick={() => navigate(section.path)}
            className="nav-button"
            style={{ cursor: "pointer" }}
          >
            <circle cx={section.cx} cy={section.cy} r="12" fill="black" />
            <text
              x={section.cx}
              y={section.cy + 30}
              textAnchor="middle"
              className={`nav-label ${location.pathname === section.path ? "selected" : ""}`}
            >
              {section.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default Navbar;