const keepThisValue = require('../keep-this-value')

const twos = player => {
  const dice = player.getDice()
  const round = 'twos'
  const rolls = []
  let rollCounter = 0
  player.unlockDice()
  while (rollCounter < 3) {
    rollCounter++
    player.rollDice()
    keepThisValue(dice, 2)
    rolls.push(dice.map(die => die.value()))
  }
  const score = player.calculateScore()
  player.addTurn({ round, score, rolls })
}

module.exports = twos
