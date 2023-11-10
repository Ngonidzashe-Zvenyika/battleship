import { newGame } from './index.js';
import {
  toggleOrientation,
  getOrientation,
  popShip,
  pushShip,
  getShipLength,
  getCurrentShip,
  allShipsPlaced,
  resetShips,
} from './place.js';

function renderOverlay() {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  return overlay;
}

function displayResult(gameStatus) {
  const result = document.createElement('div');
  result.classList.add('result');
  const heading = document.createElement('h2');
  heading.innerText = 'Game Over';
  const winner = document.createElement('p');
  winner.innerText =
    gameStatus.gameWinner === 'human' ? 'You win!' : 'Computer Wins :(';
  const button = document.createElement('button');
  button.innerText = 'New Game';
  button.addEventListener('click', newGame);
  const array = [heading, winner, button];
  array.forEach((element) => result.appendChild(element));
  const overlay = renderOverlay();
  const body = document.querySelector('body');
  body.appendChild(overlay);
  body.appendChild(result);
}

function renderShipBody(ai, square, location) {
  const [x, y] = location;
  if (ai.opponentBoard.board[x][y].ship) square.style.backgroundColor = 'grey';
}

function renderAttackedSquares(player, square, location) {
  const [x, y] = location;
  player.opponentBoard.missedAttacks.find((attack) => {
    const [i, j] = attack;
    if (x === i && j === y) {
      square.style.backgroundColor = 'hsl(85, 50%, 70%)';
    }
  });
  player.opponentBoard.succesfulAttacks.find((attack) => {
    const [i, j] = attack;
    if (x === i && j === y) {
      square.style.backgroundColor = 'hsl(15, 50%, 70%)';
    }
  });
}

function renderHumanBoard(ai) {
  const boardContainer = document.createElement('div');
  boardContainer.classList.add('board-container');
  const heading = document.createElement('h2');
  heading.innerText = 'Friendly Waters';
  boardContainer.appendChild(heading);
  const board = document.createElement('div');
  board.classList.add('board');
  ai.opponentBoard.board.forEach((row, i) =>
    row.forEach((cell, j) => {
      const square = document.createElement('div');
      square.classList.add('square');
      renderShipBody(ai, square, [i, j]);
      renderAttackedSquares(ai, square, [i, j]);
      board.appendChild(square);
    }),
  );
  boardContainer.appendChild(board);
  return boardContainer;
}

function addAttackListener(human, square, [x, y]) {
  square.addEventListener('click', () => {
    const gameStatus = human.attack([x, y]);
    if (gameStatus.moveValid) {
      const main = document.querySelector('main');
      main.replaceChildren();
      const boards = document.createElement('div');
      boards.classList.add('boards');
      boards.appendChild(renderHumanBoard(human.opponent));
      boards.appendChild(renderAiBoard(human));
      main.appendChild(boards);
      if (gameStatus.gameOver) displayResult(gameStatus);
    }
  });
}

function renderAiBoard(human) {
  const boardContainer = document.createElement('div');
  boardContainer.classList.add('board-container');
  const heading = document.createElement('h2');
  heading.innerText = 'Enemy Waters';
  boardContainer.appendChild(heading);
  const board = document.createElement('div');
  board.classList.add('board');
  board.classList.add('enemy-waters');
  human.opponentBoard.board.forEach((row, i) =>
    row.forEach((cell, j) => {
      const square = document.createElement('div');
      square.classList.add('square');
      renderAttackedSquares(human, square, [i, j]);
      addAttackListener(human, square, [i, j]);
      board.appendChild(square);
    }),
  );
  boardContainer.appendChild(board);
  return boardContainer;
}

function renderHeader() {
  const header = document.createElement('header');
  const heading = document.createElement('h1');
  heading.innerText = 'Battleship';
  header.appendChild(heading);
  return header;
}

function renderMain(players) {
  const main = document.createElement('main');
  const boards = document.createElement('div');
  boards.classList.add('boards');
  boards.appendChild(renderHumanBoard(players.ai));
  boards.appendChild(renderAiBoard(players.human));
  main.appendChild(boards);
  return main;
}

function renderFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML =
    'Developed by <a href="https://github.com/Ngonidzashe-Zvenyika">Ngonidzashe Zvenyika</a>';
  return footer;
}

function addMouseoverListener(square, ai, location) {
  square.addEventListener('mouseover', () => {
    const ship = getCurrentShip();
    const evaluation = ai.opponentBoard.evaluatePlacement(
      location,
      getOrientation(),
      getShipLength(ship),
    );
    if (evaluation.valid) {
      const board = [];
      ai.opponentBoard.board.forEach((row, i) =>
        row.forEach((cell, j) => board.push([i, j])),
      );
      const squares = [...document.querySelectorAll('.welcome .square')];
      evaluation.targetCells.forEach((cell) => {
        const [x, y] = cell;
        const index = board.findIndex((cell) => {
          const [i, j] = cell;
          return x === i && y == j;
        });
        squares[index].style.backgroundColor = 'hsl(15, 0%, 75%)';
      });
    }
  });
}

function addMouseoutListener(square, ai, location) {
  square.addEventListener('mouseout', () => {
    const ship = getCurrentShip();
    const evaluation = ai.opponentBoard.evaluatePlacement(
      location,
      getOrientation(),
      getShipLength(ship),
    );
    if (evaluation.valid) {
      const board = [];
      ai.opponentBoard.board.forEach((row, i) =>
        row.forEach((cell, j) => board.push([i, j])),
      );
      const squares = [...document.querySelectorAll('.welcome .square')];
      evaluation.targetCells.forEach((cell) => {
        const [x, y] = cell;
        const index = board.findIndex((cell) => {
          const [i, j] = cell;
          return x === i && y == j;
        });
        squares[index].style.backgroundColor = 'hsl(0, 0%, 100%)';
      });
    }
  });
}

function addClickListener(square, players, location) {
  square.addEventListener('click', () => {
    const ship = popShip();
    const evaluation = players.ai.opponentBoard.evaluatePlacement(
      location,
      getOrientation(),
      getShipLength(ship),
    );
    if (evaluation.valid) {
      players.ai.opponentBoard.place(location, ship, getOrientation());
      renderGame(players);
      if (allShipsPlaced()) {
        resetShips();
        const body = document.querySelector('body');
        body.removeChild(document.querySelector('.overlay'));
        body.removeChild(document.querySelector('.welcome'));
      }
    } else {
      pushShip(ship);
    }
  });
}

function renderPlacementBoard(players) {
  const ai = players.ai;
  const boardContainer = document.createElement('div');
  boardContainer.classList.add('board');
  ai.opponentBoard.board.forEach((row, i) =>
    row.forEach((cell, j) => {
      const square = document.createElement('div');
      square.classList.add('square');
      renderShipBody(ai, square, [i, j]);
      addMouseoverListener(square, ai, [i, j]);
      addMouseoutListener(square, ai, [i, j]);
      addClickListener(square, players, [i, j]);
      boardContainer.appendChild(square);
    }),
  );
  return boardContainer;
}

function displayWelcome(players) {
  const container = document.createElement('div');
  container.classList.add('welcome');
  const heading = document.createElement('h2');
  heading.innerText = 'Welcome!';
  container.appendChild(heading);
  const instruction = document.createElement('p');
  instruction.classList.add('instruction');
  instruction.innerText = `Place your ${getCurrentShip()}.`;
  container.appendChild(instruction);
  container.appendChild(renderPlacementBoard(players));
  const button = document.createElement('button');
  button.innerText = 'Rotate Ship';
  button.addEventListener('click', toggleOrientation);
  container.appendChild(button);
  const overlay = renderOverlay();
  const body = document.querySelector('body');
  body.appendChild(overlay);
  body.appendChild(container);
}

export default function renderGame(players) {
  const body = document.querySelector('body');
  body.replaceChildren();
  body.appendChild(renderHeader());
  body.appendChild(renderMain(players));
  body.appendChild(renderFooter());
  displayWelcome(players);
}
