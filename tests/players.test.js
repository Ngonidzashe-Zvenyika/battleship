import Gameboard from '../src/gameboard';
import { HumanPlayer, AiPlayer } from '../src/player';

test('Human player attacks given square on enemy board', () => {
  const opponentBoard = new Gameboard();
  const player = new HumanPlayer(opponentBoard);
  player.attack([0, 0]);
  const attackLocation = opponentBoard.missedAttacks.find((attack) => {
    const [x, y] = attack;
    return x === 0 && y === 0;
  });
  expect(attackLocation).toEqual([0, 0]);
});

test("Player can't attack same square twice", () => {
  const opponentBoard = new Gameboard();
  const player = new HumanPlayer(opponentBoard);
  player.attack([0, 0]);
  expect(player.attack([0, 0])).toBe(false);
});

test('Ai player attacks random square on enemy board', () => {
  const opponentBoard = new Gameboard();
  const player = new AiPlayer(opponentBoard);
  player.attack();
  expect(opponentBoard.missedAttacks.length).toEqual(1);
});

test('Ai player does not repeat attacks on same square', () => {
  const opponentBoard = new Gameboard();
  const player = new AiPlayer(opponentBoard);
  for (let i = 0; i < 105; i += 1) {
    player.attack();
  }
  expect(opponentBoard.missedAttacks.length).toEqual(100);
});
