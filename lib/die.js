import shuffle from 'secure-shuffle'

const Die = () => {
  const values = [1, 2, 3, 4, 5, 6]

  return {
    roll () {
      shuffle(values)
    },
    value () {
      return values[0]
    }
  }
}

export default Die
