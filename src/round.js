class Round {
  constructor(player1, player2) {
    this.isComplete = false;
    this.isTie = false;
    this.players = player1 && player2 ? [player1, player2] : [];
  }
}

module.exports = Round;
