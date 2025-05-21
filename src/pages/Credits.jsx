import React from "react";
import "./Credits.css";
import Navbar from "../components/Navbar";
import { credits } from "../data/credits";
import biggerSubwayLines from "../images/biggerSubwayLines.png";

const Credits = () => {
  return (
    <div className="home-page">
      <div className="section editor-letter">
        <div className="image-behind-wrapper">
          <div className="white-box">
            <h2 className="editor-title">LETTER FROM THE EDITOR</h2>
            <p className="editor-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="editor-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="editor-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="editor-signatures">
              <div className="signature-block">
                <div className="signature-name">First Last</div>
                <div className="signature-title">Editor in Chief</div>
              </div>
              <div className="signature-block">
                <div className="signature-name">First Last</div>
                <div className="signature-title">Managing Editor</div>
              </div>
            </div>
          </div>
          <img
            src={biggerSubwayLines}
            alt="background"
            className="background-image"
          />
        </div>
      </div>

      <div className="section staff-credits">
        <div className="image-behind-wrapper">
          <div className="white-box">
            <h2 className="credits-title">Staff Who Made This Possible</h2>
            <div className="credits-flex">
              {Object.entries(credits).map(([section, members]) => (
                <div className="credit-column" key={section}>
                  <div className="credit-section">{section}</div>
                  {members.map((person, idx) => (
                    <div key={idx}>
                      {person.staff_name}, {person.title}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <img
            src={biggerSubwayLines}
            alt="background pattern"
            className="background-image"
            style={{ top: "240px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Credits;