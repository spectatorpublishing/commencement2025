import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import MobileCard from "../components/MobileCard";
import MobileNavBar from "../components/mobile_componenets/mobile_navbar";
import BackToTopButton from "../components/BackToTopButton";


import {
    university_articles,
    ac_articles,
    audio_articles,
    sports_articles,
    crossword_articles,
    spectrum_articles,
  } from "../data/articles";
  
  const routeTitles = {
    "/university": "UNIVERSITY",
    "/arts": "A&C",
    "/audio": "AUDIO",
    "/sports": "SPORTS",
    "/crosswords": "CROSSWORDS",
    "/spectrum": "SPECTRUM",
  };

const ArticleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap:30px;
`

const Spacer = styled.div`
    padding: 23px;
`

const CardLink = styled.a`
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: center;
`;


const MobileOverlayPage = () => {
    const location = useLocation();
    const title = routeTitles[location.pathname] || "";
  
    const sectionMap = {
      "/university": university_articles,
      "/arts": ac_articles,
      "/audio": audio_articles,
      "/sports": sports_articles,
      "/crosswords": crossword_articles,
      "/spectrum": spectrum_articles,
    };
  
    const articles = sectionMap[location.pathname] || [];
    console.log("here are the articles")
    console.log(articles);



  return (  
    <>
    <MobileNavBar></MobileNavBar>
    <Spacer/>
    <ArticleWrapper>
        {articles.map((article, index) => (
          <MobileCard
            number={index + 1}
            title={article.article_title}
            authorName={article.article_authors}
            image={article.image_url}
            url={article.article_link}
          />
           ))}
      </ArticleWrapper>
      
      <BackToTopButton />
    </>

  );
};

export default MobileOverlayPage;
