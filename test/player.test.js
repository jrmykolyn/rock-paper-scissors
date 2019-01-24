const { expect } = require('chai');

const { Player } = require('../src/models');

describe('Player', () => {
  describe('constructor', () => {
    it('should not throw when instantiated without `opts`', () => {
      expect(() => new Player()).to.not.throw;
    });

    it('set the first and last name properties using the options object', () => {
      const player = new Player({ firstName: 'Foo', lastName: 'Bar' });

      expect(player.firstName).to.eq('Foo');
      expect(player.lastName).to.eq('Bar');
    });
  });
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
