class Player {
  play() {
    const vals = ['rock', 'paper', 'scissors'];
    return vals[Math.floor(Math.random() * vals.length)];
  }
}

module.exports = Player;
