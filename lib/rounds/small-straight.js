const smallStraight = player => {
  const dice = player.getDice()
  const round = 'small straight'
  const rolls = []
  const collection = []
  let rollCounter = 0
  player.unlockDice()
  while (rollCounter < 3) {
    rollCounter++
    player.rollDice()
    dice.map(die => {
      if (!die.locked() && !collection.includes(die.value()) && die.value() < 6) {
        die.lock()
        collection.push(die.value())
      }
      return die
    })
    rolls.push(dice.map(die => die.value()))
  }
  const score = collection.lenght === 5 ? player.calculateScore() : 0
  player.addTurn({ round, score, rolls })
}

module.exports = smallStraight
