import keepThisValue from '../rules/keep-this-value.js'

const threes = player => {
  const dice = player.getDice()
  const round = 'threes'
  let rollCounter = 0
  player.unlockDice()
  while (rollCounter < 3) {
    rollCounter++
    console.log(`${player.getName()} - ${round} - round ${rollCounter}`)
    player.rollDice()
    keepThisValue(dice, 3)
    player.showDice()
  }
  const score = player.calculateScore()
  player.addScore(score)
  console.log(`${player.getName()} - ${round} - finished - ${score} point${score === 1 ? '': 's'}`)
}

export default threes
