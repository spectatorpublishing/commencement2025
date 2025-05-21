import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import BlackCircleIcon from "./BlackCiricle";
import RedCircleIcon from "./RedCircle";
import WhiteBar from "./WhiteBar";

const NavBarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconRow = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transform: translateY(10px);
`;

const IconRow2 = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transform: translateY(10px);
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconText = styled.div`
  color: #000;
  text-align: center;
  font-family: Arial;
  font-size: 20px;
  font-weight: 700;
  margin-top: 4px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const NavIcon = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <StyledLink to={to}>
      <IconWrapper>
        {isActive ? <RedCircleIcon /> : <BlackCircleIcon />}
        <IconText>{label}</IconText>
      </IconWrapper>
    </StyledLink>
  );
};

const MobileNavBar = () => (
  <>
    <NavBarContainer>
      <WhiteBar />
      <IconRow>
        <NavIcon to="/" label="Home" />
        <NavIcon to="/university" label="University" />
        <NavIcon to="/arts" label="A&C" />
        <NavIcon to="/audio" label="Audio" />
      </IconRow>
    </NavBarContainer>

    <NavBarContainer>
      <WhiteBar />
      <IconRow2>
        <NavIcon to="/sports" label="Sports" />
        <NavIcon to="/opinion" label="Opinion" />
        <NavIcon to="/spectrum" label="Spectrum" />
      </IconRow2>
    </NavBarContainer>
  </>
);

export default MobileNavBar;