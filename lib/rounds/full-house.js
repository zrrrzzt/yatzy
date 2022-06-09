import { sortByLengthAndValue } from '../sort-by-length-and-value.js'

const fullHouse = player => {
  const dice = player.getDice()
  const round = 'full house'
  const rolls = []
  let rollCounter = 0
  player.unlockDice()
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
      return die
    })
    keepSecond.map((die, index) => {
      if (index <= 2) {
        die.lock()
      } else {
        die.unlock()
      }
      return die
    })
    hand.flat().map(die => die.unlock())
    rolls.push(dice.map(die => die.value()))
  }
  const final = dice.filter(die => die.locked())
  const score = final.length === 5 ? player.calculateScore() : 0
  player.addTurn({ round, score, rolls })
}

export {
  fullHouse
}
