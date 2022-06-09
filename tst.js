import yatzy from './index.js'

const Game = yatzy()
Game.addPlayer('Ylva Marie')
Game.addPlayer('Geir')
Game.randomizePlayersOrder()

Game.play()
Game.printScoreCard()
