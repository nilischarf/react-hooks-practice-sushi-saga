import React from "react";

function Sushi({ sushi, onEatSushi, isEaten }) {
  const handleClick = () => {
    if (!isEaten) onEatSushi(sushi);
  };

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {isEaten ? null : <img src={sushi.img_url} alt={sushi.name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
