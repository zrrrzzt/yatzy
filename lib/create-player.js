import { createDie } from './create-die.js'

const createPlayer = name => {
  const dice = [...Array(5)].map(item => createDie())
  const turns = []

  return {
    getName () {
      return name
    },
    rollDice () {
      dice.map(die => die.roll())
    },
    getDice () {
      return dice
    },
    unlockDice () {
      dice.map(die => die.unlock())
    },
    showDice () {
      console.log(dice.map(die => die.face()).join(' '))
    },
    calculateScore () {
      return dice
        .filter(die => die.locked())
        .reduce((accumulator, current) => {
          accumulator += current.value()
          return accumulator
        }, 0)
    },
    getTotalScore () {
      return turns.reduce((accumulator, current) => {
        accumulator += current.score
        return accumulator
      }, 0)
    },
    addTurn (turn) {
      turns.push(turn)
    },
    getTurns () {
      return turns
    }
  }
}

export {
  createPlayer
}
