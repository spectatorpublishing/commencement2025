// src/pages/MobileOverlayPage.jsx
import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import MobileCard from "../components/MobileCard";

// Data Maps
const routeTitles = {
  "/university": "UNIVERSITY",
  "/arts": "A&C",
  "/audio": "AUDIO",
  "/sports": "SPORTS",
  "/opinion": "OPINION",
  "/spectrum": "SPECTRUM",
};

const sectionMap = {
  "/university": require("../data/articles").university_articles,
  "/arts": require("../data/articles").ac_articles,
  "/audio": require("../data/articles").audio_articles,
  "/sports": require("../data/articles").sports_articles,
  "/opinion": require("../data/articles").opinion_articles,
  "/spectrum": require("../data/articles").spectrum_articles,
};

// Styled Components
const Header = styled.div`
  position: relative;
  width: 100%;
  height: 160px;
  overflow: visible; /* Changed to visible to show full lines */
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

const LineImg = styled.img`
  padding-top:5px;
  position: absolute;
  top: ${p => p.top}px;
  left: 0;
  width: 100%;
  height: auto;
  pointer-events: none;
  user-select: none;
  opacity: 0.85;
`;

const Title = styled.div`
  display: inline-flex;
  padding: 10px 36px;
  justify-content: center;
  align-items: center;
  border-radius: 36px;
  background: #FCCC0A;

  
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 158px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  z-index: 10;
  box-shadow: 0 3px 8px rgba(0,0,0,0.12);
  text-transform: uppercase;
  white-space: nowrap;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    /* You may want to scale down for mobile: */
    font-size: 3rem;
    padding: 8px 28px;
    border-radius: 28px;
  }
`;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 16px;
  margin-top: 8px;
`;

// Component
export default function MobileOverlayPage() {
  const pathname = useLocation().pathname;
  const title = routeTitles[pathname] || "";
  const articles = sectionMap[pathname] || [];

  return (
    <>
      <Header>
        {/* Background waves - now fully visible */}
        <LineImg src={`${process.env.PUBLIC_URL}/images/Vector10.svg`} top={5} alt="Yellow wave" />
        <LineImg src={`${process.env.PUBLIC_URL}/images/Vector13.svg`} top={25} alt="Blue wave" />
        <LineImg src={`${process.env.PUBLIC_URL}/images/Vector12.svg`} top={45} alt="Red wave" />
        <LineImg src={`${process.env.PUBLIC_URL}/images/Vector11.svg`} top={65} alt="Green wave" />

        <Title>{title}</Title>
      </Header>

      <ArticleWrapper>
        {articles.map(a => (
          <MobileCard
            key={a.id}
            title={a.title}
            summary={a.summary}
            img={a.img}
            link={a.link}
          />
        ))}
      </ArticleWrapper>
    </>
  );
}
