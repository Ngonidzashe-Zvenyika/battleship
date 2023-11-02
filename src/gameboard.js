import {
  NewCarrier,
  NewBattleship,
  NewCruiser,
  NewSubmarine,
  NewDestroyer,
} from './ships.js';

function NewIndicator(ship, value) {
  return {
    ship,
    value,
  };
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
        this.board[i][j] = NewIndicator(null, 0);
      }
    }
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
          while (length > 0) {
            this.board[x][y] = NewIndicator(ship, 1);
            y += 1;
            length -= 1;
          }
        }
        break;
      case 'vertical':
        if (x + length > 10) {
          return;
        } else {
          while (length > 0) {
            this.board[x][y] = NewIndicator(ship, 1);
            x += 1;
            length -= 1;
          }
        }
        break;
    }
  };
}
