import Gameboard from '../src/gameboard';

test('Place carrier horizontally at [0,0] ', () => {
  const gameboard = new Gameboard();
  gameboard.place([0, 0], 'carrier', 'horizontal');
  for (let i = 0; i <= 5; i += 1) {
    if (i < 5) {
      expect(gameboard.board[0][i].value).toBe(1);
      expect(gameboard.board[0][i].ship.length).toBe(5);
    } else if (i === 5) {
      expect(gameboard.board[0][i].value).toBe(0);
      expect(gameboard.board[0][i].ship).toBe(null);
    }
  }
});

test('Fail to place carrier horizontally at [0,6] ', () => {
  const gameboard = new Gameboard();
  gameboard.place([0, 6], 'carrier', 'horizontal');
  expect(gameboard.board[0][6].value).toBe(0);
  expect(gameboard.board[0][6].ship).toBe(null);
});

test('Place carrier vertically at [0,0] ', () => {
  const gameboard = new Gameboard();
  gameboard.place([0, 0], 'carrier', 'vertical');
  for (let i = 0; i <= 5; i += 1) {
    if (i < 5) {
      expect(gameboard.board[i][0].value).toBe(1);
      expect(gameboard.board[i][0].ship.length).toBe(5);
    } else if (i === 5) {
      expect(gameboard.board[i][0].value).toBe(0);
      expect(gameboard.board[i][0].ship).toBe(null);
    }
  }
});

test('Fail to place carrier vertically at [6,0] ', () => {
  const gameboard = new Gameboard();
  gameboard.place([6, 0], 'carrier', 'vertical');
  expect(gameboard.board[6][0].value).toBe(0);
  expect(gameboard.board[6][0].ship).toBe(null);
});