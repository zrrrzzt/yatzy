import shuffle from 'secure-shuffle'
import ones from './rounds/ones.js'

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
    },
    play () {
      players.map(ones)
    }
  }
}

export default createGame
