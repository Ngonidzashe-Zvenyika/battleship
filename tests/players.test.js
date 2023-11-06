import Gameboard from '../src/gameboard';
import { HumanPlayer, AiPlayer } from '../src/players';

test('Human player attacks given square on enemy board', () => {
  const aiBoard = new Gameboard();
  const humanBoard = new Gameboard();
  const ai = new AiPlayer(humanBoard);
  const human = new HumanPlayer(ai, aiBoard);
  human.attack([0, 0]);
  const attackLocation = aiBoard.missedAttacks.find((attack) => {
    const [x, y] = attack;
    return x === 0 && y === 0;
  });
  expect(attackLocation).toEqual([0, 0]);
});

test("Human player can't attack same square twice", () => {
  const aiBoard = new Gameboard();
  const humanBoard = new Gameboard();
  const ai = new AiPlayer(humanBoard);
  const human = new HumanPlayer(ai, aiBoard);
  human.attack([0, 0]);
  const gameStatus = human.attack([0, 0]);
  expect(gameStatus.moveValid).toBe(false);
});

test('Ai player attacks random square on enemy board', () => {
  const humanBoard = new Gameboard();
  const ai = new AiPlayer(humanBoard);
  ai.attack();
  expect(humanBoard.missedAttacks.length).toEqual(1);
});

test('Ai player does not repeat attacks on same square', () => {
  const humanBoard = new Gameboard();
  const ai = new AiPlayer(humanBoard);
  for (let i = 0; i < 105; i += 1) {
    ai.attack();
  }
  expect(humanBoard.missedAttacks.length).toEqual(100);
});

test('Ai player plays automatically after human player', () => {
  const aiBoard = new Gameboard();
  const humanBoard = new Gameboard();
  const ai = new AiPlayer(humanBoard);
  const human = new HumanPlayer(ai, aiBoard);
  human.attack([0, 0]);
  expect(aiBoard.missedAttacks.length).toBe(1);
  expect(humanBoard.missedAttacks.length).toBe(1);
});

test('Human player reports the status of the game after playing a move', () => {
  const aiBoard = new Gameboard();
  aiBoard.place([0, 0], 'carrier', 'horizontal');
  const humanBoard = new Gameboard();
  const ai = new AiPlayer(humanBoard);
  const human = new HumanPlayer(ai, aiBoard);
  for (let i = 0; i < 4; i += 1) {
    const gameStatus = human.attack([0, i]);
    expect(gameStatus).toEqual({
      gameWinner: null,
      gameOver: false,
      moveValid: true,
    });
  }
  const gameStatus = human.attack([0, 4]);
  expect(gameStatus).toEqual({
    gameWinner: 'human',
    gameOver: true,
    moveValid: true,
  });
});

test('Ai player reports the status of the game after playing a move', () => {
  const humanBoard = new Gameboard();
  humanBoard.place([0, 0], 'carrier', 'horizontal');
  const ai = new AiPlayer(humanBoard);
  let result;
  let gameOver = false;
  let count = 0;
  while (!gameOver) {
    const gameStatus = ai.attack();
    result = gameStatus;
    gameOver = gameStatus.gameOver;
    count += 1;
  }
  expect(count).toBeLessThanOrEqual(100);
  expect(result).toEqual({
    gameWinner: 'ai',
    gameOver: true,
    moveValid: true,
  });
});
