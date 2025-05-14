import styled from "styled-components";
import { useState } from "react";
import BackToTopButton from "../components/BackToTopButton";


const Container = styled.div`
  display: flex;
  justify-content: flex-end; /* or space-between if needed */
`

const Year =  styled.div`
    color: #000;
    font-family: Montserrat;
    font-size: 400px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`





function Homepage() {
    return(
        <div>
            <Container>
                <Year> 2025</Year>
            </Container>
            <BackToTopButton />
        </div>
    );
}

export default Homepage;