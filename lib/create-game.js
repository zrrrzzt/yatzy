import shuffle from 'secure-shuffle'

const createGame = () => {
  const players = []

  return {
    addPlayer (player) {
      players.push(player)
    },
    randomize () {
      shuffle(players)
    },
    printPlayers () {
      console.log(players.map(player => player.getName()).join(', '))
    }
  }
}

export default createGame
