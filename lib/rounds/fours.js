import keepThisValue from '../keep-this-value.js'

const fours = player => {
  const dice = player.getDice()
  const round = 'fours'
  let rollCounter = 0
  player.unlockDice()
  console.log(`${player.getName()} - ${round}`)
  while (rollCounter < 3) {
    rollCounter++
    player.rollDice()
    keepThisValue(dice, 4)
    player.showDice()
  }
  const score = player.calculateScore()
  player.addScore(score)
  console.log(`${player.getName()} - ${round} - finished - ${score} point${score === 1 ? '' : 's'}`)
}

export default fours
