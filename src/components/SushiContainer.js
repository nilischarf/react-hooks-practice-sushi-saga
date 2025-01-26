import React, { useEffect, useState } from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

const API = "http://localhost:3001/sushis";

function SushiContainer({ onEatSushi, eatenSushiIds }) {
  const [sushis, setSushis] = useState([]);
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setSushis(data));
  }, []);

  const displaySushis = sushis.slice(index, index + 4);

  const handleMoreSushi = () => {
    setIndex((prevIndex) => prevIndex + 4);
  };

  return (
    <div className="belt">
      {displaySushis.map((sushi) => (
        <Sushi
          key={sushi.id}
          sushi={sushi}
          onEatSushi={onEatSushi}
          isEaten={eatenSushiIds.includes(sushi.id)}
        />
      ))}
      <MoreButton onClick={handleMoreSushi} />
    </div>
  );
}

export default SushiContainer;
