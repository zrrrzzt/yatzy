import createDie from './create-die.js'

const createPlayer = name => {
  const dice = [...Array(5)].map(item => createDie())

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
    }
  }
}

export default createPlayer
