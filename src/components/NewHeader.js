import React from "react";
import styled from "styled-components";
import greybar from "../images/greybar_image.png";
import cap from "../images/cap_image.png";

import placeholder from '../images/CommencementSE.jpeg';

import Navbar from "./Navbar";
import RedCircleIcon from "./RedElispe";
import BlueCirlceIcon from "./BlueElispe";

import SmallPersonIcon from "./people_icons/SmallPerson";
import MediumPersonIcon from "./people_icons/MediumPerson";
import LargePersonIcon from "./people_icons/LargePerson";

import specLogo from "../images/specLogo.png";
import "../pages/OverlayPage.css";


const Section = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const SpecLogoContainer = styled.div`
  padding:10px;
`

const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top:91px;
`;

const ImageContainer = styled.div`

`
const Image = styled.img`
  position: absolute;
  left: 4vw; 
  width: clamp(200px, 35vw, 600px);
  height: auto; 
  max-width: 548.429px; 
  z-index: 6;
  border-radius: 10px;
  border: 5px solid #FFF;
  transform: translateX(5%);
`;

const YearContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  padding-right:10px;
`;

const OverlayBanner = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  
  background-image: 
    linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)),
    url(${greybar});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const OverlayBanner2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;

  flex-wrap: nowrap; /* prevent wrapping if you want all in one line */


  background-image: 
    linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)),
    url(${greybar});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  gap: 20px;
`;
const TextBlock = styled.div`
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(30px, 8vw, 70px); /* responsive text size */
  font-weight: 800;
  max-width: 100%;
  text-align: center;
  margin-bottom: 5px;
`;

const CapImage = styled.img`
  width: 100%;
  max-width: 180px;
  height: auto;
  flex-shrink: 0;
  margin-top: -16px;

`;

const Year = styled.div`
  font-size: clamp(60px, 23vw, 680px); /* responsive scaling */
  font-family: Montserrat, sans-serif;
  font-weight: 800;
  color: #000;
  line-height: 1;
`;


const CongratsText = styled.div`
  color: #000;
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-size: 55.873px;
  font-weight: 800;
`;


const GradWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-end;  
    align-items: flex-end;     
`
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
`;

const GraduationIconWrapper = styled.div`
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap:10px;
  margin-right:50px;
`;
export default function NewHeader() {
  return (
    
    <Section>
    <SpecLogoContainer>
    <img src={specLogo} alt="Spec Logo" className="spec-logo" />
    </SpecLogoContainer>


    <ImageContainer>
      <Image src={placeholder}></Image>
    </ImageContainer>
      <Container>
        <YearContainer>
          <Year>2025</Year>
        </YearContainer>

        <OverlayBanner>
          <TextBlock>COMMENCEMENT</TextBlock>
          <CapImage src={cap} alt="Graduation cap" />
        </OverlayBanner>

      </Container>
      <Navbar/>




    <GraduationIconWrapper>

      <MediumPersonIcon></MediumPersonIcon>
      <SmallPersonIcon></SmallPersonIcon>
      <LargePersonIcon></LargePersonIcon>

    </GraduationIconWrapper>


    <OverlayBanner2>
      <IconContainer>
        <RedCircleIcon number={1} />
        <RedCircleIcon number={2} />
        <RedCircleIcon number={3} />
      </IconContainer>

      <CongratsText>CONGRATS CLASS OF 2025</CongratsText>

      <IconContainer>
        <BlueCirlceIcon letter="A" />
        <BlueCirlceIcon letter="C" />
        <BlueCirlceIcon letter="E" />
      </IconContainer>
    </OverlayBanner2>



    </Section>


  );
}
