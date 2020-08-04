#!/usr/bin/env node
import createGame from './lib/create-game.js'

const players = process.argv.slice(2)
const Game = createGame()

players.map(player => Game.addPlayer(player))

Game.randomizePlayersOrder()

Game.printPlayerNames()
Game.play()
