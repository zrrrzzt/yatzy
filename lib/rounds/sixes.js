import { keepThisValue } from '../keep-this-value.js'

const sixes = player => {
  const dice = player.getDice()
  const round = 'sixes'
  const rolls = []
  let rollCounter = 0
  player.unlockDice()
  while (rollCounter < 3) {
    rollCounter++
    player.rollDice()
    keepThisValue(dice, 6)
    rolls.push(dice.map(die => die.value()))
  }
  const score = player.calculateScore()
  player.addTurn({ round, score, rolls })
}

export {
  sixes
}
