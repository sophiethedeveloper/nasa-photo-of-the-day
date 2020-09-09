import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

const NasaInfo = () => {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=U1KygYvkDTXp4IPiYPEWSvjOECPdxDqyXoE2eaEu")
      .then((res) => {
        console.log('response', res)
        // const info = res.data
        setInfo(res.data)
      })
      .catch((error) => console.log("Error!", error));
  }, []);

  return (
    <div>
      <NasaCard 
      title={info.title}
      photo={info.url}
      date={info.date}
      description={info.explanation}
      credit={info.copyright}
      />
    </div>
  );

 
};

export default NasaInfo;
