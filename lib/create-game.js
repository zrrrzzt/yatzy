const shuffle = require('secure-shuffle')
const createPlayer = require('./create-player')
const allRounds = require('./rounds/all')

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
    },
    generateScoreCard () {
      const data = []
      const turns = players.map(player => {
        const name = player.getName()
        const rounds = player.getTurns().map(turn => Object.assign({ round: turn.round, [name]: turn.score }))
        rounds.push({ round: 'total score', [name]: player.getTotalScore() })
        return rounds
      })
      turns.map(turn => {
        turn.map((round, index) => {
          if (data[index]) {
            data[index] = Object.assign({}, data[index], round)
          } else {
            data[index] = round
          }
        })
      })
      return data
    },
    printScoreCard () {
      const data = this.generateScoreCard()
      console.table(data)
    }
  }
}

module.exports = createGame
