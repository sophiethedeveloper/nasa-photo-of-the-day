import React from "react";
import "./App.css";
import CardNavbar from './components/navbar/navbar';
import NasaInfo from './components/card/NasaInfo'

function App() {
  return (
    <div className="App">
     <CardNavbar />
     <NasaInfo />
    </div>
  );
}

export default App;
