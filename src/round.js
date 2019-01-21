const Player = require('./player');

class Round {
  constructor(player1, player2) {
    this.isComplete = false;
    this.isTie = false;
    this.players = player1 && player2 ? [player1, player2] : [];
  }

  play() {
    if (
      !this.players.length
      || !this.players.every((player) => player instanceof Player)
    ) {
      return;
    }

    const results = this.players.map((player) => player.play());
    const opts = ['rock', 'paper', 'scissors'];

    this.isComplete = true;

    if (results[0] === results[1]) {
      this.isTie = true;
      return;
    }

    if (results[0] === opts[0] && results[1] === opts[opts.length - 1]) {
      this.winner = this.players[0];
      this.loser = this.players[1];
    } else if (results[1] === opts[0] && results[0] === opts[opts.length - 1]) {
      this.winner = this.players[1];
      this.loser = this.players[0];
    } else if (opts.indexOf(results[0]) > opts.indexOf(results[1])) {
      this.winner = this.players[0];
      this.loser = this.players[1];
    } else {
      this.winner = this.players[1];
      this.loser = this.players[0];
    }
  }
}

module.exports = Round;
