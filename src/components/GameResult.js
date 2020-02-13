import React from "react"
import "./GameResult.scss";

import Confetti from 'react-confetti'

const GameResult = ({resetGame}) => {
  return (
    <div className="GameResult">
      <Confetti
        numberOfPieces={500}
        recycle={false}
      />
      <section>
        <header>Congrats! You have successfully gussed 10 players with the highest Fanduel Points Per Game!</header>
        <p>To restart the game please click the button below. Happy guessing!</p>
        <button className="reset-btn" onClick={() => resetGame()}>Reset Game</button>
      </section>
    </div>
  )
}

export default GameResult;
