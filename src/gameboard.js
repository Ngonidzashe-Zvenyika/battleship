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

  evaluatePlacement(shipLocation, shipOrientation, shipLength) {
    let [x, y] = shipLocation;
    let targetCells = [];
    let valid = false;
    switch (shipOrientation) {
      case 'horizontal':
        if (y + shipLength > 10) {
          return { valid, targetCells: null };
        } else {
          valid = true;
          while (shipLength > 0) {
            if (this.board[x][y].ship) {
              valid = false;
              break;
            }
            targetCells.push([x, y]);
            y += 1;
            shipLength -= 1;
          }
          return valid === true
            ? { valid, targetCells }
            : { valid, targetCells: null };
        }
      case 'vertical':
        if (x + shipLength > 10) {
          return { valid, targetCells: null };
        } else {
          valid = true;
          while (shipLength > 0) {
            if (this.board[x][y].ship) {
              valid = false;
              break;
            }
            targetCells.push([x, y]);
            x += 1;
            shipLength -= 1;
          }
          return valid === true
            ? { valid, targetCells }
            : { valid, targetCells: null };
        }
    }
  }

  place = (shipLocation, shipName, shipOrientation) => {
    const ship = getShip(shipName);
    let shipLength = ship.length;
    let [x, y] = shipLocation;
    const evaluation = this.evaluatePlacement(
      shipLocation,
      shipOrientation,
      shipLength,
    );
    if (evaluation.valid) {
      this.ships.push(ship);
      switch (shipOrientation) {
        case 'horizontal':
          while (shipLength > 0) {
            this.board[x][y] = NewIndicator(ship);
            y += 1;
            shipLength -= 1;
          }
          break;
        case 'vertical':
          while (shipLength > 0) {
            this.board[x][y] = NewIndicator(ship);
            x += 1;
            shipLength -= 1;
          }
          break;
      }
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
    const availableMoves = [];
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
          availableMoves.push([i, j]);
        }
      }),
    );
    return availableMoves;
  };
}
