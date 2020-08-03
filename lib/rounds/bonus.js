const bonus = player => {
  if (player.getTotalScore() >= 42) {
    player.addScore(50)
    console.log(`${player.getName()} - bonus - 50 poeng`)
  } else {
    player.addScore(0)
    console.log(`${player.getName()} - bonus - 0 poeng`)
  }
}

export default bonus
