import React from "react";
import styled from "styled-components";
import placeholder from '../images/CommencementSE.jpeg';

import specLogo from "../images/specLogo.png";
import GraduationCap from "./GraduationIcon";

import greybar from "../images/greybar_image.png";

import MediumPerson from "./people_icons_mobile/MediumPerson_Mobile";
import SmallPersonMobile from "./people_icons_mobile/SmallPerson_Mobile";
import LargePerson from "./people_icons_mobile/LargePerson_Mobile";

import MobileNavBar from "../components/mobile_componenets/mobile_navbar";

const SpecLogoContainer = styled.div`
  padding:10px;
`

const ImageContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;

`

const Image = styled.img`
    width: 90%;
    height: 80%;
    border-radius: 10px;
    border: 3px solid #FFF;
`

const YearContainer = styled.div`
    padding-top:20px;
    display:flex;
    flex-direction: row; 
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-left:30px;
`  

const YearText = styled.div`
     olor: #000;
    font-family: Montserrat;
    font-size: 20vw; 
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`;

const Banner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: 
    linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)),
        url(${greybar});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
`;

const CommenementText = styled.div`
    color: #000;
    text-align: center;
    font-family: Montserrat;
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    padding: 10px;
`

const PeolpeIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding-top:15px;
`

const CongratualtionsText = styled.div`
    color: #000;
    text-align: center;
    font-family: Montserrat;
    font-size: 25px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    padding: 10px;
`
const Spacer = styled.div`
    padding-top:10px;
`



export default function MobileHeader() {
    return (
        <>
         <SpecLogoContainer>
            <img src={specLogo} alt="Spec Logo" className="spec-logo" />
        </SpecLogoContainer>
        



        <ImageContainer>
            <Image src={placeholder} alt="Mobile Header" />
        </ImageContainer>
        
        <YearContainer>
            <YearText>2025</YearText>
                <div style={{ width: "80vw" }}>
                    <GraduationCap />
                </div>
        </YearContainer>

        <Banner>
            <CommenementText>COMMENCEMENT</CommenementText>
        </Banner>

        <PeolpeIconWrapper>
            <MediumPerson/>
            <SmallPersonMobile/>
            <LargePerson/>
        </PeolpeIconWrapper>
        <Banner>
            <CongratualtionsText>CONGRATS CLASS OF 2025</CongratualtionsText>
        </Banner>

        <Spacer/>
        <MobileNavBar/>
    
        </>
    );
  }