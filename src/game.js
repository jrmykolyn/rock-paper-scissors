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
        const { player1: player1Wins, player2: player2Wins } = this.rounds.reduce((acc, { winner }) => {
          if (winner === this.players[0]) {
            acc.player1 = (acc.player1 + 1 || 1);
          } else {
            acc.player2 = (acc.player2 + 1 || 1);
          }

          return acc;
        }, {});

        if (player1Wins === 3) {
          this.winner = this.players[0];
          this.loser = this.players[1];
          this.isComplete = true;
          break;
        } else if (player2Wins === 3) {
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
