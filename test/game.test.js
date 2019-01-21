const { expect } = require('chai');

const Game = require('../src/game');
const Player = require('../src/player');

describe('Game', () => {
  describe('constructor()', () => {
    it('should set the players property to an empty array by default', () => {
      expect(new Game().players).to.eql([]);
    });

    it('should set the players property to an array of Player instances', () => {
      const player1 = new Player();
      const player2 = new Player();
      expect(new Game(player1, player2).players).to.eql([player1, player2]);
    });

    it('should set the rounds property to an empty array', () => {
      expect(new Game().rounds).to.eql([]);
    });

    it('should set the isComplete property to false', () => {
      expect(new Game().isComplete).to.be.false;
    });

    it('should set the isTime property to false', () => {
      expect(new Game().isTie).to.be.false;
    });
  });

  describe('play()', () => {
    it('should correctly set the winner and loser properties when the first player wins', () => {
      const player1 = new Player();
      const player2 = new Player();
      player1.play = () => 'rock';
      player2.play = () => 'scissors';
      const game = new Game(player1, player2);

      game.play();

      expect(game.winner).to.eq(player1);
      expect(game.loser).to.eq(player2);
    });

    it('should correctly set the winner and loser properties when the second player wins', () => {
      const player1 = new Player();
      const player2 = new Player();
      player1.play = () => 'paper';
      player2.play = () => 'scissors';
      const game = new Game(player1, player2);

      game.play();

      expect(game.winner).to.eq(player2);
      expect(game.loser).to.eq(player1);
    });
  });
});
