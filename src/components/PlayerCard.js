import React from "react";
import "./PlayerCard.scss";

const PlayerCard = ({playerData, makeGuess}) => {
  return (
    <div className="PlayerCard">
      <div className="player-info">
        <h2>Player Card</h2>
        <header>{playerData.first_name} {playerData.last_name}</header>
        <img className="player-img" src={playerData.images.default.url}/>
        <button onClick={() => makeGuess(playerData.id)}>Make Guess</button>
      </div>
    </div>
  )
}

export default PlayerCard;
