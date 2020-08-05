import sortByLengthAndValue from '../sort-by-length-and-value.js'

const onePair = player => {
  const dice = player.getDice()
  const round = 'one pair'
  let rollCounter = 0
  player.unlockDice()
  console.log(`${player.getName()} - ${round}`)
  while (rollCounter < 3) {
    rollCounter++
    player.rollDice()
    const hand = [[], [], [], [], [], []]
    dice.map(die => hand[die.value() - 1].push(die))
    hand.sort(sortByLengthAndValue)
    const keep = hand.shift()
    keep.map((die, index) => {
      if (index <= 1) {
        die.lock()
      } else {
        die.unlock()
      }
    })
    hand.flat().map(die => die.unlock())
    player.showDice()
  }
  const final = dice.filter(die => die.locked())
  const score = final.length === 2 ? player.calculateScore() : 0
  player.addTurn({ round, score })
}

export default onePair
