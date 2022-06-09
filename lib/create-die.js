import shuffle from 'crypto-shuffle'

import { faces } from './faces.js'

const createDie = () => {
  const values = [1, 2, 3, 4, 5, 6]
  let isLocked = false
  shuffle(values)

  return {
    roll () {
      if (!isLocked) {
        shuffle(values)
      }
    },
    value () {
      return values[0]
    },
    face () {
      return faces[this.value()]
    },
    lock () {
      isLocked = true
    },
    unlock () {
      isLocked = false
    },
    locked () {
      return isLocked
    }
  }
}

export {
  createDie
}
