import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Players.scss';
import PlayerCard from './PlayerCard';

const Players = () => {
  const [playerData, setPlayerData] = useState(null);
  const [shuffledPlayers, setShuffledPlayers] = useState(null);
  const [guessCount, setGuessCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [maxPPG, setMaxPPG] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  
  const PLAYER_CARD_COUNT = 4;
  const URL = "https://gist.githubusercontent.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105/raw/6b6fc89d55ebe4d9b05c1469349af33651d7e7f1/Player.json"

  const loadPlayerData = async () => {
    try {
      const response = await axios.get(URL);
      setPlayerData(response);
    } catch(error) {
      console.log(error);
    }
  }

  const shufflePlayers = (arr) => {
    console.log("shuffling")
    var copy = arr.slice(0);
    let i = copy.length, randomIndex, temp;

    while (--i > 0) {
      randomIndex = Math.floor(Math.random() * (i+1));
      temp = copy[randomIndex];
      copy[randomIndex] = copy[i];
      copy[i] = temp;
    }

    setShuffledPlayers(copy.slice(0, PLAYER_CARD_COUNT));
  }

  const getMaxPPG = () => {
    const result = shuffledPlayers.reduce((p1, p2) => p1.fppg > p2.fppg ? p1 : p2);
    setMaxPPG(result);
  }

  const makeGuess = (id) => {
    setGuessCount(guessCount + 1);
    id == maxPPG.id && setCorrectCount(correctCount + 1);
  }

  const isGameOver = () => correctCount == 3 && setGameOver(true);

  useEffect(() => { 
    loadPlayerData();
  }, []);

  // shuffle players for game
  useEffect(() => {
    playerData && shufflePlayers(playerData.data.players);
  }, [playerData, guessCount]);

  // get the player with the highest FPPG
  useEffect(() => {
    shuffledPlayers && getMaxPPG();
  }, [shuffledPlayers]);

  // check if game is over
  useEffect(() => {
    isGameOver();
  }, [maxPPG]);

  return (
    <div className="Players">
      <section className="card-container">
      {
        shuffledPlayers && shuffledPlayers.slice(0, PLAYER_CARD_COUNT).map((player, i) => {
          return <PlayerCard key={i} playerData={player} makeGuess={makeGuess} />
        })
      }
      </section>
    </div>
  )
}

export default Players;