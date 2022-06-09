const reverseLengthSort = (a, b) => b.length - a.length

const yatzy = player => {
  const dice = player.getDice()
  const round = 'yatzy'
  const rolls = []
  let rollCounter = 0
  player.unlockDice()
  while (rollCounter < 3) {
    rollCounter++
    player.rollDice()
    const hand = [[], [], [], [], [], []]
    dice.map(die => hand[die.value() - 1].push(die))
    hand.sort(reverseLengthSort)
    const keep = hand.shift()
    keep.map(die => die.lock())
    hand.flat().map(die => die.unlock())
    rolls.push(dice.map(die => die.value()))
  }
  const final = dice.filter(die => die.locked())
  const score = final.length === 5 ? 50 : 0
  player.addTurn({ round, score, rolls })
}

export {
  yatzy
}
