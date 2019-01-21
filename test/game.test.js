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
});
