const { expect } = require('chai');

const { Player } = require('../src/models');

describe('Player', () => {
  describe('API', () => {
    describe('play()', () => {
      it('should return one of: "rock"; "paper"; "scissors"', () => {
        const player = new Player();

        const results = new Array(100).fill(null).map(() => player.play());

        expect(results.every((result) => ['rock', 'paper', 'scissors'].includes(result))).to.be.true;
      });
    });
  });
});
