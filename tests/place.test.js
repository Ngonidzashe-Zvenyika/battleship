import Gameboard from '../src/gameboard';
import {
  toggleOrientation,
  getOrientation,
  popShip,
  pushShip,
  getShipLength,
  getCurrentShip,
  allShipsPlaced,
  resetShips,
  placeAiShips,
} from '../src/place';

test('Default orientation is horizontal', () => {
  expect(getOrientation()).toBe('horizontal');
});

test('Orientation changes when toggled', () => {
  toggleOrientation();
  expect(getOrientation()).toBe('vertical');
  toggleOrientation();
  expect(getOrientation()).toBe('horizontal');
});

test('Can pop element from ship stack', () => {
  const ship = popShip();
  expect(ship).toBe('carrier');
});

test('Can test if all ships have been popped/placed and reset ships', () => {
  popShip();
  popShip();
  popShip();
  const ship = popShip();
  expect(ship).toBe('destroyer');
  expect(allShipsPlaced()).toBe(true);
  resetShips();
  expect(allShipsPlaced()).toBe(false);
});

test('Can push ship back onto stack', () => {
  popShip();
  popShip();
  popShip();
  popShip();
  const ship = popShip();
  expect(ship).toBe('destroyer');
  expect(allShipsPlaced()).toBe(true);
  pushShip(ship);
  expect(allShipsPlaced()).toBe(false);
  resetShips();
});

test('Can determine ship length', () => {
  popShip();
  const ship = popShip();
  const length = getShipLength(ship);
  expect(ship).toBe('battleship');
  expect(length).toBe(4);
  resetShips();
});

test('Can get the current ship', () => {
  popShip();
  const ship = popShip();
  const length = getShipLength(ship);
  expect(ship).toBe('battleship');
  expect(length).toBe(4);
  resetShips();
});

test('Can get the ship on top of the stack', () => {
  let ship = getCurrentShip();
  expect(ship).toBe('carrier');
  popShip();
  ship = getCurrentShip();
  expect(ship).toBe('battleship');
});

test('Places five ships randomly on the ai board', () => {
  const board = new Gameboard();
  placeAiShips(board);
  expect(board.ships.length).toBe(5);
});
