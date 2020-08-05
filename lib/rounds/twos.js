import keepThisValue from '../keep-this-value.js'

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
    player.showDice()
  }
  const score = player.calculateScore()
  player.addTurn({ round, score, rolls })
}

export default twos
