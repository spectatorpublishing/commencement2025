import React from "react";
import styled from "styled-components";
import greybar from "../images/greybar_image.png";
import cap from "../images/cap_image.png";
import gradfig from "../images/gradfig_image.png";
import sketch from "../images/commencement_placeholder.png";
import subway123 from "../images/123subway_image.png";
import subwayACE from "../images/ACEsubway_image.png";

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 2000px;
  margin: 0 auto;
  position: relative;
  ;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }  
`;

const Illustration = styled.img`
  width: 550px;
  height: auto;
  object-fit: contain;
  margin-right: 40px;
  z-index: 2;

  @media (max-width: 768px) {
    width: 85%;
    margin-right: 0;
  }
`;

const Year = styled.div`
  font-size: 400px;
  font-family: Montserrat, sans-serif;
  font-weight: 800;
  color: #000;
  line-height: 1;
  margin-top: -525px;

  @media (max-width: 1583px) {
      margin-top: 10px;
  }
  @media (max-width: 1100px) {
    font-size: 280px;
  }
  @media (max-width: 768px) {
    font-size: 180px;
  }
`;

const OverlayBanner = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),
    url(${greybar});
  background-size: cover;
  background-position: 50% 75%;
  background-repeat: no-repeat;
  display: flex;

  align-items: center;
  justify-content: center;
  padding: 0;
  z-index: 0;
  margin-top: -655px;

  @media (max-width: 1583px) {
      margin-top: -65px;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const TopBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  background-position: top;
  overflowX: hidden;
  padding-left: 600px;

  @media (max-width: 1583px) {
    padding-left: 0;
    gap: 10px;
  }
`;

const BottomBannerWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin: 10px;
  align-items: center;
  justify-content: space-between;
  overflowX: hidden;

  @media (max-width: 1583px) {
    padding-left: 0;
    gap: 10px;
  }
`;

const TextBlock = styled.h1`
  color: #000;
  font-family: Montserrat;
  font-size: 80px;
  margin: 0;
  font-style: normal;
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
  padding-left: 10px;

  @media (max-width: 1100px) {
    font-size: 55px;
  }
  @media (max-width: 768px) {
    font-size: 45px;
  }
`;

const CapImage = styled.img`
  position: relative;
  width: 205px;
  height: auto;
  bottom: 20px;

  @media (max-width: 1100px) {
    width: 140px;
    height: auto;
    bottom: 12px;
  }
  @media (max-width: 1100px) {
    width: 115px;
    height: auto;
    bottom: 8px;
  }
`;

const SubwayImage = styled.img`
  position: relative;
  width: 320px;
  height: 95px;
  @media (max-width: 1583px) {
    width: 20%;
    height: 20%;
  }

`;

const Spacer = styled.div`
  width: 100%;
  height: 1200px;
  overflowX: hidden;

  @media (max-width: 1583px) {
    height: 620px;;
    }
  @media (max-width: 910px) {
    height: 531px;;
    }
  `;

const GradFiguresWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1600px;
  gap: -40px;
  overflowX: hidden;

`;

const GradFigureM = styled.img`
  height: auto;
  width: 320px;
  margin-left: 1000px;
  margin-top: 280px;

  @media (max-width: 1678px) {
    margin-left: 800px;
  }
  @media (max-width: 1583px) {
    margin-left: 0px;
  }
  @media (max-width: 910px) {
    width: 214px;
    margin-top: 281px;
`;

const GradFigureS = styled.img`
  height: auto;
  width: 218px;
  margin-top: 347px;

  @media (max-width: 1583px) {
  }
  @media (max-width: 910px) {
    width: 150px;
    margin-top: 323px;
  }
`;

const GradFigureL = styled.img`
  height: auto;
  width: 380px;
  margin-top: 280px;


  @media (max-width: 1583px) {
    margin-top: 238px;
  }
  @media (max-width: 910px) {
    width: 255px;
    margin-top: 253px;
  }
  `;

const GradTextWrapper = styled.h1`
  color: #000;
  font-family: Montserrat;
  margin: 0;
  font-style: normal;
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
  padding-left: 10px;
  font-size: 67px; 
  overflowX: hidden;

  @media (max-width: 1100px) {
    font-size: 55px;
  }
  @media  screen and (max-width: 768px) {
    font-size: 45px;
  }
`;

export default function Header() {
  return (
    <>
      <div
        style={{
          overflowX: "hidden",
          display: "flex",
          justifyContent: "flex-start",
          padding: "60px 0",
        }}
      >
        <FlexContainer>
          <Illustration src={sketch} alt="Commencement Illustration" />
          <Year>2025</Year>
        </FlexContainer>
      </div>

      <OverlayBanner>
        <TopBannerWrapper>
          <TextBlock>Commencement</TextBlock>
          <CapImage src={cap} alt="Graduation Cap" />
        </TopBannerWrapper>
      
      </OverlayBanner>

      <Spacer>
        <GradFiguresWrapper>
          <GradFigureM src={gradfig} alt="Graduation Figure Medium" />
          <GradFigureS src={gradfig} alt="Graduation Figure Small" />
          <GradFigureL src={gradfig} alt="Graduation Figure Large" />
        </GradFiguresWrapper>
      </Spacer>

      <OverlayBanner>
        <BottomBannerWrapper>
          <SubwayImage src={subway123} alt="Subway Image" />
          <TextBlock>
            <GradTextWrapper>
              Congrats Class of 2025
            </GradTextWrapper>
          </TextBlock>          
          <SubwayImage src={subwayACE} alt="Subway Image" />
        </BottomBannerWrapper>
      </OverlayBanner>
    </>
  );
}