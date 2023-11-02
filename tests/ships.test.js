import {
  NewCarrier,
  NewBattleship,
  NewCruiser,
  NewSubmarine,
  NewDestroyer,
} from '../src/ships';

test('Carrier sinks with 5 hits', () => {
  const carrier = NewCarrier();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  expect(carrier.isSunk()).toBe(true);
});

test('Battleship sinks with 4 hits', () => {
  const battleship = NewBattleship();
  battleship.hit();
  battleship.hit();
  battleship.hit();
  battleship.hit();
  expect(battleship.isSunk()).toBe(true);
});

test('Cruiser sinks with 3 hits', () => {
  const cruiser = NewCruiser();
  cruiser.hit();
  cruiser.hit();
  cruiser.hit();
  expect(cruiser.isSunk()).toBe(true);
});

test('Submarine sinks with 3 hits', () => {
  const submarine = NewSubmarine();
  submarine.hit();
  submarine.hit();
  submarine.hit();
  expect(submarine.isSunk()).toBe(true);
});

test('Destroyer sinks with 2 hits', () => {
  const destroyer = NewDestroyer();
  destroyer.hit();
  destroyer.hit();
  expect(destroyer.isSunk()).toBe(true);
});
