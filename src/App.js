import React from "react";
import "./App.css";
import CardNavbar from './components/navbar/navbar';
import NasaCard from './components/card/NasaCard';

function App() {
  return (
    <div className="App">
     <CardNavbar />
     <NasaCard />
    </div>
  );
}

export default App;
