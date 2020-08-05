const chance = player => {
  const dice = player.getDice()
  const round = 'chance'
  const rolls = []
  let rollCounter = 1
  player.unlockDice()
  player.rollDice()
  // First  roll keep only values above 4
  dice.filter(die => die.value() > 4).map(die => die.lock())
  rolls.push(dice.map(die => die.value()))
  while (rollCounter < 3) {
    rollCounter++
    player.rollDice()
    dice.filter(die => die.value() >= 4).map(die => die.lock())
    rolls.push(dice.map(die => die.value()))
  }
  // Lock every die to calculate score correct
  dice.map(die => die.lock())
  const score = player.calculateScore()
  player.addTurn({ round, score, rolls })
}

export default chance
