import keepThisValue from '../rules/keep-this-value.js'

const ones = player => {
  const dice = player.getDice()
  const round = 'ones'
  let rollCounter = 0
  player.unlockDice()
  while (rollCounter < 3) {
    rollCounter++
    console.log(`${player.getName()} - ${round} - round ${rollCounter}`)
    player.rollDice()
    keepThisValue(dice, 1)
    player.showDice()
  }
  console.log(`${player.getName()} - ${round} - finished`)
}

export default ones
