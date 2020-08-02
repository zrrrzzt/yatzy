import keepThisValue from '../rules/keep-this-value.js'

const fours = player => {
  const dice = player.getDice()
  const round = 'fours'
  let rollCounter = 0
  player.unlockDice()
  while (rollCounter < 3) {
    rollCounter++
    console.log(`${player.getName()} - ${round} - round ${rollCounter}`)
    player.rollDice()
    keepThisValue(dice, 4)
    player.showDice()
  }
  const score = player.calculateScore()
  player.addScore(score)
  console.log(`${player.getName()} - ${round} - finished - ${score} point${score === 1 ? '': 's'}`)
}

export default fours