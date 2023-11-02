class Ship {
  constructor(length) {
    this.length = length;
    this.hitCount = 0;
  }
  hit = () => (this.hitCount += 1);
  isSunk = () => (this.hitCount === this.length ? true : false);
}

function NewCarrier() {
  const carrier = new Ship(5);
  return carrier;
}

function NewBattleship() {
  const battleship = new Ship(4);
  return battleship;
}

function NewCruiser() {
  const cruiser = new Ship(3);
  return cruiser;
}

function NewSubmarine() {
  const submarine = new Ship(3);
  return submarine;
}

function NewDestroyer() {
  const destroyer = new Ship(2);
  return destroyer;
}

export { NewCarrier, NewBattleship, NewCruiser, NewSubmarine, NewDestroyer };
