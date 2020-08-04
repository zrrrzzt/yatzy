[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# yatzy

Just for fun an implementation of [yatzy](https://en.wikipedia.org/wiki/Yatzy) that will play the game for you... so you don't have to ;-)

VERY WIP starting with the variation "Forced Yatzy"

Requires Node >= 14

# Usage npx

Add players separated by space

```
$ npx yatzy "Ylva Marie" Geir
```

# Example

```JavaScript
// game.js
import { createGame } from 'yatzy'

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
