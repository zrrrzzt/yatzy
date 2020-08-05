const chance = player => {
  const dice = player.getDice()
  const round = 'chance'
  let rollCounter = 1
  player.unlockDice()
  console.log(`${player.getName()} - ${round}`)
  player.rollDice()
  // First  roll keep only values above 4
  dice.filter(die => die.value() > 4).map(die => die.lock())
  player.showDice()
  while (rollCounter < 3) {
    rollCounter++
    player.rollDice()
    dice.filter(die => die.value() >= 4).map(die => die.lock())
    player.showDice()
  }
  // Lock every die to calculate score correct
  dice.map(die => die.lock())
  const score = player.calculateScore()
  player.addTurn({ round, score })
}

export default chance
