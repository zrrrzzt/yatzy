const chance = player => {
  const dice = player.getDice()
  const round = 'chance'
  let rollCounter = 1
  player.unlockDice()
  console.log(`${player.getName()} - ${round} - round ${rollCounter}`)
  player.rollDice()
  dice.filter(die => die.value() > 4).map(die => die.lock())
  player.showDice()
  while (rollCounter < 3) {
    rollCounter++
    console.log(`${player.getName()} - ${round} - round ${rollCounter}`)
    player.rollDice()
    dice.filter(die => die.value() >= 4).map(die => die.lock())
    player.showDice()
  }
  // Lock every die to calculate score correct 
  dice.map(die => die.lock())
  const score = player.calculateScore()
  player.addScore(score)
  console.log(`${player.getName()} - ${round} - finished - ${score} point${score === 1 ? '': 's'}`)
}

export default chance
