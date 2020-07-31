const createGame = () => {
  const players = []

  return {
    addPlayer (player) {
      players.push(player)
    },
    printPlayers () {
      console.log(players.map(player => player.getName()).join(', '))
    }
  }
}

export default createGame
