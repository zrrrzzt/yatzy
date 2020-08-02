import shuffle from 'secure-shuffle'
import createPlayer from './create-player.js'
import allRounds from './rounds/all.js'

const createGame = () => {
  const players = []

  return {
    addPlayer (playerName) {
      players.push(createPlayer(playerName))
    },
    randomizePlayersOrder () {
      shuffle(players)
    },
    printPlayerNames () {
      console.log(players.map(player => player.getName()).join(', '))
    },
    play () {
      allRounds.map(round => players.map(round))
      players.map(player => {
        console.log(`${player.getName()}: ${player.getTotalScore()} points`)
      })
    }
  }
}

export default createGame
