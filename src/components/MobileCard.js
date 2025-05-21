import React from "react";
import styled from "styled-components";
import MobileCricleIcon from "./MobileCricleIcon";
import TempCard from "../images/a15785f11af6bf61c91dddb3a2da7b7e64554cc3.jpg";
import ArrowIconMobile from "../components/ArrowIconMobile";

const CardContainer = styled.div`
  width: 85%;

  border-radius: 10px;
  background: #000;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative; 
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top:30px;
`;

const CardImage = styled.img`
  width: 70%;
  height: auto;
  padding-top: 30px;
`;

const TitleContainer = styled.div`
    padding-top:15px;
    width: 85%;
    height: auto;
    flex-shrink: 0;
`;

const ArticleTitle = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Arial;
    font-size: 19px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const ArticleAuthor = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Arial;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const AuthorContainer = styled.div`
    padding-top: 10px;
`

const ArrowWrapper = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;

    width: 100%; 
    display: flex;
    justify-content: flex-end; 
    padding-right: 60px;
  `

const CardLink = styled.a`
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: center;
`;


const MobileCard = ({ number, title, authorName, image, url }) => (
  <CardLink href={url} target="_blank" rel="noopener noreferrer">
    <CardContainer>
      <IconWrapper>
        <MobileCricleIcon number={number} />
      </IconWrapper>

      <ImageContainer>
        <CardImage src={image || TempCard} alt={title} />
      </ImageContainer>

      <TitleContainer>
        <ArticleTitle>{title}</ArticleTitle>
      </TitleContainer>

      <AuthorContainer>
        <ArticleAuthor>By {authorName}</ArticleAuthor>
      </AuthorContainer>

      <ArrowWrapper>
        <ArrowIconMobile width={35} height={30} stroke="#FFFF" />
      </ArrowWrapper>
    </CardContainer>
  </CardLink>
);


export default MobileCard;
