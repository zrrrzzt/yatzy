const bonus = player => {
  if (player.getTotalScore() >= 42) {
    player.addScore(50)
  } else {
    player.addScore(0)
  }
}

export default bonus
