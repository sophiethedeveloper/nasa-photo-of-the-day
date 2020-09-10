import React from "react";
import styled from "styled-components";

const StyledNav = styled.div`
  color: #ffffff;
  background-color: rgba(220, 220, 220, 0.2);
  font-family: "Nanum Myeongjo", serif;
  font-size: 1.2rem;
  height: 16vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const CardNavbar = () => {
  return (
    <StyledNav>
      <nav>
        <h1>Nasa's Photo of The Day</h1>
      </nav>
    </StyledNav>
  );
};

export default CardNavbar;
