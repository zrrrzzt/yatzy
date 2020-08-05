import createDie from './create-die.js'

const createPlayer = name => {
  const dice = [...Array(5)].map(item => createDie())
  const scores = []
  const logs = []
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
    addScore (score) {
      scores.push(score)
    },
    getTotalScore () {
      return scores.reduce((accumulator, current) => {
        accumulator += current
        return accumulator
      }, 0)
    },
    addLog (message) {
      logs.push(message)
      console.log(message)
    },
    addTurn (turn) {
      turns.push(turn)
      const { round, score } = turn
      this.addScore(score)
      this.addLog(`${this.getName()} - ${round} - ${score} point${score === 1 ? '' : 's'}`)

    }
  }
}

export default createPlayer
