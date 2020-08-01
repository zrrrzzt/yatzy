import keepThisValue from '../rules/keep-this-value.js'

const ones = player => {
  const dice = player.getDice()
  let rollCounter = 0
  player.unlockDice()
  while (rollCounter < 3) {
    rollCounter++
    console.log(`${player.getName()} - round ${rollCounter}`)
    player.rollDice()
    player.showDice()
    keepThisValue(dice, 1)
  }
  console.log(`${player.getName()} - finished`)
}

export default ones
