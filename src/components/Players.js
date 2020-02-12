import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Players.scss';
import PlayerCard from './PlayerCard';

const Players = () => {
  const [playerData, setPlayerData] = useState({});
  const [shuffledPlayers, setShuffledPlayers] = useState([]);
  const [guessCount, setGuessCount] = useState(0);
  const URL = "https://gist.githubusercontent.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105/raw/6b6fc89d55ebe4d9b05c1469349af33651d7e7f1/Player.json"

  const loadPlayerData = () => {
    axios.get(URL)
      .then(res => {
        console.log(res)
        setPlayerData(res);
        shufflePlayers(res.data.players);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => { loadPlayerData() }, []);

  const shufflePlayers = (arr) => {
    var copy = arr.slice(0);
    let i = copy.length, randomIndex, temp;

    while (--i > 0) {
      randomIndex = Math.floor(Math.random() * (i+1));
      temp = copy[randomIndex];
      copy[randomIndex] = copy[i];
      copy[i] = temp;
    }

    setShuffledPlayers(copy);
  }

  function randomNoRepeats(array) {
    var copy = array.slice(0);
    return function() {
      if (copy.length < 1) { copy = array.slice(0); }
      var index = Math.floor(Math.random() * copy.length);
      var item = copy[index];
      copy.splice(index, 1);
      return item;
    };
  }

  const makeGuess = () => {
    setGuessCount(guessCount + 1);
    shufflePlayers(playerData.data.players);
  }

  return (
    <div className="Players">
      <PlayerCard playerData={playerData} makeGuess={makeGuess} />
      <PlayerCard makeGuess={makeGuess} />
    </div>
  )
}

export default Players;