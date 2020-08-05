const largeStraight = player => {
  const dice = player.getDice()
  const round = 'large straight'
  const collection = []
  let rollCounter = 0
  player.unlockDice()
  console.log(`${player.getName()} - ${round}`)
  while (rollCounter < 3) {
    rollCounter++
    player.rollDice()
    dice.map(die => {
      if (!die.locked() && !collection.includes(die.value()) && die.value() > 1) {
        die.lock()
        collection.push(die.value())
      }
    })
    player.showDice()
  }
  const score = collection.lenght === 5 ? player.calculateScore() : 0
  player.addTurn({ round, score })
}

export default largeStraight
