const bonus = player => {
  const round = 'bonus'
  let score = 0
  if (player.getTotalScore() >= 42) {
    score = 50
  }
  player.addTurn({ round, score })
}

export default bonus
