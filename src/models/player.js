class Player {
  constructor(opts = {}) {
    this.firstName = opts.firstName;
    this.lastName = opts.lastName;
  }

  play() {
    const vals = ['rock', 'paper', 'scissors'];
    return vals[Math.floor(Math.random() * vals.length)];
  }

  getName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

module.exports = Player;
