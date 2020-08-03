const largeStraight = player => {
  const dice = player.getDice()
  const round = 'large straight'
  const collection = []
  let rollCounter = 0
  player.unlockDice()
  while (rollCounter < 3) {
    rollCounter++
    console.log(`${player.getName()} - ${round} - round ${rollCounter}`)
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
  player.addScore(score)
  console.log(`${player.getName()} - ${round} - finished - ${score} point${score === 1 ? '': 's'}`)
}

export default largeStraight
