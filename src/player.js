class HumanPlayer {
  constructor(opponentBoard) {
    this.opponentBoard = opponentBoard;
  }
  attack = (location) => {
    const moves = this.opponentBoard.getAvailableMoves();
    const isAvailable = moves.find((move) => {
      const [x, y] = location;
      const [i, j] = move;
      return x === i && y === j;
    });
    if (isAvailable) {
      this.opponentBoard.receiveAttack(location);
    } else {
      return false;
    }
  };
}

class AiPlayer {
  constructor(opponentBoard) {
    this.opponentBoard = opponentBoard;
  }
  attack = () => {
    const moves = this.opponentBoard.getAvailableMoves();
    if (moves.length > 0) {
      const randomIndex = Math.floor(Math.random() * moves.length);
      this.opponentBoard.receiveAttack(moves[randomIndex]);
    } else {
      return false;
    }
  };
}

export { HumanPlayer, AiPlayer };
