import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Players = () => {
  const [playerData, setPlayerData] = useState({});
  const URL = "https://gist.githubusercontent.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105/raw/6b6fc89d55ebe4d9b05c1469349af33651d7e7f1/Player.json"

  const loadPlayerData = () => {
    axios.get(URL)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  useEffect(() => { loadPlayerData() }, [])

  return (
    <div>
    </div>
  )
}

export default Players;