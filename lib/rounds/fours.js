const keepThisValue = require('../keep-this-value')

const fours = player => {
  const dice = player.getDice()
  const round = 'fours'
  const rolls = []
  let rollCounter = 0
  player.unlockDice()
  while (rollCounter < 3) {
    rollCounter++
    player.rollDice()
    keepThisValue(dice, 4)
    rolls.push(dice.map(die => die.value()))
  }
  const score = player.calculateScore()
  player.addTurn({ round, score, rolls })
}

module.exports = fours
