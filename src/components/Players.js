import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Players.scss';
import PlayerCard from './PlayerCard';
import GameResult from './GameResult';

const Players = () => {
  const [playerData, setPlayerData] = useState(null);
  const [shuffledPlayers, setShuffledPlayers] = useState(null);
  const [guessCount, setGuessCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [maxPPG, setMaxPPG] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [correct, setCorrectStatus] = useState(false);
  const [incorrect, setIncorrectStatus] = useState(false);
  
  const PLAYER_CARD_COUNT = 4;
  const WINNING_COUNT = 3;
  const URL = "https://gist.githubusercontent.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105/raw/6b6fc89d55ebe4d9b05c1469349af33651d7e7f1/Player.json"

    // initial axios get request to load json data
    useEffect(() => { 
      loadPlayerData();
    }, []);
  
    // shuffle players for game
    useEffect(() => {
      playerData && setTimeout(() => {
        setCorrectStatus(false);
        correctCount < WINNING_COUNT && shufflePlayers(playerData.data.players);
      }, 1000);
    }, [playerData, correctCount]);
  
    // get the player with the highest FPPG
    useEffect(() => {
      shuffledPlayers && getMaxPPG();
    }, [shuffledPlayers]);
  
    // check if game is over
    useEffect(() => {
      isGameOver();
    }, [maxPPG, correctCount]);

  const loadPlayerData = async () => {
    try {
      const response = await axios.get(URL);
      setPlayerData(response);
    } catch(error) {
      console.log(error);
    }
  }

  const shufflePlayers = (arr) => {
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

  const resetGuessStatus = () => {
    setTimeout(() => {
      setIncorrectStatus(false);
    }, 1000);
  }

  const makeGuess = (id) => {
    setGuessCount(guessCount + 1);
    if (id == maxPPG.id) {
      setCorrectCount(correctCount + 1)
      setCorrectStatus(true);
    } else {
      setIncorrectStatus(true);
      resetGuessStatus();
    }
  }

  const isGameOver = () => {
    if (correctCount == WINNING_COUNT) {
      setShuffledPlayers(null);
      setGameOver(true)};
    }

  const resetGame = () => {
    setGuessCount(0);
    setCorrectCount(0);
    setGameOver(false);
  }

  const generatePlayerCards = shuffledPlayers && shuffledPlayers.slice(0, PLAYER_CARD_COUNT).map((player, i) => {
    return <PlayerCard key={player.id} playerData={player} makeGuess={makeGuess} />
  });

  let generateGuessMessage = () => {
    if (correct) {
      return <h3>Correct! &#128170;</h3>
    }
    if (incorrect) {
      return <h3>Incorrect &#128532;</h3>
    }
  }

  return (
    <div className="Players">
      {
        gameOver ?
        <GameResult resetGame={resetGame} /> :
        <section className="card-container">{generatePlayerCards}</section>
      }

      {
        generateGuessMessage()
      }
    </div>
  )
}

export default Players;