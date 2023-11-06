class HumanPlayer {
  constructor(opponent, opponentBoard) {
    this.opponent = opponent;
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
      const humanWin = this.opponentBoard.allShipsSunk();
      if (humanWin) {
        return { gameWinner: 'human', gameOver: true, moveValid: true };
      } else {
        const aiMove = this.opponent.attack();
        return aiMove;
      }
    } else {
      return { gameWinner: null, gameOver: false, moveValid: false };
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
      const aiWin = this.opponentBoard.allShipsSunk();
      if (aiWin) {
        return { gameWinner: 'ai', gameOver: true, moveValid: true };
      } else {
        return { gameWinner: null, gameOver: false, moveValid: true };
      }
    } else {
      return { gameWinner: null, gameOver: false, moveValid: false };
    }
  };
}

export { HumanPlayer, AiPlayer };
