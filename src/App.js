import React, { useState } from "react";
import "./App.css";
import CardNavbar from './components/navbar/navbar';
import NasaInfo from './components/card/NasaInfo';
// import DateDropDown from './components/card/Date'

function App() {

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
     <div>
            <h2>Pick a New Date!</h2>
            <form>
            <label htmlFor="date">New Date: </label>
            <input type="date" id="date" value={formDate} onChange={handleChange}/>
            <button onClick={selectNewDate}>Select</button>
            </form>
        </div>
    </div>
  );
}

export default App;
