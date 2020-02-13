import React, { useState } from "react";
import "./PlayerCard.scss";

const PlayerCard = ({playerData, makeGuess}) => {
  const [showPlayerDetails, setDetailsState] = useState(false);
  
  const togglePlayerDetails = () => {
    setDetailsState(!showPlayerDetails);
  }

  return (
    <div className="PlayerCard" data-test="PlayerCard">
      <div className="player-info-container">
        <header data-test="player-name" className="player-name">{playerData.first_name} {playerData.last_name}</header>

        <div className="player-info" onMouseEnter={togglePlayerDetails} onMouseLeave={togglePlayerDetails}>
          <div className={ showPlayerDetails ? 'front fade-out' : 'front fade-in' }>
            <img data-test="player-img" className="player-img" src={playerData.images.default.url} alt="player"/>
          </div>

          <div className={ showPlayerDetails ? 'player-details fade-in' : 'player-details fade-out' }>
            
            <a href={playerData.player_card_url}>Fanduel Card Url</a>
            <p>Position: {playerData.position}</p>
            <p>Salary: {playerData.salary}</p>
          </div> 
        </div>

        <button className="guess-btn" onClick={() => makeGuess(playerData.id)}>Make Guess</button>
      </div>
    </div>
  )
}

export default PlayerCard;
