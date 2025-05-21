import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import subwayLines from "../images/subwayLines.png";
import specLogo from "../images/specLogo.png";
import "./OverlayPage.css";
import "../components/CardStyles.css";
import VerticalCard from "../components/VerticalCard";
import HorizontalCard from "../components/HorizontalCard";
import BackToTopButton from "../components/BackToTopButton";

import {
  university_articles,
  ac_articles,
  audio_articles,
  sports_articles,
  crossword_articles,
  spectrum_articles,
  opinion_articles
} from "../data/articles";

const routeTitles = {
  "/university": "UNIVERSITY",
  "/arts": "A&C",
  "/audio": "AUDIO",
  "/sports": "SPORTS",
  "/crosswords": "CROSSWORDS",
  "/spectrum": "SPECTRUM",
  "/opinion": "OPINION"
};

const OverlayPage = () => {
  const location = useLocation();
  const title = routeTitles[location.pathname] || "";

  const sectionMap = {
    "/university": university_articles,
    "/arts": ac_articles,
    "/audio": audio_articles,
    "/sports": sports_articles,
    "/crosswords": crossword_articles,
    "/spectrum": spectrum_articles,
    "/opinion": opinion_articles
  };

  const articles = sectionMap[location.pathname] || [];

  const cardGroups = [];
  for (let i = 0; i < articles.length; i += 3) {
    const verticalCards = articles.slice(i, i + 2);
    const horizontalCard = articles[i + 2];

    cardGroups.push(
      <div key={i} className="card-group">
        <div className="vertical-cards">
          {verticalCards.map((item, idx) => (
            <VerticalCard
              key={idx}
              number={i + idx + 1}
              image={item.image_url}
              title={item.article_title}
              subtitle={item.article_authors}
              link={item.article_link}
            />
          ))}
        </div>
        {horizontalCard && (
          <div className="horizontal-card-wrapper desktop-only">
            <HorizontalCard
              number={i + 3}
              image={horizontalCard.image_url}
              title={horizontalCard.article_title}
              subtitle={horizontalCard.article_authors}
              link={horizontalCard.article_link}
            />
          </div>
        )}
        {horizontalCard && (
          <div className="vertical-cards mobile-only">
            <VerticalCard
              number={i + 3}
              image={horizontalCard.image_url}
              title={horizontalCard.article_title}
              subtitle={horizontalCard.article_authors}
              link={horizontalCard.article_link}
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="overlay-full-page">
      <a
        className="spec-logo-link"
        href="https://www.columbiaspectator.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={specLogo} alt="Spec Logo" className="spec-logo" />
      </a>

      <Navbar />

      <div className="subway-container">
        <img src={subwayLines} alt="subway lines" className="subway-overlay" />
        <div className="yellow-oval">
          <h1 className="oval-title">{title}</h1>
        </div>
      </div>

      <div className="card-layout">{cardGroups}</div>
      <BackToTopButton />
    </div>
  );
};

export default OverlayPage;