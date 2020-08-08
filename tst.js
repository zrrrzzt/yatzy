const yatzy = require('./index')

const Game = yatzy()
Game.addPlayer('Ylva Marie')
Game.addPlayer('Geir')
Game.randomizePlayersOrder()

Game.play()
Game.printScoreCard()
console.log(JSON.stringify(Game.generateGamePlay(), null, 2))
