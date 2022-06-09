const keepThisValue = (dice, value) => {
  dice.map(die => {
    if (die.value() === value) {
      die.lock()
    }
    return die
  })
}

export {
  keepThisValue
}
