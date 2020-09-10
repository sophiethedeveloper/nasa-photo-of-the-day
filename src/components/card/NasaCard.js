import React from "react";
import "./card.css";
import styled from 'styled-components';

const StyledDiv = styled.div`
    font-family: "Nanum Myeongjo", serif;
    background-color: rgba(220, 220, 220, 0.2);
    color: black;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;
    box-shadow: 0px 1px 6px -2px grey;

    .nasa-image {
    width: 45%;
   
  }

  .date,
  .credit {
    display: flex;
    font-weight: bold;
    padding: 5px;
    margin: 20px;
  }

  .title{
    font-size: 20px;
    font-weight: bold;
    color: #ffff;
  }
  
  .description {
    display: flex;
    justify-content: flex-start;
    font-size: 14px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

const NasaCard = (props) => {

    const { title, photo, date, description, credit } = props
  return (
    <div className="container">
      <StyledDiv>
        <h2 className="title">{title}</h2>
        <img
          className="nasa-image"
          alt="The Universe"
          src={photo}
        />
        <p className='description'>{`Description: ${description}`}</p>
        <p className="date">{date}</p>
        <p className="credit">{credit}</p>
      </StyledDiv>
    </div>
  );
};

export default NasaCard;
