import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Players.scss';
import PlayerCard from './PlayerCard';

const Players = () => {
  const [playerData, setPlayerData] = useState(null);
  
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

  useEffect(() => { 
    loadPlayerData();
  }, []);

  return (
    <div className="Players">
      <section className="card-container">
      </section>
    </div>
  )
}

export default Players;