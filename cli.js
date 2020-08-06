#!/usr/bin/env node
const createGame = require('./lib/create-game')

const players = process.argv.slice(2)
const Game = createGame()

players.map(player => Game.addPlayer(player))

Game.randomizePlayersOrder()

Game.play()
Game.printScoreCard()
