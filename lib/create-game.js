import shuffle from 'secure-shuffle'
import createPlayer from './create-player.js'
import ones from './rounds/ones.js'

const createGame = () => {
  const players = []

  return {
    addPlayer (playerName) {
      players.push(createPlayer(playerName))
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
