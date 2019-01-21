const Round = require('./round');

class Game {
  constructor(player1, player2) {
    this.isComplete = false;
    this.isTie = false;
    this.players = player1 && player2 ? [player1, player2] : [];
    this.rounds = [];
  }

  play() {
    while (true) {
      // Create, play, and capture the round.
      const round = new Round(...this.players);
      round.play();
      this.rounds.push(round);

      // Check for wins.
      if (this.rounds.length >= 3) {
        if (this.rounds.filter(({ winner }) => winner === this.players[0]).length === 3) {
          this.winner = this.players[0];
          this.loser = this.players[1];
          this.isComplete = true;
          break;
        } else if (this.rounds.filter(({ winner }) => winner === this.players[1]).length === 3) {
          this.winner = this.players[1];
          this.loser = this.players[0];
          this.isComplete = true;
          break;
        }
      }
    }

    return this;
  }
}

module.exports = Game;
