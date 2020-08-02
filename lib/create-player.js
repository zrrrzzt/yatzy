import createDie from './create-die.js'

const createPlayer = name => {
  const dice = [...Array(5)].map(item => createDie())
  const scores = []

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
    addScore (score) {
      scores.push(score)
    },
    getTotalScore () {
      return scores.reduce((accumulator, current) => {
        accumulator += current
        return accumulator
      }, 0)
    }
  }
}

export default createPlayer
