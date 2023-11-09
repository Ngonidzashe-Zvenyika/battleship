let orientation = 'horizontal';
let ships = ['destroyer', 'submarine', 'cruiser', 'battleship', 'carrier'];

function getOrientation() {
  return orientation;
}

function toggleOrientation() {
  orientation = orientation === 'horizontal' ? 'vertical' : 'horizontal';
}

function popShip() {
  return ships.pop();
}

function pushShip(ship) {
  ships.push(ship);
}

function getShipLength(ship) {
  switch (ship) {
    case 'carrier':
      return 5;
    case 'battleship':
      return 4;
    case 'cruiser':
      return 3;
    case 'submarine':
      return 3;
    case 'destroyer':
      return 2;
  }
}

function getCurrentShip() {
  return ships[ships.length - 1];
}

function allShipsPlaced() {
  return ships.length === 0;
}

function resetShips() {
  ships = ['destroyer', 'submarine', 'cruiser', 'battleship', 'carrier'];
}

function placeAiShips(aiBoard) {
  const ships = ['destroyer', 'submarine', 'cruiser', 'battleship', 'carrier'];
  while (ships.length > 0) {
    const board = [];
    aiBoard.board.forEach((row, i) =>
      row.forEach((cell, j) => board.push([i, j])),
    );
    const randomIndex = Math.floor(Math.random() * board.length);
    const location = board[randomIndex];
    const randomNumber = Math.floor(Math.random() * 2);
    const orientation = randomNumber === 0 ? 'horizontal' : 'vertical';
    const ship = ships.pop();
    const shipLength = getShipLength(ship);
    const evaluation = aiBoard.evaluatePlacement(
      location,
      orientation,
      shipLength,
    );
    if (evaluation.valid) {
      aiBoard.place(location, ship, orientation);
    } else ships.push(ship);
  }
}

export {
  toggleOrientation,
  getOrientation,
  popShip,
  pushShip,
  getShipLength,
  getCurrentShip,
  allShipsPlaced,
  resetShips,
  placeAiShips,
};
