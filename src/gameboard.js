import {
  NewCarrier,
  NewBattleship,
  NewCruiser,
  NewSubmarine,
  NewDestroyer,
} from './ships.js';

function NewIndicator(ship) {
  return { ship };
}

function getShip(shipName) {
  switch (shipName) {
    case 'carrier':
      return NewCarrier();
    case 'battleship':
      return NewBattleship();
    case 'cruiser':
      return NewCruiser();
    case 'submarine':
      return NewSubmarine();
    case 'destroyer':
      return NewDestroyer();
  }
}

export default class Gameboard {
  constructor() {
    this.board = [];
    for (let i = 0; i < 10; i += 1) {
      this.board[i] = [];
      for (let j = 0; j < 10; j += 1) {
        this.board[i][j] = NewIndicator(null);
      }
    }
    this.ships = [];
    this.missedAttacks = [];
    this.succesfulAttacks = [];
  }

  place = (shipLocation, shipName, shipOrientation) => {
    let [x, y] = shipLocation;
    const ship = getShip(shipName);
    let length = ship.length;
    switch (shipOrientation) {
      case 'horizontal':
        if (y + length > 10) {
          return;
        } else {
          this.ships.push(ship);
          while (length > 0) {
            this.board[x][y] = NewIndicator(ship);
            y += 1;
            length -= 1;
          }
        }
        break;
      case 'vertical':
        if (x + length > 10) {
          return;
        } else {
          this.ships.push(ship);
          while (length > 0) {
            this.board[x][y] = NewIndicator(ship);
            x += 1;
            length -= 1;
          }
        }
        break;
    }
  };

  receiveAttack = (location) => {
    const [x, y] = location;
    const ship = this.board[x][y].ship;
    if (ship) {
      ship.hit();
      this.succesfulAttacks.push(location);
    } else {
      this.missedAttacks.push(location);
    }
  };

  allShipsSunk = () => {
    if (this.ships.length > 0) {
      return this.ships.every((ship) => ship.isSunk() === true);
    }
  };

  getAvailableMoves = () => {
    const moves = [];
    this.board.forEach((row, i) =>
      row.forEach((cell, j) => {
        const isPreviousMissedAttack = this.missedAttacks.find((attack) => {
          const [x, y] = attack;
          return i === x && j === y;
        });
        const isPreviousSuccesfulAttack = this.succesfulAttacks.find(
          (attack) => {
            const [x, y] = attack;
            return i === x && j === y;
          },
        );
        if (!(isPreviousMissedAttack || isPreviousSuccesfulAttack)) {
          moves.push([i, j]);
        }
      }),
    );
    return moves;
  };
}
