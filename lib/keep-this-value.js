const keepThisValue = (dice, value) => {
  dice.map(die => {
    if (die.value() === value) {
      die.lock()
    }
    return die
  })
}

module.exports = keepThisValue
