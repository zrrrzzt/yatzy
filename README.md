[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# yatzy

Just for fun an implementation of yatzy that will play the game for you... so you don't have to ;-)

VERY WIP

Requires Node >= 14

# Example

```JavaScript
// game.js
import createGame from './lib/create-game.js'

const Game = createGame()
Game.addPlayer('Ylva Marie')
Game.addPlayer('Geir')
Game.randomizePlayersOrder()
Game.printPlayerNames()
Game.play()
```

```
$ node game.js
```

# Licence

[MIT](LICENSE)
