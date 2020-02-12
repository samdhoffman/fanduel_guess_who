import React from "react"
import "./GameResult.scss";

const GameResult = ({resetGame}) => {
  return (
    <div className="GameResult">
      <section>
        <header>Congrats! You have successfully gussed the players with the highest Fanduel Points Per Game!</header>
        <p>To restart the game please click the button below. Happy guessing!</p>
        <button onClick={() => resetGame()}>Reset Game</button>
      </section>
    </div>
  )
}

export default GameResult;
