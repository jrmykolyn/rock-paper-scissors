const { expect } = require('chai');

const Player = require('../src/player');
const Round = require('../src/round');

describe('Round', () => {
  describe('constructor()', () => {
    it('should set the players property to an empty array by default', () => {
      expect(new Round().players).to.eql([]);
    });

    it('should set the players property to an array of Player instances', () => {
      const player1 = new Player();
      const player2 = new Player();
      expect(new Round(player1, player2).players).to.eql([player1, player2]);
    });

    it('should set the isComplete property to false', () => {
      expect(new Round().isComplete).to.be.false;
    });

    it('should set the isTie property to false', () => {
      expect(new Round().isTie).to.be.false;
    });
  });
});
