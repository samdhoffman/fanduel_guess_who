import React from "react";
import "./PlayerCard.scss";

const PlayerCard = ({playerData, makeGuess}) => {
  return (
    <div className="PlayerCard" data-test="PlayerCard">
      <div className="player-info">
        <header data-test="player-name" className="player-name">{playerData.first_name} {playerData.last_name}</header>
        <img data-test="player-img" className="player-img" src={playerData.images.default.url} alt="player"/>
        <button className="guess-btn" onClick={() => makeGuess(playerData.id)}>Make Guess</button>
      </div>
    </div>
  )
}

export default PlayerCard;
