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

      it('should correctly set the winner and loser properties when the first player selects "rock", and the second player selects "scissors"', () => {
        const player1 = new Player();
        const player2 = new Player();
        player1.play = () => 'rock';
        player2.play = () => 'scissors';
        const round = new Round(player1, player2);

        round.play();

        expect(round.winner).to.eq(player1);
        expect(round.loser).to.eq(player2);
      });

      it('should correctly set the winner and loser properties when the first player selects "scissors", and the second player selects "paper"', () => {
        const player1 = new Player();
        const player2 = new Player();
        player1.play = () => 'scissors';
        player2.play = () => 'paper';
        const round = new Round(player1, player2);

        round.play();

        expect(round.winner).to.eq(player1);
        expect(round.loser).to.eq(player2);
      });

      it('should correctly set the winner and loser properties when the first player selects "paper", and the second player selects "rock"', () => {
        const player1 = new Player();
        const player2 = new Player();
        player1.play = () => 'paper';
        player2.play = () => 'rock';
        const round = new Round(player1, player2);

        round.play();

        expect(round.winner).to.eq(player1);
        expect(round.loser).to.eq(player2);
      });

      it('should correctly set the winner and loser properties when the first player selects "scissors, and the second player selects "rock"', () => {
        const player1 = new Player();
        const player2 = new Player();
        player1.play = () => 'scissors';
        player2.play = () => 'rock';
        const round = new Round(player1, player2);

        round.play();

        expect(round.winner).to.eq(player2);
        expect(round.loser).to.eq(player1);
      });

      it('should correctly set the winner and loser properties when the first player selects "paper, and the second player selects "scissors"', () => {
        const player1 = new Player();
        const player2 = new Player();
        player1.play = () => 'paper';
        player2.play = () => 'scissors';
        const round = new Round(player1, player2);

        round.play();

        expect(round.winner).to.eq(player2);
        expect(round.loser).to.eq(player1);
      });

      it('should correctly set the winner and loser properties when the first player selects "rock, and the second player selects "paper"', () => {
        const player1 = new Player();
        const player2 = new Player();
        player1.play = () => 'rock';
        player2.play = () => 'paper';
        const round = new Round(player1, player2);

        round.play();

        expect(round.winner).to.eq(player2);
        expect(round.loser).to.eq(player1);
      });
    });
  });
});
