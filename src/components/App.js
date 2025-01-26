import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

const STARTING_BUDGET = 50;

function App() {
  const [eatenSushiIds, setEatenSushiIds] = useState([]);
  const [budget, setBudget] = useState(STARTING_BUDGET);

  const handleEatSushi = (sushi) => {
    if (budget >= sushi.price) {
      setEatenSushiIds([...eatenSushiIds, sushi.id]);
      setBudget(budget - sushi.price);
    } else {
      alert("You don't have enough money for this sushi!");
    }
  };

  return (
    <div className="app">
      <SushiContainer
        onEatSushi={handleEatSushi}
        eatenSushiIds={eatenSushiIds}
      />
      <Table plates={eatenSushiIds} budget={budget} />
    </div>
  );
}

export default App;
