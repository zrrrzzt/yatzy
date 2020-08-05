import keepThisValue from '../keep-this-value.js'

const twos = player => {
  const dice = player.getDice()
  const round = 'twos'
  let rollCounter = 0
  player.unlockDice()
  console.log(`${player.getName()} - ${round}`)
  while (rollCounter < 3) {
    rollCounter++
    player.rollDice()
    keepThisValue(dice, 2)
    player.showDice()
  }
  const score = player.calculateScore()
  player.addTurn({ round, score })
}

export default twos
