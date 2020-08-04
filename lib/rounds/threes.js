import keepThisValue from '../keep-this-value.js'

const threes = player => {
  const dice = player.getDice()
  const round = 'threes'
  let rollCounter = 0
  player.unlockDice()
  console.log(`${player.getName()} - ${round}`)
  while (rollCounter < 3) {
    rollCounter++
    player.rollDice()
    keepThisValue(dice, 3)
    player.showDice()
  }
  const score = player.calculateScore()
  player.addScore(score)
  console.log(`${player.getName()} - ${round} - finished - ${score} point${score === 1 ? '' : 's'}`)
}

export default threes
