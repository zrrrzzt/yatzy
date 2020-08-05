import keepThisValue from '../keep-this-value.js'

const sixes = player => {
  const dice = player.getDice()
  const round = 'sixes'
  let rollCounter = 0
  player.unlockDice()
  console.log(`${player.getName()} - ${round}`)
  while (rollCounter < 3) {
    rollCounter++
    player.rollDice()
    keepThisValue(dice, 6)
    player.showDice()
  }
  const score = player.calculateScore()
  player.addTurn({ round, score })
}

export default sixes
