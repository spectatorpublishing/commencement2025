import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import MobileCard from "../components/MobileCard";




import {
    university_articles,
    ac_articles,
    audio_articles,
    sports_articles,
    opinion_articles,
    spectrum_articles,
  } from "../data/articles";
  
  const routeTitles = {
    "/university": "UNIVERSITY",
    "/arts": "A&C",
    "/audio": "AUDIO",
    "/sports": "SPORTS",
    "/opinion": "OPINION",
    "/spectrum": "SPECTRUM",
  };

const ArticleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap:30px;
`



const MobileOverlayPage = () => {
    const location = useLocation();
    const title = routeTitles[location.pathname] || "";
  
    const sectionMap = {
      "/university": university_articles,
      "/arts": ac_articles,
      "/audio": audio_articles,
      "/sports": sports_articles,
      "/opinion": opinion_articles,
      "/spectrum": spectrum_articles,
    };
  
    const articles = sectionMap[location.pathname] || [];
    console.log("here are the articles")
    console.log(articles);



  return (  
    <ArticleWrapper>
            <MobileCard></MobileCard>
            <MobileCard></MobileCard>
            <MobileCard></MobileCard>
            <MobileCard></MobileCard>
    </ArticleWrapper>

  );
};

export default MobileOverlayPage;
