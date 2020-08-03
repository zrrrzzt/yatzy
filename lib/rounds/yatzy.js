const reverseLengthSort = (a, b) => b.length - a.length

const yatzy = player => {
  const dice = player.getDice()
  const round = 'yatzy'
  let rollCounter = 0
  player.unlockDice()
  while (rollCounter < 3) {
    rollCounter++
    console.log(`${player.getName()} - ${round} - round ${rollCounter}`)
    player.rollDice()
    const hand = [[], [], [], [], [], []]
    dice.map(die => hand[die.value() - 1].push(die))
    hand.sort(reverseLengthSort)
    const keep = hand.shift()
    keep.map(die => die.lock())
    hand.flat().map(die => die.unlock())
    player.showDice()
  }
  const final = dice.filter(die => die.locked())
  const score = final.length === 5 ? 50 : 0
  player.addScore(score)
  console.log(`${player.getName()} - ${round} - finished - ${score} point${score === 1 ? '': 's'}`)
}

export default yatzy
