[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# yatzy

Just for fun an implementation of [yatzy](https://en.wikipedia.org/wiki/Yatzy) that will play the game for you... so you don't have to ;-)

VERY WIP starting with the variation "Forced Yatzy"

## Usage npx

Add players separated by space

```
$ npx yatzy "Ylva Marie" Geir
```

## Usage global install

```
$ npm i -g yatzy
```

```
$ yatzy "Ylva Marie" Geir
```

## Example as module

```JavaScript
// game.js
const yatzy = require('yatzy')

const Game = yatzy()
Game.addPlayer('Ylva Marie')
Game.addPlayer('Geir')
Game.randomizePlayersOrder()
Game.play()
Game.printScoreCard()
```

```
$ node game.js
```

# Licence

[MIT](LICENSE)