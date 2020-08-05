import { createGame } from './index.js'

const Game = createGame()
Game.addPlayer('Ylva Marie')
Game.addPlayer('Geir')
Game.randomizePlayersOrder()

Game.printPlayerNames()
Game.play()
Game.printScoreCard()
