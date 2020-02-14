import React, { useState } from "react";
import "./PlayerCard.scss";

const PlayerCard = ({playerData, makeGuess}) => {
  const [showPlayerDetails, setDetailsState] = useState(false);
  
  const togglePlayerDetails = () => {
    setDetailsState(!showPlayerDetails);
  }

  return (
    <div className="PlayerCard" data-test="PlayerCard">
      <div className="player-container">
        <header data-test="player-name" className="player-name">{playerData.first_name} {playerData.last_name}</header>

        <div className="player-info" onMouseEnter={togglePlayerDetails} onMouseLeave={togglePlayerDetails}>
          <img data-test="player-img" className="player-img" src={playerData.images.default.url} alt="player"/>
        </div>

        <button className="guess-btn" onClick={() => makeGuess(playerData.id)}>Make Guess</button>
      </div>
    </div>
  )
}

export default PlayerCard;
