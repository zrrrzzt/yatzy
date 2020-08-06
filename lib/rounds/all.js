const ones = require('./ones')
const twos = require('./twos')
const threes = require('./threes')
const fours = require('./fours')
const fives = require('./fives')
const sixes = require('./sixes')
const bonus = require('./bonus')
const onePair = require('./one-pair')
const twoPairs = require('./two-pairs')
const threeOfAKind = require('./three-of-a-kind')
const fourOfAKind = require('./four-of-a-kind')
const smallStraight = require('./small-straight')
const largeStraight = require('./large-straight')
const fullHouse = require('./full-house')
const chance = require('./chance')
const yatzy = require('./yatzy')

module.exports = [
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  bonus,
  onePair,
  twoPairs,
  threeOfAKind,
  fourOfAKind,
  smallStraight,
  largeStraight,
  fullHouse,
  chance,
  yatzy
]
