const { expect } = require('chai');
const sinon = require('sinon');

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

  describe('API', () => {
    describe('play()', () => {
      let player1 = 'foo';
      let player2 = 'bar';

      beforeEach(() => {
        player1 = new Player();
        player2 = new Player();
      });

      it('should return undefined if no players are provided', () => {
        expect(new Round().play()).to.be.undefined;
      });

      it('should set the isComplete property to true', () => {
        const round = new Round(new Player(), new Player());

        round.play();

        expect(round.isComplete).to.be.true;
      });

      it('should set the isTie property to true if both players select the same option', () => {
        const stub = sinon.stub(Player.prototype, 'play').returns('foo');
        const round = new Round(new Player(), new Player());

        round.play();

        expect(round.isComplete).to.be.true;

        stub.restore();
      });

      const opts = [
        { player1Option: 'rock', player2Option: 'scissors', winner: 0, loser: 1 },
        { player1Option: 'scissors', player2Option: 'paper', winner: 0, loser: 1 },
        { player1Option: 'paper', player2Option: 'rock', winner: 0, loser: 1 },
        { player1Option: 'scissors', player2Option: 'rock', winner: 1, loser: 0 },
        { player1Option: 'paper', player2Option: 'scissors', winner: 1, loser: 0 },
        { player1Option: 'rock', player2Option: 'paper', winner: 1, loser: 0 },
      ];

      opts.forEach((opt) => {
        it(`should correctly set the winner and loser properties when the first player selects "${opt.player1Option}", and the second player selects "${opt.player2Option}"`, () => {
          player1.play = () => opt.player1Option;
          player2.play = () => opt.player2Option;
          const round = new Round(player1, player2);

          round.play();

          expect(round.winner).to.eq(round.players[opt.winner]);
          expect(round.loser).to.eq(round.players[opt.loser]);
        });
      });
    });
  });
});
