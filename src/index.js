import './style.css';
import Gameboard from './gameboard.js';
import renderGame from './render.js';
import { HumanPlayer, AiPlayer } from './players.js';
import { placeAiShips } from './place.js';

export function setGame() {
  const aiBoard = new Gameboard();
  const humanBoard = new Gameboard();
  const ai = new AiPlayer(humanBoard);
  const human = new HumanPlayer(ai, aiBoard);
  placeAiShips(aiBoard);
  return { ai, human };
}

export function newGame() {
  const players = setGame();
  renderGame(players);
}

// Main program
newGame();
