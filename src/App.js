import React, { useState } from "react";
import "./App.css";
import CardNavbar from './components/navbar/navbar';
import NasaInfo from './components/card/NasaInfo';
import styled from 'styled-components';

const StyledForm = styled.div`
  font-family: "Nanum Myeongjo", serif;
  color: #ffffff;
  margin-bottom: 50px;

  #date {
    font-family: "Nanum Myeongjo", serif;
    width: 200px;
  }

  button {
    color: purple;
    font-size: 0.8em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid purple;
    border-radius: 3px;
  }

`


function App() {

  {/* Stretch Challenge */}
  const dateFormat = new Date();
  const getDate = `${dateFormat.getFullYear()}-${dateFormat.getMonth() + 1}-${dateFormat.getDate()}`;
  console.log('get date', getDate)

  const [date, setDate] = useState(getDate);

  const [formDate, setFormDate] = useState(getDate)

  const handleChange = (event) => {
    console.log('handle change', event.target.value)
    setFormDate(event.target.value)
  }

  const selectNewDate = event => {
    event.preventDefault();
    setDate(formDate)
  }

  return (
    <div className="App">
     <CardNavbar />
     <NasaInfo date={date}/>
     {/* <DateDropDown /> */}

      {/* Stretch Challenge */}
     <StyledForm>
            <h2>Pick a New Date!</h2>
            <form>
            <input type="date" id="date" value={formDate} onChange={handleChange}/>
            <button onClick={selectNewDate}>Select</button>
            </form>
        </StyledForm>
    </div>
  );
}

export default App;
