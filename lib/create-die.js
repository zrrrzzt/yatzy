import shuffle from 'secure-shuffle'
import faces from './faces.js'

const createDie = () => {
  const values = [1, 2, 3, 4, 5, 6]
  shuffle(values)

  return {
    roll () {
      shuffle(values)
    },
    value () {
      return values[0]
    },
    face () {
      return faces[this.value()]
    }
  }
}

export default createDie
