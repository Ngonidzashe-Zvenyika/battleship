import Gameboard from '../src/gameboard';

test('Place carrier horizontally at [0,0] ', () => {
  const gameboard = new Gameboard();
  gameboard.place([0, 0], 'carrier', 'horizontal');
  for (let i = 0; i <= 5; i += 1) {
    const location = gameboard.board[0][i];
    if (i < 5) {
      expect(location.ship.length).toBe(5);
    } else if (i === 5) {
      expect(location.ship).toBeNull();
    }
  }
});

test('Fail to place carrier horizontally at [0,6] ', () => {
  const gameboard = new Gameboard();
  gameboard.place([0, 6], 'carrier', 'horizontal');
  const location = gameboard.board[0][6];
  expect(location.ship).toBeNull();
});

test('Fail to place ship on already occupied [0,0] - [0,4]', () => {
  const gameboard = new Gameboard();
  gameboard.place([0, 0], 'carrier', 'horizontal');
  for (let i = 0; i < 5; i += 1) {
    gameboard.place([0, i], 'carrier', 'horizontal');
    expect(gameboard.ships.length).toBe(1);
  }
});

test('Place carrier vertically at [0,0] ', () => {
  const gameboard = new Gameboard();
  gameboard.place([0, 0], 'carrier', 'vertical');
  for (let i = 0; i <= 5; i += 1) {
    const location = gameboard.board[i][0];
    if (i < 5) {
      expect(location.ship.length).toBe(5);
    } else if (i === 5) {
      expect(location.ship).toBeNull();
    }
  }
});

test('Fail to place carrier vertically at [6,0] ', () => {
  const gameboard = new Gameboard();
  gameboard.place([6, 0], 'carrier', 'vertical');
  const location = gameboard.board[6][0];
  expect(location.ship).toBeNull();
});

test('Fail to place ship on already occupied [0,0] - [4,0]', () => {
  const gameboard = new Gameboard();
  gameboard.place([0, 0], 'carrier', 'vertical');
  for (let i = 0; i < 5; i += 1) {
    gameboard.place([i, 0], 'carrier', 'vertical');
    expect(gameboard.ships.length).toBe(1);
  }
});

test('Returns the target cells if evaluation of placement is valid', () => {
  const gameboard = new Gameboard();
  const evaluation = gameboard.evaluatePlacement([0, 0], 'vertical', 5);
  expect(evaluation.valid).toBe(true);
  gameboard.place([0, 0], 'carrier', 'vertical');
  for (let i = 0; i < 5; i += 1) {
    const targetCell = evaluation.targetCells.find((cell) => {
      const [x, y] = cell;
      return x === i && y === 0;
    });
    expect(targetCell).toBeTruthy();
  }
});

test("Returns 'targetCells: null' if evaluation of placement is invalid", () => {
  const gameboard = new Gameboard();
  gameboard.place([0, 0], 'carrier', 'vertical');
  const evaluation = gameboard.evaluatePlacement([0, 0], 'vertical', 5);
  expect(evaluation.valid).toBe(false);
  expect(evaluation.targetCells).toBeNull();
});

test('Receive attack on empty square [0,0]', () => {
  const gameboard = new Gameboard();
  gameboard.receiveAttack([0, 0]);
  const attackLocation = gameboard.missedAttacks.find((attack) => {
    const [x, y] = attack;
    return x === 0 && y === 0;
  });
  expect(attackLocation).toEqual([0, 0]);
});

test('Receive attack on occupied square [0,0]', () => {
  const gameboard = new Gameboard();
  gameboard.place([0, 0], 'carrier', 'horizontal');
  const location = gameboard.board[0][0];
  gameboard.receiveAttack([0, 0]);
  const attackLocation = gameboard.succesfulAttacks.find((attack) => {
    const [x, y] = attack;
    return x === 0 && y === 0;
  });
  expect(location.ship.hitCount).toBe(1);
  expect(attackLocation).toEqual([0, 0]);
});

test('Report that all ships have been sunk', () => {
  const gameboard = new Gameboard();
  gameboard.place([0, 0], 'carrier', 'horizontal');
  for (let i = 0; i < 5; i += 1) {
    const location = gameboard.board[0][i];
    location.ship.hit();
  }
  gameboard.place([1, 0], 'battleship', 'horizontal');
  for (let i = 0; i < 4; i += 1) {
    const location = gameboard.board[1][i];
    location.ship.hit();
  }
  expect(gameboard.allShipsSunk()).toBe(true);
});

test("Report that 'not' all ships have been sunk", () => {
  const gameboard = new Gameboard();
  gameboard.place([0, 0], 'carrier', 'horizontal');
  for (let i = 0; i < 5; i += 1) {
    const location = gameboard.board[0][i];
    location.ship.hit();
  }
  gameboard.place([1, 0], 'battleship', 'horizontal');
  expect(gameboard.allShipsSunk()).toBe(false);
});

test('Get available moves on empty board', () => {
  const gameboard = new Gameboard();
  const moves = [];
  gameboard.board.forEach((row, i) =>
    row.forEach((cell, j) => moves.push([i, j])),
  );
  expect(gameboard.getAvailableMoves()).toEqual(moves);
});

test('Get available moves on busy board', () => {
  const gameboard = new Gameboard();
  gameboard.receiveAttack([0, 0]);
  const moves = [];
  gameboard.board.forEach((row, i) =>
    row.forEach((cell, j) => {
      if (!(i == 0 && j == 0)) {
        moves.push([i, j]);
      }
    }),
  );
  expect(gameboard.getAvailableMoves()).toEqual(moves);
});
