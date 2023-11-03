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
