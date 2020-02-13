import React, { Component } from 'react'
import axios from 'axios';

import './PlayerGame.scss';
import PlayerCard from './PlayerCard';
import GameResult from './GameResult';

const PLAYER_CARD_COUNT = 4;
const WINNING_COUNT = 10;

class PlayerGame extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      playerData: null,
      shuffledPlayers: null,
      guessCount: 0,
      correctCount: 0,
      maxPPGPlayer: null,
      gameOver: false,
      correctStatus: false,
      incorrectStatus: false
    }
  }

  // initial axios get request to load json data
  componentDidMount() {
    this.loadPlayerData();
  }

  loadPlayerData = async () => {
    const URL = "https://gist.githubusercontent.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105/raw/6b6fc89d55ebe4d9b05c1469349af33651d7e7f1/Player.json";

    try {
      const response = await axios.get(URL);
      this.setState({playerData: response.data});
      this.shufflePlayers(response.data.players);
    } catch(error) {
      console.log(error);
    }
  }

  // shuffle players for game
  shufflePlayers = (arr) => {
    var copy = arr.slice(0);
    let i = copy.length, randomIndex, temp;

    while (--i > 0) {
      randomIndex = Math.floor(Math.random() * (i+1));
      temp = copy[randomIndex];
      copy[randomIndex] = copy[i];
      copy[i] = temp;
    }

    let shuffledPlayers = copy.slice(0, PLAYER_CARD_COUNT);
    this.setState({ shuffledPlayers });
    this.getMaxPPGPlayer(shuffledPlayers);
  }

  // get player from shuffled array with highest FPPG
  getMaxPPGPlayer = (players) => {
    const result = players.reduce((p1, p2) => p1.fppg > p2.fppg ? p1 : p2, players[0]);
    this.setState({maxPPGPlayer: result});
  }

  makeGuess = (id) => {
    let currentGuessCount = this.state.guessCount;

    this.setState({guessCount: currentGuessCount + 1});
    (id === this.state.maxPPGPlayer.id) ? this.handleCorrectGuess() : this.handleIncorrectGuess();
    this.resetGuessStatus();
  }

  resetGuessStatus = () => {
    setTimeout(() => {
      this.setState({
        correctStatus: false,
        incorrectStatus: false
      });
    }, 1000);
  }

  handleCorrectGuess = () => {
    let newCorrectCount = this.state.correctCount + 1;
    this.setState({
      correctCount: newCorrectCount,
      correctStatus: true
    });

    setTimeout(() => {
      if (this.isGameOver(newCorrectCount)) {
        this.setState({
          shuffledPlayers: null,
          gameOver: true
        });
      } else {
        this.setState({correctStatus: false});
        newCorrectCount < WINNING_COUNT && this.shufflePlayers(this.state.playerData.players);
      }
    }, 1000);
  }

  handleIncorrectGuess = () => this.setState({incorrectStatus: true});

  isGameOver = (correctCount) => {
    return (correctCount === WINNING_COUNT) ? true : false;
  }

  // set game state to initial state and get new batch of shuffled players
  resetGame = () => {
    this.setState({
      guessCount: 0,
      correctCount: 0,
      gameOver: false
    });

    this.shufflePlayers(this.state.playerData.players);
  }

  // show correct or incorrect message based on guess
  generateGuessMessage = () => {
    if (this.state.correctStatus) {
      return (
        <h3>Correct! &nbsp;
          <span role="img" aria-label="strong">&#128170;</span>
        </h3>
      );
    }
    if (this.state.incorrectStatus) {
      return (
        <h3>Incorrect &nbsp; 
          <span role="img" aria-label="sad-face">&#128532;</span>
        </h3>
      );
    }
  }
  
  render() {
    let { gameOver, shuffledPlayers, guessCount, correctCount } = this.state

    let generatePlayerCards = this.state.shuffledPlayers && this.state.shuffledPlayers.slice(0, PLAYER_CARD_COUNT).map((player, i) => {
      return <PlayerCard key={player.id} playerData={player} makeGuess={this.makeGuess} />
    });

    return (
      <div className="PlayerGame" data-test="PlayerGame">
        {
          gameOver ?
          <GameResult resetGame={this.resetGame} /> :
          shuffledPlayers && 
          <div className="game-area">
            <section className="counters">
              <p>Guesses: {guessCount}</p>
              <p>Correct Guesses: {correctCount}</p>
            </section>
            <section className="card-container" data-test="card-container">
              {generatePlayerCards}
            </section>
          </div>
        }

        {
          this.generateGuessMessage()
        }
    </div>
    )
  }
}

export default PlayerGame;