import sortByLengthAndValue from '../sort-by-length-and-value.js'

const fullHouse = player => {
  const dice = player.getDice()
  const round = 'full house'
  let rollCounter = 0
  player.unlockDice()
  console.log(`${player.getName()} - ${round}`)
  while (rollCounter < 3) {
    rollCounter++
    player.rollDice()
    const hand = [[], [], [], [], [], []]
    dice.map(die => hand[die.value() - 1].push(die))
    hand.sort(sortByLengthAndValue)
    const keepFirst = hand.shift()
    const keepSecond = hand.shift()
    keepFirst.map((die, index) => {
      if (index <= 2) {
        die.lock()
      } else {
        die.unlock()
      }
    })
    keepSecond.map((die, index) => {
      if (index <= 2) {
        die.lock()
      } else {
        die.unlock()
      }
    })
    hand.flat().map(die => die.unlock())
    player.showDice()
  }
  const final = dice.filter(die => die.locked())
  const score = final.length === 5 ? player.calculateScore() : 0
  player.addScore(score)
  console.log(`${player.getName()} - ${round} - finished - ${score} point${score === 1 ? '' : 's'}`)
}

export default fullHouse